app.control.set({
	name:"regest",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*用于操作M层*/
			var user={};
			/*数据同步状态*/
			var userLoaded=0;
			var modelCallback=function(model){/*M层准备好了*/
				user=model;
				userLoaded=1;
			};
			app.model.get("user",modelCallback);
			/*绑定事件*/
			$(".regest_page #Send").unbind("tap").bind("tap",function(){
				if(!userLoaded){
					app.pop.on("数据未同步成功，请稍后再试");
					return false;
				}
				if(!$("#phone input").val()){
					app.pop.on("请输入手机号");
					return false;
				}
				if(!$("#key input").val()){
					app.pop.on("请输入密码");
					return false;
				}
				/*开始注册*/
				user.regest($("#phone input").val(),$("#key input").val(),function(returnData){
					if(returnData){
						app.pop.on("注册成功");
						window.location.hash="index";
					}
				});
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