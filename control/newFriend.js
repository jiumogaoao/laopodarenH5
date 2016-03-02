app.control.set({
	name:"newFriend",
	par:[],
	fn:function(data){
		function viewDone(){
			//var myScroll = new IScroll('#detail', {  });
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleIcon_head",{title:"新朋友",right:[{id:"",src:"img/list.jpg"}]},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("newFriend_page",data,data.state,"size",viewDone);
	}
});