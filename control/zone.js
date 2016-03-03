app.control.set({
	name:"zone",
	par:[],
	fn:function(data){
		function viewDone(){
			//var myScroll = new IScroll('#publicMain', {  });
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function headDone(){
			
		}
		function footDone(){

		}
		app.view.head.hide(headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("zone_page",data,data.state,"size",viewDone);
	}
});