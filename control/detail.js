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
		app.view.head.show("buttonTitleIcon_head",{title:"某人",right:[{id:"",src:"img/headButtonA.jpg"},{id:"",src:"img/headButtonB.jpg"}]},headDone);
		app.view.foot.show("talk_foot",{hl:"1"},footDone);
		app.view.main.sugest("detail_page",data,data.state,"size",viewDone);
	}
});