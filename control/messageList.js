app.control.set({
	name:"messageList",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#listFrame', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('img').on("load",function(){
				myScroll.refresh();
			});
			/*绑定事件*/
			/*列表左划出现隐藏项*/
			$(".messageList_page .list_module").unbind("swipeleft").bind("swipeleft",function(){
				if($(this).attr("open")!=="1"){
					$(this).attr("open","1");
					$(this).attr("style","transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 1000ms;transform:translate(-468px, 0px) translateZ(0px);");
				}
			});
			/*列表右划关闭隐藏项*/
			$(".messageList_page .list_module").unbind("swiperight").bind("swiperight",function(){
				if($(this).attr("open")==="1"){
					$(this).attr("open","0");
					$(this).attr("style","transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 1000ms;transform:translate(0px, 0px) translateZ(0px);");
				}
			});
			/*点击删除删除列表项*/
			$(".messageList_page .list_module .remove").unbind("tap").bind("tap",function(){
				$(this).parents(".list_module").remove();
			});
			/*点击列表项进入聊天*/
			$(".messageList_page .list_module .right").unbind("tap").bind("tap",function(){
				window.location.hash="detail";
			});
			/*页面左边右划出现侧栏*/
			$(".messageList_page #sideHandle").unbind("swiperight").bind("swiperight",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			/*页面左边左划关闭侧栏*/
			$(".messageList_page #sideHandle").unbind("swipeleft").bind("swipeleft",function(){
				if($("body").attr("sideOpen")==="1"){
					$("body").attr("sideOpen","0");
					app.view.side.hide();
				}
			});
		}
		function headDone(){/*头部加载完成*/
			/*绑定事件*/
			/*点击头像打开侧栏*/
			$(".head_module .left").unbind("tap").bind("tap",function(){
			if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			/*点击导航，跳转到电话本页面*/
			$(".head_module .navRight").unbind("tap").bind("tap",function(){
				window.location.hash="phone";
			});
		}
		function footDone(){/*脚部加载完成*/
			/*绑定事件*/
			/*点击联系人按钮,跳转到联系人*/
			$(".foot_module .navPoint.center").unbind("tap").bind("tap",function(){
				window.location.hash="linkmanList";
			});
			/*点击动态，跳转到动态*/
			$(".foot_module .navPoint.right").unbind("tap").bind("tap",function(){
				window.location.hash="actionList";
			});
		}
		/*使用iconNavButton_head的view作为头部，传入参数hl=0*/
		app.view.head.show("iconNavButton_head",{hl:"0"},headDone);
		/*使用treeNav_foot作为脚部，传入参数hl=0*/
		app.view.foot.show("treeNav_foot",{hl:"0"},footDone);
		/*转出messageList_page的view*/
		app.view.main.sugest("messageList_page",data,data.state,"size",viewDone);
	}
});