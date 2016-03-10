app.control.set({
	name:"care",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#careMain', {  });
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
		app.view.head.show("buttonTitleButton_head",{title:"特别关心",right:"管理"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("care_page",data,data.state,"side",viewDone);
	}
});