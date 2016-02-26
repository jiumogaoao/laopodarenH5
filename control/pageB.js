app.control.set({
	name:"pageB",
	par:[],
	fn:function(data){
		function viewDone(){
			$(".B_page .a").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function headDone(){}
		function footDone(){}
		app.view.head.show("head_simple",{},headDone);
		app.view.foot.show("foot_simple",{},footDone);
		app.view.main.sugest("B_page",data,data.state,"size",viewDone);
	}
});