app.control.set({
	name:"index",
	par:[],
	fn:function(data){
		function viewDone(){
			$(".index_page .a").unbind("tap").bind("tap",function(){
				window.location.hash="pageB";
			});
		}
		app.view.head.hide();
		app.view.foot.hide();
		app.view.main.sugest("index_page",data,data.state,"show",viewDone);
	}
});