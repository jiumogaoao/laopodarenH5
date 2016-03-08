app.control.set({
	name:"diy",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#diyMain', {  });
			
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleButton_head",{"title":"个性化中心","right":"装扮开关"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("diy_page",data,data.state,"side",viewDone);
	}
});