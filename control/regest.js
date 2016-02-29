app.control.set({
	name:"regest",
	par:[],
	fn:function(data){
		function viewDone(){
			$(".regest_page #Send").unbind("tap").bind("tap",function(){
				window.location.hash="saveCode";
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){}
		app.view.head.show("title_head",{title:"验证手机号码"},headDone);
		app.view.foot.hide();
		app.view.main.sugest("regest_page",data,data.state,"side",viewDone);
	}
});