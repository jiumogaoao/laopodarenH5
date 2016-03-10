app.control.set({
	name:"vip",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#vipMain', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('img').on("load",function(){
				myScroll.refresh();
			});
		}
		function headDone(){/*头部加载完成*/
			/*绑定事件*/
			$(".head_module").css("background-color","#000");
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){/*脚部加载完成*/

		}
		/*加载头部，传入参数*/
		app.view.head.show("buttonTitleIcon_head",{"title":"开通会员","right":[{"id":"","src":"img/list.png"}]},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("vip_page",data,data.state,"side",viewDone);
	}
});