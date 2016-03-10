app.control.set({
	name:"zone",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#zoneMain', { probeType: 3 });
			/*每当图片加载完成，刷新滚动控件*/
			$('img').on("load",function(){
				myScroll.refresh();
			});
			/*通过滚动控制头部改变*/
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
		function headDone(){/*头部加载完成*/
			 
		}
		function footDone(){/*脚部加载完成*/

		}
		/*头部不放那*/
		app.view.head.hide(headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("zone_page",data,data.state,"side",viewDone);
	}
});