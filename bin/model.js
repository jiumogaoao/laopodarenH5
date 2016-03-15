(function ($, obj, config) {/*M层*/
    /*用于缓存M层object*/
	var modelArry={};
    /*获取model*/
	var get = function(name,fn){
        /*如果有缓存*/
		if(modelArry[name]){
            /*给它*/
            modelArry[name].get(fn);
		}else{/*如果没有，打开loading*/
			app.loading.on();
            /*去拿*/
            $.ajax({
                url: "model/" + name + ".js",
                dataType: "script",
                data:{v:config.version},
                cache: true,
                error: function (err) {/*有错就报*/
                    app.loading.Off();
                    app.err();
                    window.location.hash = "";
                },
                success: function (data) {
                    /*成功了关掉loading*/
                    app.loading.off();
                    /*初始model,然后给它*/
                    modelArry[name].get(fn);
                }
            });
		}
	};
    obj.get = function(name,fn){
        get(name,fn);
    };
    /*把model放缓存*/
	var set = function (data) {
        if (data && data.name) {
            modelArry[data.name] = data;
        }
    };
	obj.set = function (data) {
        set(data);
    };
})($, app.model, config);