app.control.set({
	name:"index",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			$(".index_page #forgetKey").unbind("tap").bind("tap",function(){/*点击忘记密码，跳control*/
				window.location.hash="forgetKey";
			});
			$(".index_page #regest").unbind("tap").bind("tap",function(){/*点击新用户，跳control*/
				window.location.hash="regest";
			});
			$(".index_page #login").unbind("tap").bind("tap",function(){/*点击登录，先锁住input,再跳control*/
				$(".index_page input").attr("disabled","disabled");
				window.location.hash="messageList";
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