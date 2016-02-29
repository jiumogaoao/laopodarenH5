app.control.set({
	name:"detail",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#detail', {  });
			$(".linkmanList_page .dropDownHead").unbind("tap").bind("tap",function(){
				$(this).parents(".dropDownPoint").toggleClass("hl");
				myScroll.refresh();
			});
			$(".linkmanList_page .list_module .right").unbind("tap").bind("tap",function(){
				window.location.hash="detail";
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){
			$(".foot_module .navPoint.left").unbind("tap").bind("tap",function(){
				window.location.hash="messageList";
			});
			$(".foot_module .navPoint.right").unbind("tap").bind("tap",function(){
				window.location.hash="actionList";
			});
		}
		app.view.head.show("buttonTitleIcon_head",{title:"联系人",right:"添加"},headDone);
		app.view.foot.show("talk_foot",{hl:"1"},footDone);
		app.view.main.sugest("detail_page",data,data.state,"size",viewDone);
	}
});