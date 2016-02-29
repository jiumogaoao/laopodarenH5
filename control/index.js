app.control.set({
	name:"index",
	par:[],
	fn:function(data){
		function viewDone(){
			$(".index_page #forgetKey").unbind("tap").bind("tap",function(){
				window.location.hash="forgetKey";
			});
			$(".index_page #regest").unbind("tap").bind("tap",function(){
				window.location.hash="regest";
			});
			$(".index_page #login").unbind("tap").bind("tap",function(){
				window.location.hash="messageList";
			});
		}
		app.view.head.hide();
		app.view.foot.hide();
		app.view.main.sugest("index_page",data,data.state,"show",viewDone);
	}
});