app.control.set({
	name:"linkmanList",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#linkListFrame', {  });
			$(".linkmanList_page .dropDownHead").unbind("tap").bind("tap",function(){
				$(this).parents(".dropDownPoint").toggleClass("hl");
				myScroll.refresh();
			});
			$(".linkmanList_page .list_module .right").unbind("tap").bind("tap",function(){
				window.location.hash="detail";
			});
			$(".linkmanList_page #sideHandle").unbind("swiperight").bind("swiperight",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			$(".linkmanList_page #sideHandle").unbind("swipeleft").bind("swipeleft",function(){
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
			$(".foot_module .navPoint.right").unbind("tap").bind("tap",function(){
				window.location.hash="actionList";
			});
		}
		app.view.head.show("iconTitleButton_head",{title:"联系人",right:"添加"},headDone);
		app.view.foot.show("treeNav_foot",{hl:"1"},footDone);
		app.view.main.sugest("linkmanList_page",data,data.state,"size",viewDone);
	}
});