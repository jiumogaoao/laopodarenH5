app.model.set({
	name:"group",
	init:function(module){
		var user={};
		/*创建组*/
		function add(gid,name,fn,end){
			if(!gid&&!end){
				gid=app.uuid();
			}
			var self=user.loginMessage();
			module.cache[gid]={
				id:gid,
				name:name,
				dsc:"",
				type:0,
				file:[],
				album:[],
				publics:"",
				action:[],
				sign:[],
				vote:[],
				link:"",
				app:[],
				member:[{id:self.id,nickName:"",type:"owner"}]
			};
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					user.creatGroup(gid,name,fn,true);	
				}
			});
		};
		function join(gid,uid,fn,end){
			var self=user.loginMessage();
			module.cache[gid].member.push({id:uid,nickName:"",type:"owner"});
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					user.joinGroup(gid,uid,fn,true);	
				}
			});
		};
		function out(gid,uid,fn,end){
			var self=user.loginMessage();
			module.cache[gid].member=_.reject(module.cache[gid].member,{id:uid});
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					user.outGroup(gid,uid,fn,true);	
				}
			});
		};
		function addAdmin(gid,uid,fn,end){
			_.findWhere(module.cache[gid].member,{id:uid}).type="admin";
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					user.addAdminGroup(gid,uid,fn,true);	
				}
			});
		};
		function cancelAdmin(gid,uid,fn,end){
			_.findWhere(module.cache[gid].member,{id:uid}).type="member";
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					user.cancelAdminGroup(gid,uid,fn,true);	
				}
			});
		};
		module.exports.add=function(gid,name,fn,end){
			add(gid,name,fn,end);
		};
		module.exports.join=function(gid,uid,fn,end){
			join(gid,uid,fn,end);
		};
		module.exports.out=function(gid,uid,fn,end){
			out(gid,uid,fn,end);
		};
		module.exports.addAdmin=function(gid,uid,fn,end){
			addAdmin(gid,uid,fn,end);
		};
		module.exports.cancelAdmin=function(gid,uid,fn,end){
			cancelAdmin(gid,uid,fn,end);
		};
		app.model.get("user",function(returnData){
			user=returnData;
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