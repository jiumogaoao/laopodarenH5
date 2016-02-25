(function ($, obj, config) {
	function getTem(tem,fn){
		if(domAll.find("#"+tem).length){
			if(fn){
				fn(domAll.find("#"+tem).html())
			}
		}else{
			$.ajax({
                url: "view/" + tem + ".html",
                dataType: "html",
                data:{v:config.version},
                cache: true,
                error: function (err) {
                    app.loading.Off();
                    app.err();
                    window.location.hash = "";
                },
                success: function (data) {
                    app.loading.off();
                    domAll.append(data);
                    fn(domAll.find("#"+tem).html());
                }
            });
		}
	}
	obj.head={
		show:function(tem,data,callback){
			getTem(tem,function(temReturn){
				var headString = _.template(temReturn)({data:data});
				$("#head").html(headString);
				if(callback){
					callback();
				}
			})
		},
		hide:function(){
			$("#head").hide();
			$("#head").empty();
		}
	}
	obj.foot={
		show:function(tem,data,callback){
			getTem(tem,function(temReturn){
				var headString = _.template(temReturn)({data:data});
				$("#foot").html(headString);
				if(callback){
					callback();
				}
			});
		},
		hide:function(){
			$("#foot").hide();
			$("#foot").empty();
		}
	}
	obj.main={
		tem:"",
		sugest:function(tem,data,state,type,callback){
			getTem(tem,function(temReturn){
				obj.main.tem=temReturn;
				var mainString=_.template(obj.main.tem)({data:data});
				$("#pageNew").html(mainString);
				if(state){
					sugest[type](state);
				}else{
					$("#pageOld").html(mainString);
				}
				if(callback){callback()};
			})
		},
		reflash:function(data){
			var reflashString=_.template(obj.main.tem)({data:data});
			$("#pageOld").html(reflashString);
		}
	}
	var sugest={
			side:function(state){
				if(state==1){

				}else{

				}
			},
			top:function(state){
				if(state==1){

				}else{

				}
			},
			size:function(state){
				if(state==1){

				}else{

				}
			}
	}
})($, app.view, config);