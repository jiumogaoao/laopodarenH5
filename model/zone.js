app.model.set({
	name:"zone",
	cache:{},
	init:0,
	save:function(){/*把数据推送到数据源*/
		app.cache(this.name,this.cache);
	},
	get:function(callback){/*提供实例接口*/
		/*初始方法，同步数据源数据*/
		if(!this.init){
			this.init=1;
				if(app.cache(this.name)){
				this.cache=app.cache(this.name);
			}else{
				this.save();
			}
		}
		
		var returnObj={};/*返回的接口*/
		var that=this;
		/*获取聊天记录*/
		returnObj.get=function(id,fn){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			var result=_.where(that.cache,{user:id});
			if(result&&result.length){
				fn(result);
			}else{
				fn(false);
			}
		};
		/*赞*/
		returnObj.praise=function(zid,id,fn,end){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			that.cache[zid].praise.push(id);
			that.save();
			if(end){
				if(fn){fn(true)}
			}else{
				user.praise(zid,id,fn,true);	
			}
		}
		/*取消赞*/
		returnObj.cancelPraise=function(zid,id,fn,end){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			that.cache[zid].praise=_.without(that.cache[zid].praise,id);
			that.save();
			if(end){
				if(fn){fn(true)}
			}else{
			user.cancelPraise(zid,id,fn,true);
			}
		}
		/*关注*/
		returnObj.attention=function(zid,id,fn,end){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			that.cache[zid].attention.push(id);
			that.save();
			if(end){
				if(fn){fn(true)}
			}else{
			user.attention(zid,id,fn,true);
			}
		}
		/*取消关注*/
		returnObj.cancelAttention=function(zid,id,fn,end){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			that.cache[zid].attention=_.without(that.cache[zid].attention,id);
			that.save();
			if(end){
				if(fn){fn(true)}
			}else{
			user.cancelAttention(zid,id,fn,true);
			}
		}
		/*看了*/
		returnObj.readed=function(zid,id,fn,end){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			that.cache[zid].readed.push(id);
			that.save();
			if(end){
				if(fn){fn(true)}
			}else{
			user.readed(zid,id,fn,true);
			}
		}
		/*分享*/
		returnObj.share=function(zid,id,fn,end){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			that.cache[zid].share.push(id);
			that.save();
			if(end){
				if(fn){fn(true)}
			}else{
			user.share(zid,id,fn,true);
			}
		}
		/*回复*/
		returnObj.reply=function(zid,id,to,text,fn,end){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
			that.cache[zid].reply.push({form:id,to:to,text:text,readed:false,time:new Date().getTime()});
			that.save();
			if(end){
				if(fn){fn(true)}
			}else{
			user.reply(zid,id,to,text,fn,true);
			}
		}
		/*发帖*/
		returnObj.add=function(id,title,text,pic,fn){
			var user={};
		app.model.get("user",function(returnObj){
			user=returnObj;
		});
				var newId=app.uuid();
				that.cache[newId]={
					id:newId,
					time:new Date().getTime(),
					user:id,
					title:title,
					text:text,
					pic:pic,
					praise:[],
					attention:[],
					readed:[],
					share:[],
					reply:[]	
				};
				that.save();
				fn(true);
		};
		if(callback){/*返回*/
			callback(returnObj);
		}
	}
});