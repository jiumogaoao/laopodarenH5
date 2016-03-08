app.control.set({
	name:"diyShow",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#diyShowMain', {  });
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function headDone(){
			
		}
		function footDone(){

		}
		app.view.head.hide(headDone);
		app.view.foot.show("diyShow_foot",{},footDone);
		app.view.main.sugest("diyShow_page",data,data.state,"size",viewDone);
	}
});