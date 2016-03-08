app.control.set({
	name:"album",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#albumMain', {  });
			
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
			$(".head_module .navRight").unbind("tap").bind("tap",function(){
				window.location.hash="lastest";
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonNavIcon_head",{"hl":"0","right":[{id:"",src:"img/headAdd.jpg"}]},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("album_page",data,data.state,"side",viewDone);
	}
});