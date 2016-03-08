(function ($, obj, config) {
	var typeArry=[];
	var segestDelay="";
	var headDelay="";
	var footDelay="";
	var sideDelay="";
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
				$("#head").attr("style","transform:translate(0px, -100%) translateZ(0px);opacity: 0");
				$("#main").css("top",$("#head").height()/app.size);
				$("#head").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 0px) translateZ(0px)","opacity": 1});
				headDelay=setTimeout(function(){
				if(callback){
					callback();
				}	
				},1000);
				
			});
		},
		hide:function(callback){
			$("#main").css("top","0px");
			$("#head").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, -100%) translateZ(0px)","opacity": 0});
			headDelay=setTimeout(function(){
				$("#head").empty();
				$("#head").attr("style","transform:translate(0px, -100%) translateZ(0px)");
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
				$("#foot").attr("style","transform:translate(0px, 100%) translateZ(0px);opacity: 0");
				$("#main").css("bottom",$("#foot").height()/app.size);
				$("#foot").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 0px) translateZ(0px)","opacity": 1});
				footDelay=setTimeout(function(){
				if(callback){
					callback();
				}	
				},1000);
			});
		},
		hide:function(callback){
			$("#main").css("bottom","0px");
			$("#foot").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 100%) translateZ(0px)","opacity": 0});
			footDelay=setTimeout(function(){
				$("#foot").empty();
				$("#foot").attr("style","transform:translate(0px, 100%) translateZ(0px);opacity: 0");
				if(callback){
					callback();
				}	
				},1000);
		}
	};
	function sideShow(fn){
		$("#main,#sideFrame,#head,#foot").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)","transition-duration": "1000ms","transform":"translate(614px, 0px) translateZ(0px)"});
			sideDelay=setTimeout(function(){
				if(fn){fn();}
			},1000);
	}
	obj.side={
		show:function(fn){
			if($("#sideFrame").attr("haveload")==="1"){
				sideShow(fn);
			}else{
				getTem("side_tem",function(tem){
					var sideStr=_.template(tem)({});
					$("#sideFrame").html(sideStr);
					$("#sideFrame #vip").unbind("tap").bind("tap",function(){
						$("body").attr("sideopen","0");
						obj.side.hide();
						window.location.hash="vip";
					});
					$("#sideFrame #money").unbind("tap").bind("tap",function(){
						$("body").attr("sideopen","0");
						obj.side.hide();
						window.location.hash="money";
					});
					$("#sideFrame #diyShow").unbind("tap").bind("tap",function(){
						$("body").attr("sideopen","0");
						obj.side.hide();
						window.location.hash="diyShow";
					});
					$("#sideFrame #collect").unbind("tap").bind("tap",function(){
						$("body").attr("sideopen","0");
						obj.side.hide();
						window.location.hash="collect";
					});
					$("#sideFrame #album").unbind("tap").bind("tap",function(){
						$("body").attr("sideopen","0");
						obj.side.hide();
						window.location.hash="album";
					});
					$("#sideFrame #file").unbind("tap").bind("tap",function(){
						$("body").attr("sideopen","0");
						obj.side.hide();
						window.location.hash="file";
					});
					$("#sideFrame").attr("haveload","1");
					sideShow(fn);
				});
			}
		},
		hide:function(fn){
			$("#main,#sideFrame,#head,#foot").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)","transition-duration": "1000ms","transform":"translate(0px, 0px) translateZ(0px)"});
			sideDelay=setTimeout(function(){
				if(fn){fn();}
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
					$("#pageNew").attr("style","z-index:3;transform:translate(100%, 0px) translateZ(0px)");
					segestDelay=setTimeout(function(){
						$("#pageNew").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 0px) translateZ(0px)","opacity": 1});
						segestDelay=setTimeout(function(){
							pageChange();
						},1000);
					},50);
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
					$("#pageNew").attr("style","z-index:3;transform:translate(0px, -100%) translateZ(0px);opacity: 0");
					segestDelay=setTimeout(function(){
					$("#pageNew").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, 0px) translateZ(0px)","opacity": 1});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
					},50);
				}else{
					$("#pageNew").attr("style","opacity: 1;");
					segestDelay=setTimeout(function(){
					$("#pageOld").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(0px, -100%) translateZ(0px)","opacity": 0});
					segestDelay=setTimeout(function(){
						pageChange();
					},1000);
					},50);
				}
			},
			size:function(state){
				if(state===1){
					$("#pageNew").attr("style","z-index:3;transform: scale(0.1);opacity: 0;");
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