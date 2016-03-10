app.control.set({
	name:"near",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScrollA = new IScroll('#nearMan', {  });
			var myScrollB = new IScroll('#newThink', {  });
			var myScrollC = new IScroll('#hotTalk', {  });
			var myScrollD = new IScroll('#more', {  });
			var myScrollE = new IScroll('#roomFrame', {  });
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
			var rollLock=1;
			var step=0;
			var finishDelay=0;
			function roll(){
				$(".near_page .hotBannerPoint").removeClass("hl");
					$(".near_page .hotBannerPoint").eq(step).addClass("hl");
					$(".near_page #hotBannerRoll").attr("style",'transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 300ms; transform: translate(-'+((100*step)/$(".near_page #hotBannerRoll img").length)+'%, 0px) translateZ(0px);');
					finishDelay=setTimeout(function(){
						rollLock=1;
					},300);
			}
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
			var offset=0;
			$(".near_page #nearMain").unbind("swipeleft").bind("swipeleft",function(){
				if(offset<$(".near_page .subPage").length-1){
					offset++;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".near_page #nearRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
				}
			});
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
		function headDone(){
			 $(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleButton_head",{title:"附近",right:"筛选"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("near_page",data,data.state,"side",viewDone);
	}
});