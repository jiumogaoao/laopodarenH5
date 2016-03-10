app.control.set({
	name:"zone",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#zoneMain', { probeType: 3 });
			$('img').on("load",function(){
				myScroll.refresh();
			});
			$(".head_module").css("background-color","rgba(18,183,245,0)");
			myScroll.on("scroll",function(){
				if(this.y<-200){
					$(".head_module").css("background-color","rgba(18,183,245,1)");
					$(".head_module .rightPoint").removeClass("addB").addClass("add");
				}else if(this.y>=0){
					$(".head_module").css("background-color","rgba(18,183,245,0)");
					$(".head_module .rightPoint").removeClass("add").addClass("addB");
				}else{
					$(".head_module .rightPoint").removeClass("addB").addClass("add");
					var color=-1*this.y/200;
					$(".head_module").css("background-color","rgba(18,183,245,"+color+")");
				}
			});
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