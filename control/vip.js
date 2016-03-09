app.control.set({
	name:"vip",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#vipMain', {  });
			
		}
		function headDone(){
			$(".head_module").css("background-color","#000");
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleIcon_head",{"title":"开通会员","right":[{"id":"","src":"img/list.png"}]},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("vip_page",data,data.state,"side",viewDone);
	}
});