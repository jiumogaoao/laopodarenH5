app.model.set({
	name:"album",
	init:function(module){
		var user={};
		/*创建相册*/			
		function creat(aid,name,dsc,fn,end){
			var self=user.loginMessage();
			if(!aid&&!end){
				aid=app.uuid();
			};
			module.cache[aid]={
				name:name,
				dsc:dsc,
				user:self.id,
				time:new Date().getTime(),
				list:[]
			};
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					user.creatAlbum(aid,name,dsc,fn,true);	
				}
			});
		};
		/*删除相册*/
		function remove(aid,fn,end){
			delete module.cache[aid];
			module.set(module,function(){
				if(end){
					if(fn){fn(true);}
				}else{
					user.removeAlbum(aid,fn,true);	
				}
			});
		};
		/*添加图片*/
		function addPic(aid,src,name,fn){
			module.cache[aid].list.push({
				id:app.uuid(),
				src:src,
				name:name
			});
			module.set(module,fn);
		};
		/*删除图片*/
		function removePic(pid,aid,fn){
			module.cache[aid].list=_.reject(module.cache[aid].list,{id:pid});
			module.set(module,fn);
		};
		module.exports.creat=function(aid,name,dsc,fn,end){
			creat(aid,name,dsc,fn,end);
		};
		module.exports.remove=function(aid,fn,end){
			remove(aid,fn,end);
		};
		module.exports.addPic=function(aid,src,name,fn){
			addPic(aid,src,name,fn);
		}
		module.exports.removePic=function(pid,aid,fn){
			removePic(pid,aid,fn);
		}
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
});