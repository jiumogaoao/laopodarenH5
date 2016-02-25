(function ($, obj, config) {
	var modelArry={};
	var get = function(name,fn){
		if(modelArry[name]){
			if(fn){
				fn(modelArry[name]);
			}
		}else{
			app.loading.on();
            $.ajax({
                url: "model/" + name + ".js",
                dataType: "script",
                data:{v:config.version},
                cache: true,
                error: function (err) {
                    app.loading.Off();
                    app.err();
                    window.location.hash = "";
                },
                success: function (data) {
                    app.loading.off();
                    modelArry[name].init(
                    	function(){
                    		if(fn){
								fn(modelArry[name]);
							}
                    	}
                    );
                    
                }
            });
		}
	};
	var set = function (data) {
        if (data && data.name) {
            modelArry[data.name] = data;
        }
    };
	obj.set = function (data) {
        set(data);
    };
})($, app.model, config);