app.control.set({
	name:"index",
	par:[],
	fn:function(data){
		/*用于操作M层*/
		var user={};
		/*数据同步状态*/
		var userLoaded=0;
		var modelCallback=function(model){/*M层准备好了*/
			user=model;
			userLoaded=1;
		};
		app.model.get("user",modelCallback);
		function viewDone(){/*主区加载完成*/
			$(".index_page #forgetKey").unbind("tap").bind("tap",function(){/*点击忘记密码，跳control*/
				window.location.hash="forgetKey";
			});
			$(".index_page #regest").unbind("tap").bind("tap",function(){/*点击新用户，跳control*/
				window.location.hash="regest";
			});
			$(".index_page #login").unbind("tap").bind("tap",function(){/*点击登录，先锁住input,再跳control*/
				if(!userLoaded){
					app.pop.on("数据未同步成功，请稍后再试");
					return false;
				}
				if(!$("#loginName input").val()){
					app.pop.on("请输入账号");
					return false;
				}
				if(!$("#loginKey input").val()){
					app.pop.on("请输入密码");
					return false;
				}
				user.login($("#loginName input").val(),$("#loginKey input").val(),function(returnData){
					if(returnData){
						$(".index_page input").attr("disabled","disabled");
						window.location.hash="messageList";
					}
				});
				
			});
		}
		/*没有头部*/
		app.view.head.hide();
		/*没有尾部*/
		app.view.foot.hide();
		/*转出index_page的view*/
		app.view.main.sugest("index_page",data,data.state,"show",viewDone);
	}
});