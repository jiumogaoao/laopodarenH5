app.control.set({
	name:"detail",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#detail', {  });
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
		}
		function footDone(){/*脚部加载完成*/

		}
		/*加载头部，传入参数*/
		app.view.head.show("buttonTitleIcon_head",{title:"某人",right:[{id:"",src:"img/headButtonA.png"},{id:"",src:"img/headButtonB.png"}]},headDone);
		/*加载脚部，传入参数*/
		app.view.foot.show("talk_foot",{hl:"1"},footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("detail_page",data,data.state,"top",viewDone);
	}
});