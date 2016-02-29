app.control.set({
	name:"regestSuccess",
	par:[],
	fn:function(data){
		function viewDone(){
			$(".regestSuccess_page #Send").unbind("tap").bind("tap",function(){
				window.location.hash="messageList";
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){}
		app.view.head.show("title_head",{title:"注册成功"},headDone);
		app.view.foot.hide();
		app.view.main.sugest("regestSuccess_page",data,data.state,"side",viewDone);
	}
});