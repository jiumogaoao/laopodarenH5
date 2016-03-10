app.control.set({
	name:"album",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#albumMain', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('img').on("load",function(){
				myScroll.refresh();
			});
		}
		function headDone(){/*头部加载完成*/
			/*绑定事件*/
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
			$(".head_module .navRight").unbind("tap").bind("tap",function(){
				window.location.hash="lastest";
			});
		}
		function footDone(){/*脚部加载完成*/

		}
		/*加载头部，传入参数*/
		app.view.head.show("buttonNavIcon_head",{"hl":"0","right":[{id:"",src:"img/headAdd.png"}]},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("album_page",data,data.state,"side",viewDone);
	}
});