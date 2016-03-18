app.model.set({
	name:"message",
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
		returnObj.get=function(id,to,fn){
			var result=_.where(that.cache,{from:id,to:to});
			result.concat(_.where(that.cache,{from:to,to:id}));
			
			if(result&&result.length){
				fn(result);
			}else{
				fn(false);
			}
		};
		/*聊天*/
		returnObj.add=function(from,to,type,main,fn){
				var newId=app.uuid();
				that.cache[newId]={
					id:newId,
					time:new Date().getTime(),
					from:from,
					to:to,
					type:type,
					main:main,
					readed:false
				};
				that.save();
				fn(true);
		};
		if(callback){/*返回*/
			callback(returnObj);
		}
	}
});