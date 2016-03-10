app.control.set({
	name:"phoneListSub",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScrollA = new IScroll('#planMain', {  });
			var myScrollB = new IScroll('#cartMain', {  });
			var myScrollC = new IScroll('#textMain', {  });
			$('#planMain img').on("load",function(){
				myScrollA.refresh();
			});
			$('#cartMain img').on("load",function(){
				myScrollB.refresh();
			});
			$('#textMain img').on("load",function(){
				myScrollC.refresh();
			});
			var offset=0;
			$(".phoneListSub_page #phoneListSubMain").unbind("swipeleft").bind("swipeleft",function(){
				if(offset<$(".phoneListSub_page .subPage").length-1){
					offset++;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".phoneListSub_page #phoneListSubRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
				}
			});
			$(".phoneListSub_page #phoneListSubMain").unbind("swiperight").bind("swiperight",function(){
				if(offset>0){
					offset--;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".phoneListSub_page #phoneListSubRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
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
		app.view.head.show("title_head",{title:"交通出行"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("phoneListSub_page",data,data.state,"side",viewDone);
	}
});