app.control.set({
	name:"set",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#setMain', {  });
			$('img').on("load",function(){
				myScroll.refresh();
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("title_head",{"title":"设置"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("set_page",data,data.state,"side",viewDone);
	}
});