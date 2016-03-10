app.control.set({
	name:"phoneList",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#phoneListMain', {  });
			$('img').on("load",function(){
				myScroll.refresh();
			});
			$(".phoneList_page .topPoint").unbind("tap").bind("tap",function(){
				window.location.hash="phoneListSub";
			});
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