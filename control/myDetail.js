app.control.set({
	name:"myDetail",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#myDetailMain', { probeType: 3 });
			$(".head_module").css("background-color","rgba(18,183,245,0)");
			$(".head_module .title").css("opacity",0);
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
			$('img').on("load",function(){
				myScroll.refresh();
			});
			myScroll.on("scroll",function(){
				if(this.y<-200){
					$(".head_module").css("background-color","rgba(18,183,245,1)");
					$(".head_module .title").css("opacity",1);
				}else if(this.y>0){
					$(".head_module").css("background-color","rgba(18,183,245,0)");
					$(".head_module .title").css("opacity",0);
				}else{
					var color=-1*this.y/200;
					$(".head_module").css("background-color","rgba(18,183,245,"+color+")");
					$(".head_module .title").css("opacity",color);
				}
			});
		}
		function headDone(){
			 
		}
		function footDone(){

		}
		app.view.head.hide(headDone);
		app.view.foot.show("myDetail_foot",{},footDone);
		app.view.main.sugest("myDetail_page",data,data.state,"side",viewDone);
	}
});