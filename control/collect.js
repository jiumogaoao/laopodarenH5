app.control.set({
	name:"collect",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#collectMain', {  });
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
		app.view.head.show("head_template",{"left":{type:"back",text:"返回"},"center":{type:"title",text:"我的收藏 &or;"},"right":{type:"icon",icon:[{name:"add"}]},
			bottomList:[
			{icon:"text",text:"文本"},
			{icon:"sound",text:"语音"},
			{icon:"pic",text:"图片"},
			{icon:"photo",text:"拍照"},
			{icon:"place",text:"位置"},
			{icon:"copy",text:"粘贴"}
			]
	},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("collect_page",data,data.state,"side",viewDone);
	}
});