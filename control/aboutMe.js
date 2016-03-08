app.control.set({
	name:"aboutMe",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#aboutMeMain', {  });
			
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("title_head",{"title":"与我相关"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("aboutMe_page",data,data.state,"side",viewDone);
	}
});