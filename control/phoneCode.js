app.control.set({
	name:"phoneCode",
	par:[],
	fn:function(data){
		function viewDone(){
			$(".phoneCode_page #Send").unbind("tap").bind("tap",function(){
				window.location.hash="regestSuccess";
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){}
		app.view.head.show("title_head",{title:"安全验证"},headDone);
		app.view.foot.hide();
		app.view.main.sugest("phoneCode_page",data,data.state,"side",viewDone);
	}
});