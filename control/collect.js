app.control.set({
	name:"collect",
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
		app.view.head.show("buttonTitleIcon_head",{"title":"我的收藏 &or;",right:[{id:"",src:"img/headAdd.jpg"}]},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("collect_page",data,data.state,"size",viewDone);
	}
});