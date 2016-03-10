app.control.set({
	name:"directoryList",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#directoryMain', {  });
			$('img').on("load",function(){
				myScroll.refresh();
			});
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleButton_head",{title:"通讯录",right:"设置"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("directoryList_page",data,data.state,"side",viewDone);
	}
});