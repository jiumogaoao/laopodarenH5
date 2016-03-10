app.control.set({
	name:"near",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScrollA = new IScroll('#nearMan', {  });
			var myScrollB = new IScroll('#newThink', {  });
			var myScrollC = new IScroll('#hotTalk', {  });
			var myScrollD = new IScroll('#more', {  });
			var myScrollE = new IScroll('#roomFrame', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('#nearMan img').on("load",function(){
				myScrollA.refresh();
			});
			$('#newThink img').on("load",function(){
				myScrollB.refresh();
			});
			$('#hotTalk img').on("load",function(){
				myScrollC.refresh();
			});
			$('#more img').on("load",function(){
				myScrollD.refresh();
			});
			$('#roomFrame img').on("load",function(){
				myScrollE.refresh();
			});
			/*用于锁定banner滚动*/
			var rollLock=1;
			/*记录banner步数*/
			var step=0;
			/*banner滚动句柄*/
			var finishDelay=0;
			/*banner滚动方法*/
			function roll(){
				$(".near_page .hotBannerPoint").removeClass("hl");
					$(".near_page .hotBannerPoint").eq(step).addClass("hl");
					$(".near_page #hotBannerRoll").attr("style",'transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 300ms; transform: translate(-'+((100*step)/$(".near_page #hotBannerRoll img").length)+'%, 0px) translateZ(0px);');
					finishDelay=setTimeout(function(){
						rollLock=1;
					},300);
			}
			/*banner向右划*/
			$(".near_page #hotBannerFrame").unbind("swiperight").bind("swiperight",function(e){
				e.stopPropagation();
				if(rollLock){
					rollLock=0;
					if(step>0){
						step--;
					}
					roll();
				}
			});
			/*banner向左划*/
			$(".near_page #hotBannerFrame").unbind("swipeleft").bind("swipeleft",function(e){
				e.stopPropagation();
				if(rollLock){
					rollLock=0;
					if(step<$(".near_page #hotBannerRoll img").length-1){
						step++;
					}
					roll();
				}
			});
			/*banner自动处理*/
			var delay=setInterval(function(){
				if(rollLock){
					rollLock=0;
					if(step<$(".near_page #hotBannerRoll img").length-1){
						step++;
					}else{
						step=0;
					}
					roll();
				}
			},5000);
			/*子页步数*/
			var offset=0;
			/*页面向左划切换子页*/
			$(".near_page #nearMain").unbind("swipeleft").bind("swipeleft",function(){
				if(offset<$(".near_page .subPage").length-1){
					offset++;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".near_page #nearRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
				}
			});
			/*页面向右划切换子页*/
			$(".near_page #nearMain").unbind("swiperight").bind("swiperight",function(){
				if(offset>0){
					offset--;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".near_page #nearRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
				}
			});
		}
		function headDone(){/*头部加载完成*/
			/*绑定事件*/
			 $(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){/*脚部加载完成*/

		}
		/*加载头部，传入参数*/
		app.view.head.show("buttonTitleButton_head",{title:"附近",right:"筛选"},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("near_page",data,data.state,"side",viewDone);
	}
});