app.control.set({
	name:"actionList",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#actionListFrame', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('img').on("load",function(){
				myScroll.refresh();
			});
			/*绑定事件*/
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
			$(".actionList_page #zone").unbind("tap").bind("tap",function(){
				window.location.hash="zone";
			});
			$(".actionList_page #near").unbind("tap").bind("tap",function(){
				window.location.hash="near";
			});
			$(".actionList_page #interest").unbind("tap").bind("tap",function(){
				window.location.hash="interest";
			});
		}
		function headDone(){/*头部加载完成*/
			/*绑定事件*/
			$(".head_module .left").unbind("tap").bind("tap",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
		}
		function footDone(){/*脚部加载完成*/
			/*绑定事件*/
			$(".foot_module .navPoint.left").unbind("tap").bind("tap",function(){
				window.location.hash="messageList";
			});
			$(".foot_module .navPoint.center").unbind("tap").bind("tap",function(){
				window.location.hash="linkmanList";
			});
		}
		/*使用iconTitleButton_head的view作为头部，传入参数*/
		app.view.head.show("iconTitleButton_head",{title:"动态",right:"更多"},headDone);
		/*使用treeNav_foot作为脚部，传入参数*/
		app.view.foot.show("treeNav_foot",{hl:"2"},footDone);
		/*转出actionList_page的view*/
		app.view.main.sugest("actionList_page",data,data.state,"size",viewDone);
	}
});