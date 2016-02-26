(function ($, obj, config) {
	var typeArry=[];
	var segestDelay="";
	var headDelay="";
	var footDelay="";
	function pageChange(){
		$("#pageOld").attr("id","pageHide");
						$("#pageHide").attr("style","");
						$("#pageNew").attr("id","pageOld");
						$("#pageOld").attr("style","");
						$("#pageHide").attr("id","pageNew");
						$("#pageNew").empty();
	}
	function getTem(tem,fn){
		if(domAll.find("#"+tem).length){
			if(fn){
				fn(domAll.find("#"+tem).html());
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
				$("#head").attr("style","top:-"+$("#head").height()/app.size+"px");
				$("#main").css("top",$("#head").height()/app.size);
				$("#head").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 100%) translateZ(0px)","opacity": 1});
				headDelay=setTimeout(function(){
				if(callback){
					callback();
				}	
				},1000);
				
			});
		},
		hide:function(callback){
			$("#main").css("top","0px");
			$("#head").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 0px) translateZ(0px)","opacity": 0});
			headDelay=setTimeout(function(){
				$("#head").empty();
				$("#head").attr("style","");
				if(callback){
					callback();
				}	
				},1000);
		}
	};
	obj.foot={
		show:function(tem,data,callback){
			getTem(tem,function(temReturn){
				var headString = _.template(temReturn)({data:data});
				$("#foot").html(headString);
				$("#foot").attr("style","bottom:-"+$("#foot").height()/app.size+"px");
				$("#main").css("bottom",$("#foot").height()/app.size);
				$("#foot").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, -100%) translateZ(0px)","opacity": 1});
				footDelay=setTimeout(function(){
				if(callback){
					callback();
				}	
				},1000);
			});
		},
		hide:function(callback){
			$("#main").css("bottom","0px");
			$("#foot").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 0px) translateZ(0px)","opacity": 0});
			footDelay=setTimeout(function(){
				$("#foot").empty();
				$("#foot").attr("style","");
				if(callback){
					callback();
				}	
				},1000);
		}
	};
	obj.main={
		tem:"",
		sugest:function(tem,data,state,type,callback){
			getTem(tem,function(temReturn){
				obj.main.tem=temReturn;
				var mainString=_.template(obj.main.tem)({data:data});
				if(state){
					$("#pageNew").html(mainString);
					if(state===1){
						typeArry.push(type);
						sugest[type](state);
					}else{
						sugest[_.last(typeArry)](state);
						typeArry=_.initial(typeArry);
					}
				}else{
					$("#pageOld").html(mainString);
				}
				if(callback){callback();}
			});
		},
		reflash:function(data){
			var reflashString=_.template(obj.main.tem)({data:data});
			$("#pageOld").html(reflashString);
		}
	};
	var sugest={
			show:function(state){
					$("#pageOld").attr("style","transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 1000ms;opacity: 0;");
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
			},
			side:function(state){
				if(state===1){
					$("#pageNew").attr("style","z-index:3;left:640px");
					$("#pageNew").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-100%, 0px) translateZ(0px)","opacity": 1});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
				}else{
					$("#pageNew").attr("style","opacity: 1;");
					$("#pageOld").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(100%, 0px) translateZ(0px)","opacity": 0});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
				}
			},
			top:function(state){
				if(state===1){
					$("#pageNew").attr("style","z-index:3;top:-"+($("#pageNew").height()/app.size)+"px");
					$("#pageNew").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 100%) translateZ(0px)","opacity": 1});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
				}else{
					$("#pageNew").attr("style","opacity: 1;");
					$("#pageOld").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, -100%) translateZ(0px)","opacity": 0});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
				}
			},
			size:function(state){
				if(state===1){
					$("#pageNew").attr("style","z-index:3;transform: scale(0.1);opacity: 1;");
					segestDelay=setTimeout(function(){
					$("#pageNew").css({"transition-timing-function": "cubic-bezier(0.5, 0.1, 0.5, 1)", "transition-duration": "1000ms","transform":"scale(1)","opacity": 1,"z-index":3});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
				},50);	
				}else{
					$("#pageNew").attr("style","opacity: 1;");
					$("#pageOld").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"scale(0.1)","opacity": 0});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
				}
			}
	};
})($, app.view, config);