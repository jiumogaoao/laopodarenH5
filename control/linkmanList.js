app.control.set({
	name:"linkmanList",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#linkListFrame', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('img').on("load",function(){
				myScroll.refresh();
			});
			/*绑定事件*/
			/*打开百叶窗*/
			$(".linkmanList_page .dropDownHead").unbind("tap").bind("tap",function(){
				$(this).parents(".dropDownPoint").toggleClass("hl");
				myScroll.refresh();
			});
			/*点击列表项*/
			$(".linkmanList_page .list_module .right").unbind("tap").bind("tap",function(){
				window.location.hash="detail";
			});
			/*左边向右划*/
			$(".linkmanList_page #sideHandle").unbind("swiperight").bind("swiperight",function(){
				if($("body").attr("sideOpen")!=="1"){
					$("body").attr("sideOpen","1");
					app.view.side.show();
				}
			});
			/*左边向左划*/
			$(".linkmanList_page #sideHandle").unbind("swipeleft").bind("swipeleft",function(){
				if($("body").attr("sideOpen")==="1"){
					$("body").attr("sideOpen","0");
					app.view.side.hide();
				}
			}); 
			/*点击新朋友*/
			$(".linkmanList_page #newFriend").unbind("tap").bind("tap",function(){
				window.location.hash="newFriend";
			}); 
			/*点击特别关心*/
			$(".linkmanList_page #care").unbind("tap").bind("tap",function(){
				window.location.hash="care";
			}); 
			/*点击群组*/
			$(".linkmanList_page #group").unbind("tap").bind("tap",function(){
				window.location.hash="group";
			}); 
			/*点击公众号*/
			$(".linkmanList_page #public").unbind("tap").bind("tap",function(){
				window.location.hash="public";
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
			$(".foot_module .navPoint.right").unbind("tap").bind("tap",function(){
				window.location.hash="actionList";
			});
		}
		/*使用iconTitleButton_head的view作为头部，传入参数*/
		app.view.head.show("head_template",{"left":{"type":"icon","src":"img/head.jpg"},"center":{type:"title",text:"联系人"},"right":{type:"button",text:"添加"}},headDone);
		/*使用treeNav_foot作为脚部，传入参数*/
		app.view.foot.show("treeNav_foot",{hl:"1"},footDone);
		/*转出linkmanList_page的view*/
		app.view.main.sugest("linkmanList_page",{group:[
		{list:[
		{name:"我的设备",num:"2/2",list:[
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"},
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"}
		]},
		{name:"手机通讯录",num:"2/2",list:[
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"},
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"}
		]}
		]},
		{list:[
		{name:"我的好友",num:"2/2",list:[
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"},
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"}
		]},
		{name:"某个分组",num:"2/2",list:[
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"},
		{"icon":"img/head.jpg","name":"某人的手机","dsc":"就是个描述","state":"2G"}
		]}
		]}
		]},data.state,"size",viewDone);
	}
});