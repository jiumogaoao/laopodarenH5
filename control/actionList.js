app.control.set({
	name:"actionList",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#actionListFrame', {  });
			$(".actionList_page #sideHandle").unbind("swiperight").bind("swiperight",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			$(".actionList_page #sideHandle").unbind("swipeleft").bind("swipeleft",function(){
				if($("body").attr("sideOpen")==="1"){
					$("body").attr("sideOpen","0");
					app.view.side.hide();
				}
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
		}
		function footDone(){
			$(".foot_module .navPoint.left").unbind("tap").bind("tap",function(){
				window.location.hash="messageList";
			});
			$(".foot_module .navPoint.center").unbind("tap").bind("tap",function(){
				window.location.hash="linkmanList";
			});
		}
		app.view.head.show("iconTitleButton_head",{title:"动态",right:"更多"},headDone);
		app.view.foot.show("treeNav_foot",{hl:"2"},footDone);
		app.view.main.sugest("actionList_page",data,data.state,"size",viewDone);
	}
});