app.control.set({
	name:"say",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#sayMain', {  });
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
		app.view.head.show("buttonTitleButton_head",{"title":"说说","right":"写说说"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("say_page",data,data.state,"side",viewDone);
	}
});