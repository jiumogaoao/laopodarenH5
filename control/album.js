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
		app.view.head.show("head_template",{"left":{type:"back",text:"返回"},"center":{type:"nav","nav":[{hl:true,text:"列表"},{text:"最近"}]},right:{type:"button",text:"更多"},
			bottomList:[
			{icon:"picture",text:"传照片"},
			{icon:"video",text:"发视频"},
			{icon:"videoList",text:"动感影集"}
			]
	},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("album_page",{list:[
			{"icon":"img/head.jpg","name":"相册","count":"99"},
			{"icon":"img/head.jpg","name":"相册","count":"99"},
			{"icon":"img/head.jpg","name":"相册","count":"99"},
			{"icon":"img/head.jpg","name":"相册","count":"99"},
			{"icon":"img/head.jpg","name":"相册","count":"99"}
			]},data.state,"side",viewDone);
	}
});