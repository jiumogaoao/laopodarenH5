app.model.set({
	name:"message",
	init:function(module){			
		/*获取聊天记录*/
		function get(id,to,fn){
			var result=_.where(module.cache,{from:id,to:to});
			result.concat(_.where(module.cache,{from:to,to:id}));
			
			if(result&&result.length){
				fn(result);
			}else{
				fn(false);
			}
		};
		/*聊天*/
		function add(from,to,type,main,fn){
			var newId=app.uuid();
				module.cache[newId]={
					id:newId,
					time:new Date().getTime(),
					from:from,
					to:to,
					type:type,
					main:main,
					readed:false
				};
				module.set(module,fn);
		};
		module.exports.get=function(id,to,fn){
			get(id,to,fn);
		};
		module.exports.add=function(from,to,type,main,fn){
				add(from,to,type,main,fn);
		};
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