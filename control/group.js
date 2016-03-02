app.control.set({
	name:"group",
	par:[],
	fn:function(data){
		function viewDone(){
			//var myScroll = new IScroll('#groupMain', {  });
			var offset=0;
			$(".group_page #groupMain").unbind("swipeleft").bind("swipeleft",function(){
				if(offset<$(".group_page .subPage").length-1){
					offset++;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".group_page #groupRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
				}
			});
			$(".group_page #groupMain").unbind("swiperight").bind("swiperight",function(){
				if(offset>0){
					offset--;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".group_page #groupRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
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
		app.view.head.show("buttonTitleIcon_head",{title:"群组",right:[{id:"",src:"img/list.jpg"}]},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("group_page",data,data.state,"size",viewDone);
	}
});