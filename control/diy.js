app.control.set({
	name:"diy",
	par:[],
	fn:function(data){
		function viewDone(){/*主区加载完成*/
			/*添加滚动*/
			var myScroll = new IScroll('#diyMain', {  });
			/*每当图片加载完成，刷新滚动控件*/
			$('img').on("load",function(){
				myScroll.refresh();
			});
			/*绑定事件*/
			/*用于banner滚动过程锁死*/
			var rollLock=1;
			/*记录banner滚动不熟*/
			var step=0;
			/*banner滚动延时句柄*/
			var finishDelay=0;
			function roll(){
				$(".diy_page .banner_module .point").removeClass("hl");
					$(".diy_page .banner_module .point").eq(step).addClass("hl");
					$(".diy_page .banner_module .roll").attr("style",'transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 300ms; transform: translate(-'+((100*step)/$(".diy_page .banner_module .point").length)+'%, 0px) translateZ(0px);');
					finishDelay=setTimeout(function(){
						rollLock=1;
					},300);
			}
			/*banner向右划*/
			$(".diy_page .banner_module").unbind("swiperight").bind("swiperight",function(){
				if(rollLock){
					rollLock=0;
					if(step>0){
						step--;
					}
					roll();
				}
			});
			/*banner向左划*/
			$(".diy_page .banner_module").unbind("swipeleft").bind("swipeleft",function(){
				if(rollLock){
					rollLock=0;
					if(step<$(".diy_page .banner_module .point").length-1){
						step++;
					}
					roll();
				}
			});
			/*banner自动滚动*/
			var delay=setInterval(function(){
				if(rollLock){
					rollLock=0;
					if(step<$(".diy_page .banner_module .point").length-1){
						step++;
					}else{
						step=0;
					}
					roll();
				}
			},5000);
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
		app.view.head.show("head_template",{"left":{type:"back",text:"返回"},"center":{type:"title",text:"个性化中心"},right:{type:"button",text:"装扮开关"}},headDone);
		/*隐藏脚部*/
		app.view.foot.hide(footDone);
		/*加载主区，传入参数*/
		app.view.main.sugest("diy_page",data,data.state,"side",viewDone);
	}
});