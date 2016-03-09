app.control.set({
	name:"money",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#moneyMain', {  });
			
		}
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleIcon_head",{"title":"QQ钱包",right:[{id:"",src:"img/self.png"}]},headDone);
		app.view.foot.show("money_foot",{},footDone);
		app.view.main.sugest("money_page",data,data.state,"side",viewDone);
	}
});