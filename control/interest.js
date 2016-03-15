app.control.set({
	name:"interest",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScrollA = new IScroll('#interestGroup', {  });
			var myScrollB = new IScroll('#nearest', {  });
			var myScrollC = new IScroll('#orderLeft', {  });
			var myScrollD = new IScroll('#orderRight', {  });
			var myScrollE = new IScroll('#found', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('#groupNew img').on("load",function(){
				myScrollA.refresh();
			});
			$('#nearest img').on("load",function(){
				myScrollB.refresh();
			});
			$('#orderLeft img').on("load",function(){
				myScrollC.refresh();
			});
			$('#orderRight img').on("load",function(){
				myScrollD.refresh();
			});
			$('#found img').on("load",function(){
				myScrollE.refresh();
			});
			/*绑定事件*/
			var offset=0;
			/*子页面切换*/
			function pageRun(){
				$(".nav_module .nav_point").removeClass('hl');
				$(".nav_module .nav_point").eq(offset).addClass("hl");
				$(".nav_module .heightLine").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate("+offset+"00%,0px ) translateZ(0px)"});
				$(".interest_page #interestRoll").css({"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)", "transition-duration": "1000ms","transform":"translate(-"+(offset*750)+"px,0px ) translateZ(0px)"});
			}
			/*导航点击*/
			$(".nav_module .nav_point").unbind("tap").bind("tap",function(){
				offset=Number($(this).attr("num"));
				pageRun();
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
		app.view.head.show("head_template",{"left":{type:"back",text:"返回"},"center":{type:"title",text:"兴趣部落"},"right":{type:"button",text:"搜索"}},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("interest_page",data,data.state,"side",viewDone);
	}
});