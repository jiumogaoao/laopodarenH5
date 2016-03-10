app.control.set({
	name:"diy",
	par:[],
	fn:function(data){
		function viewDone(){
			var myScroll = new IScroll('#diyMain', {  });
			$('img').on("load",function(){
				myScroll.refresh();
			});
			var rollLock=1;
			var step=0;
			var finishDelay=0;
			function roll(){
				$(".diy_page .banner_module .point").removeClass("hl");
					$(".diy_page .banner_module .point").eq(step).addClass("hl");
					$(".diy_page .banner_module .roll").attr("style",'transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 300ms; transform: translate(-'+((100*step)/$(".diy_page .banner_module .point").length)+'%, 0px) translateZ(0px);');
					finishDelay=setTimeout(function(){
						rollLock=1;
					},300);
			}
			$(".diy_page .banner_module").unbind("swiperight").bind("swiperight",function(){
				if(rollLock){
					rollLock=0;
					if(step>0){
						step--;
					}
					roll();
				}
			});
			$(".diy_page .banner_module").unbind("swipeleft").bind("swipeleft",function(){
				if(rollLock){
					rollLock=0;
					if(step<$(".diy_page .banner_module .point").length-1){
						step++;
					}
					roll();
				}
			});
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
		function headDone(){
			$(".head_module .left").unbind("tap").bind("tap",function(){
				app.control.back();
			});
		}
		function footDone(){

		}
		app.view.head.show("buttonTitleButton_head",{"title":"个性化中心","right":"装扮开关"},headDone);
		app.view.foot.hide(footDone);
		app.view.main.sugest("diy_page",data,data.state,"side",viewDone);
	}
});