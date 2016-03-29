app.model.set({
	name:"user",
	init:function(module){
		var zone={};
		var group={};
		var album={};
		/*登录信息*/
		var loginMessage=null;
		/*登录*/
		function login(name,key,fn){
			var result=_.findWhere(module.cache,{name:name,key:key});
			if(result){
				loginMessage=result;
				fn(true);
			}else{
				app.pop.on("账号或密码错误");
				fn(false);
			}
		};
		/*注册*/
		function regest(name,key,fn){
			if(_.findWhere(module.cache,{name:name})){
				app.pop.on("注册手机已有");
				fn(false);
			}else{/*写入*/
				var newId=app.uuid();
				module.cache[newId]={
					id:newId,
					name:name,
					key:key,
					step:["star"],
					stepDay:0,
					icon:"",
					dsc:"",
					sex:0,
					age:0,
					province:"",
					city:"",
					birthday:0,
					job:"",
					company:"",
					school:"",
					hometown:"",
					email:"",
					mine:{
						interested:"",
						music:"",
						idol:"",
						readed:"",
						heared:""
					},
					album:[],
					group:{
						creat:[],
						admin:[],
						member:[]
					},
					money:0,
					vip:null,
					vipDay:0,
					diy:{
						pop:null,
						redpacket:null,
						style:null,
						font:null,
						ticket:null,
						call:null,
						background:null,
						face:null,
						music:null,
						suit:null,
						pandant:null
					},
					collection:[],
					file:[],
					praise:[],
					attention:[],
					readed:[],
					share:[],
					reply:[],
					friend:{
						checked:[],
						request:[],
						response:[],
						reject:[]
					}
				};
				module.set(module,fn);
			}
		};
		/*添加好友*/
		function addFriend(from,to,fn){
			if(!_.contains(module.cache[to].friend.reject, from)){
				module.cache[from].friend.request.push(to);
				module.cache[to].friend.response.push(from);
				module.set(module,fn);
			}else{
				if(fn){fn(false);}
			}
		};
		/*拒绝添加好友*/
		function rejectFriend(from,to,fn){
			module.cache[to].friend.reject.push(from);
			module.cache[from].friend.request=_.without(module.cache[from].friend.request,to);
			module.cache[to].friend.response=_.without(module.cache[from].friend.response,from);
			module.set(module,fn);
		};
		/*确认添加好友*/
		function checkFriend(from,to,fn){
			module.cache[from].friend.checked.push(to);
			module.cache[to].friend.checked.push(from);
			module.cache[from].friend.request=_.without(module.cache[from].friend.request,to);
			module.cache[to].friend.response=_.without(module.cache[from].friend.response,from);
			module.set(module,fn);
		};
		/*删除好友*/
		function removeFriend(from,to,fn){
			module.cache[to].friend.reject.push(from);
			module.cache[from].friend.checked=_.without(module.cache[from].friend.checked,to);
			module.cache[to].friend.checked=_.without(module.cache[from].friend.checked,from);
			module.set(module,fn);
		};
		/*赞*/
		function praise(zid,id,fn,end){
			module.cache[id].praise.push(zid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					zone.praise(zid,id,fn,true);	
				}
			});
		};
		/*取消赞*/
		function cancelPraise(zid,id,fn,end){
			module.cache[id].praise=_.without(module.cache[id].praise,zid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					zone.cancelPraise(zid,id,fn,true);
				}
			});
		};
		/*关注*/
		function attention(zid,id,fn,end){
			module.cache[id].attention.push(zid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					zone.attention(zid,id,fn,true);
				}
			});
		};
		/*取消关注*/
		function cancelAttention(zid,id,fn,end){
			module.cache[id].attention=_.without(module.cache[id].attention,zid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					zone.cancelAttention(zid,id,fn,true);
				}
			});
		};
		/*看了*/
		function readed(zid,id,fn,end){
			module.cache[id].readed.push(zid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					zone.readed(zid,id,fn,true);
				}
			});
		};
		/*分享*/
		function share(zid,id,fn,end){
			module.cache[id].share.push(zid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					zone.share(zid,id,fn,true);
				}
			});
		};
		/*回复*/
		function reply(zid,id,to,text,fn,end){
			module.cache[id].reply.push({form:id,to:to,text:text,readed:false,time:new Date().getTime(),zid:zid});
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					zone.reply(zid,id,to,text,fn,true);
				}
			});
		};
		/*创建组*/
		function creatGroup(gid,name,fn,end){
			if(!gid&&!end){
				gid=app.uuid();
			}
			module.cache[loginMessage.id].group.creat.push(gid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					group.add(gid,name,fn,true);
				}
			});
		};
		function joinGroup(gid,uid,fn,end){
			module.cache[uid].group.member.push(gid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					group.join(gid,uid,fn,true);
				}
			});
		};
		function outGroup(gid,uid,fn,end){
			module.cache[uid].group.member=_.without(module.cache[uid].group.member,gid);
			module.cache[uid].group.creat=_.without(module.cache[uid].group.creat,gid);
			module.cache[uid].group.admin=_.without(module.cache[uid].group.admin,gid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					group.out(gid,uid,fn,true);
				}
			});
		};
		function addAdminGroup(gid,uid,fn,end){
			module.cache[uid].group.member=_.without(module.cache[loginMessage.id].group.member,gid);
			module.cache[uid].group.admin.push(gid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					group.addAdmin(gid,uid,fn,true);
				}
			});
		};
		function cancelAdminGroup(gid,uid,fn,end){
			module.cache[uid].group.admin=_.without(module.cache[loginMessage.id].group.member,gid);
			module.cache[uid].group.member.push(gid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					group.cancelAdmin(gid,uid,fn,true);
				}
			});
		};
		function creatAlbum(aid,name,dsc,fn,end){
			module.cache[loginMessage.id].album.push(aid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					album.creat(aid,name,dsc,fn,true);
				}
			});
		};
		function removeAlbum(aid,fn,end){
			module.cache[loginMessage.id].album=_.without(module.cache[loginMessage.id].album,aid);
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					album.remove(aid,fn,true);
				}
			});
		};
		function searchNotFriend(fn){
			
		}
		module.exports.loginMessage=function(){
			return loginMessage;
		}
		module.exports.login=function(name,key,fn){
			login(name,key,fn);
		};
		module.exports.regest=function(name,key,fn){
			regest(name,key,fn);
		};
		module.exports.addFriend=function(from,to,fn){
			addFriend(from,to,fn);
		};
		module.exports.rejectFriend=function(from,to,fn){
			rejectFriend(from,to,fn)
		};
		module.exports.checkFriend=function(from,to,fn){
			checkFriend(from,to,fn);
		};
		module.exports.removeFriend=function(from,to,fn){
			removeFriend(from,to,fn);
		};
		module.exports.praise=function(zid,id,fn,end){
			praise(zid,id,fn,end);
		};
		module.exports.cancelPraise=function(zid,id,fn,end){
			cancelPraise(zid,id,fn,end);
		};
		module.exports.attention=function(zid,id,fn,end){
			attention(zid,id,fn,end);
		};
		module.exports.cancelAttention=function(zid,id,fn,end){
			cancelAttention(zid,id,fn,end);
		};
		module.exports.readed=function(zid,id,fn,end){
			readed(zid,id,fn,end);
		};
		module.exports.share=function(zid,id,fn,end){
			share(zid,id,fn,end);
		};
		module.exports.reply=function(zid,id,to,text,fn,end){
			reply(zid,id,to,text,fn,end);
		};
		module.exports.creatGroup=function(gid,name,fn,end){
			creatGroup(gid,name,fn,end);
		};
		module.exports.joinGroup=function(gid,uid,fn,end){
			joinGroup(gid,uid,fn,end);
		};
		module.exports.outGroup=function(gid,uid,fn,end){
			outGroup(gid,uid,fn,end);
		};
		module.exports.addAdminGroup=function(gid,uid,fn,end){
			addAdminGroup(gid,uid,fn,end);
		};
		module.exports.cancelAdminGroup=function(gid,uid,fn,end){
			cancelAdminGroup(gid,uid,fn,end);
		};
		module.exports.removeAlbum=function(aid,fn,end){
			removeAlbum(aid,fn,end);
		};
		module.exports.searchNotFriend=function(fn){
			searchNotFriend(fn);
		};
		app.model.get("zone",function(returnData){
			zone=returnData;
		});
		app.model.get("group",function(returnData){
			group=returnData;
		});
		app.model.get("album",function(returnData){
			album=returnData;
		});
	},
	get:function(module,callback){/*从数据源获取数据*/
		if(app.cache(module.name)){
				module.cache=app.cache(module.name);
					if(callback){/*返回*/
							callback();
						}
				}else{
				module.set(module,callback);
			}
		
	},
	set:function(module,callback){/*把数据推送到数据源*/
		app.cache(module.name,module.cache);
		if(callback){/*返回*/
			callback();
		}
	}
});