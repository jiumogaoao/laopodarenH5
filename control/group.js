app.control.set({
	name:"group",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScrollA = new IScroll('#myGroup', {  });
			var myScrollB = new IScroll('#talkGroup', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('#myGroup img').on("load",function(){
				myScrollA.refresh();
			});
			$('#talkGroup img').on("load",function(){
				myScrollB.refresh();
			});
			/*绑定事件*/
			/*用于记录子页面步数*/
			var offset=0;
			/*向左滑换页面*/
			$(".group_page #groupMain").unbind("swipeleft").bind("swipeleft",function(){
				if(offset<$(".group_page .subPage").length-1){
					offset++;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".group_page #groupRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
				}
			});
			/*向右滑换页面*/
			$(".group_page #groupMain").unbind("swiperight").bind("swiperight",function(){
				if(offset>0){
					offset--;
					$(".nav_module .nav_point").removeClass('hl');
					$(".nav_module .nav_point").eq(offset).addClass("hl");
					$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
					$(".group_page #groupRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
				}
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
		app.view.head.show("head_template",{
			"left":{
				type:"back",
				text:"返回"
			},
			"center":{
				type:"title",
				text:"群组"
			},
			"right":{
				type:"icon",
				icon:[
				{name:"list"}
				],
				list:[
					{"icon":"group","text":"创建群"},
					{"icon":"findGroup","text":"查找群"},
					{"icon":"groupSet","text":"群消息设置"},
					{"icon":"creatTalkGroup","text":"创建讨论组"}
				]
			}
		},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("group_page",{
			mine:[{
				title:"我创建的群组",
				list:[
				{icon:"img/head.jpg",name:"某个群组"},
				{icon:"img/head.jpg",name:"某个群组"}
				]
			},
			{
				title:"我管理的群组",
				list:[
				{icon:"img/head.jpg",name:"某个群组"},
				{icon:"img/head.jpg",name:"某个群组"}
				]
			},
			{
				title:"我加入的群组",
				list:[
				{icon:"img/head.jpg",name:"某个群组"},
				{icon:"img/head.jpg",name:"某个群组"}
				]
			}
			],
			talk:[
			{"icon":"img/head.jpg","name":"某个讨论组"},{"icon":"img/head.jpg","name":"某个讨论组"}
			]
		},data.state,"side",viewDone);
	}
});