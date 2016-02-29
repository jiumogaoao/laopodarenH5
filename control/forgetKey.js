app.control.set({
	name:"forgetKey",
	par:[],
	fn:function(data){
		function viewDone(){

		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){}
		app.view.head.show("title_head",{title:"输入账号"},headDone);
		app.view.foot.hide();
		app.view.main.sugest("forgetKey_page",data,data.state,"side",viewDone);
	}
});