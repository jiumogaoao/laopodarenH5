app.control.set({
	name:"diyShow",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#diyShowMain', { probeType: 3 });
			$(".head_module").css("background-color","rgba(18,183,245,0)");
			myScroll.on("scroll",function(){
				if(this.y<-200){
					$(".head_module").css("background-color","rgba(18,183,245,1)");
				}else if(this.y>0){
					$(".head_module").css("background-color","rgba(18,183,245,0)");
				}else{
					var color=-1*this.y/200;
					$(".head_module").css("background-color","rgba(18,183,245,"+color+")");
				}
			});
			$('img').on("load",function(){
				myScroll.refresh();
			});
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function headDone(){
			
		}
		function footDone(){

		}
		app.view.head.hide(headDone);
		app.view.foot.show("diyShow_foot",{},footDone);
		app.view.main.sugest("diyShow_page",data,data.state,"side",viewDone);
	}
});