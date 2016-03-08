app.control.set({
	name:"file",
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
		app.view.head.show("title_head",{"title":"我的文件"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("file_page",data,data.state,"side",viewDone);
	}
});