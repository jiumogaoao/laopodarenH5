app.control.set({
	name:"care",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#careMain', {  });
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
		app.view.head.show("head_template",{"left":{type:"back",text:"返回"},"center":{"type":"title","text":"特别关心"},"right":{"type":"button","text":"管理"}},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("care_page",{
			list:[
			{icon:"img/head.jpg",name:"某人",dsc:"就是个人嘛"},
			{icon:"img/head.jpg",name:"某人",dsc:"就是个人嘛"}
			]
		},data.state,"side",viewDone);
	}
});