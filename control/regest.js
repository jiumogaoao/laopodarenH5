app.control.set({
	name:"regest",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*绑定事件*/
			$(".regest_page #Send").unbind("tap").bind("tap",function(){
				window.location.hash="saveCode";
			});
		}
		function headDone(){/*头部加载完成*/
			/*绑定事件*/
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){/*脚部加载完成*/

		}
		/*加载头部，传入参数*/
		app.view.head.show("head_template",{"left":{type:"back",text:"返回"},"center":{type:"title",text:"验证手机号码"}},headDone);
		/*隐藏脚部*/
		app.view.foot.hide();
		/*加载主区，传入参数*/
		app.view.main.sugest("regest_page",data,data.state,"side",viewDone);
	}
});