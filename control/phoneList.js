app.control.set({
	name:"detail",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#detail', {  });
			
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleButton_head",{title:"电话黄页",right:"最近拨打"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("phoneList_page",data,data.state,"side",viewDone);
	}
});