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
		app.view.head.show("buttonTitleIcon_head",{title:"某人",right:[{id:"",src:"img/headButtonA.png"},{id:"",src:"img/headButtonB.png"}]},headDone);
		app.view.foot.show("talk_foot",{hl:"1"},footDone);
		app.view.main.sugest("detail_page",data,data.state,"top",viewDone);
	}
});