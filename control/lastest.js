app.control.set({
	name:"lastest",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#lastestMain', {  });
			$('img').on("load",function(){
				myScroll.refresh();
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
			$(".head_module .navLeft").unbind("tap").bind("tap",function(){
				window.location.hash="album";
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonNavIcon_head",{"hl":"1","right":[{id:"",src:"img/headAdd.png"}]},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("lastest_page",data,data.state,"side",viewDone);
	}
});