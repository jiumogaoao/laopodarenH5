app.control.set({
	name:"messageList",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#listFrame', {  });
			$('img').on("load",function(){
				myScroll.refresh();
			});
			$(".messageList_page .list_module").unbind("swipeleft").bind("swipeleft",function(){
				if($(this).attr("open")!=="1"){
					$(this).attr("open","1");
					$(this).attr("style","transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 1000ms;transform:translate(-468px, 0px) translateZ(0px);");
				}
			});
			$(".messageList_page .list_module").unbind("swiperight").bind("swiperight",function(){
				if($(this).attr("open")==="1"){
					$(this).attr("open","0");
					$(this).attr("style","transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 1000ms;transform:translate(0px, 0px) translateZ(0px);");
				}
			});
			$(".messageList_page .list_module .remove").unbind("tap").bind("tap",function(){
				$(this).parents(".list_module").remove();
			});
			$(".messageList_page .list_module .right").unbind("tap").bind("tap",function(){
				window.location.hash="detail";
			});
			$(".messageList_page #sideHandle").unbind("swiperight").bind("swiperight",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			$(".messageList_page #sideHandle").unbind("swipeleft").bind("swipeleft",function(){
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
			$(".head_module .navRight").unbind("tap").bind("tap",function(){
				window.location.hash="phone";
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
		app.view.head.show("iconNavButton_head",{hl:"0"},headDone);
		app.view.foot.show("treeNav_foot",{hl:"0"},footDone);
		app.view.main.sugest("messageList_page",data,data.state,"size",viewDone);
	}
});