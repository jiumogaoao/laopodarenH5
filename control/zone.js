app.control.set({
	name:"zone",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#zoneMain', {  });
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
			$(".zone_page #album").unbind("tap").bind("tap",function(){
				window.location.hash="album";
			});
			$(".zone_page #say").unbind("tap").bind("tap",function(){
				window.location.hash="say";
			});
			$(".zone_page #diy").unbind("tap").bind("tap",function(){
				window.location.hash="diy";
			});
			$(".zone_page #aboutMe").unbind("tap").bind("tap",function(){
				window.location.hash="aboutMe";
			});
		}
		function headDone(){
			 
		}
		function footDone(){

		}
		app.view.head.hide(headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("zone_page",data,data.state,"side",viewDone);
	}
});