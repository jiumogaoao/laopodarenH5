app.control.set({
	name:"myDetail",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#myDetailMain', {  });
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function headDone(){
			 
		}
		function footDone(){

		}
		app.view.head.hide(headDone);
		app.view.foot.show("myDetail_foot",{},footDone);
		app.view.main.sugest("myDetail_page",data,data.state,"side",viewDone);
	}
});