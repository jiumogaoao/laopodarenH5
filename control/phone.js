app.control.set({
	name:"phone",
	par:[],
	fn:function(data){
		function viewDone(){
			$(".phone_page #sideHandle").unbind("swiperight").bind("swiperight",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			$(".phone_page #sideHandle").unbind("swipeleft").bind("swipeleft",function(){
				if($("body").attr("sideOpen")==="1"){
					$("body").attr("sideOpen","0");
					app.view.side.hide();
				}
			});
			$(".phone_page #phone").unbind("tap").bind("tap",function(){
				window.location.hash="phoneList";
			});
			$(".phone_page #directory").unbind("tap").bind("tap",function(){
				window.location.hash="directoryList";
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
			if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			$(".head_module .navLeft").unbind("tap").bind("tap",function(){
				window.location.hash="messageList";
			});
		}
		function footDone(){
			$(".foot_module .navPoint.center").unbind("tap").bind("tap",function(){
				window.location.hash="linkmanList";
			});
			$(".foot_module .navPoint.right").unbind("tap").bind("tap",function(){
				window.location.hash="actionList";
			});
		}
		app.view.head.show("iconNavButton_head",{hl:"1"},headDone);
		app.view.foot.show("treeNav_foot",{hl:"0"},footDone);
		app.view.main.sugest("phone_page",data,data.state,"size",viewDone);
	}
});