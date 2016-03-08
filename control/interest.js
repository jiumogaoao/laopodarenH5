app.control.set({
	name:"interest",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#found', {  });
			var offset=0;
			function pageRun(){
				$(".nav_module .nav_point").removeClass('hl');
				$(".nav_module .nav_point").eq(offset).addClass("hl");
				$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
				$(".interest_page #interestRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
			}
			$(".nav_module .nav_point").unbind("tap").bind("tap",function(){
				offset=Number($(this).attr("num"));
				pageRun();
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleButton_head",{"title":"兴趣部落","right":"搜索"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("interest_page",data,data.state,"side",viewDone);
	}
});