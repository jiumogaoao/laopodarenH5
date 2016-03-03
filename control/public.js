app.control.set({
	name:"public",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#publicMain', {  });
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleButton_head",{title:"公众号",right:"添加"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("public_page",data,data.state,"size",viewDone);
	}
});