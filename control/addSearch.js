app.control.set({
	name:"addSearch",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#addSearchMain', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('#addSearchMain img').on("load",function(){
				myScroll.refresh();
			});
			$(".addSearch_page .list_module").unbind("tap").bind("tap",function(){
				window.location.hash="addDetail";
			});
		}
		function headDone(){/*头部加载完成*/
			/*绑定事件*/
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){/*脚部加载完成*/

		}
		/*加载头部，传入参数*/
		app.view.head.hide(headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("addSearch_page",{},data.state,"side",viewDone);
	}
});