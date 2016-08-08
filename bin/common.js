// JavaScript Document
;(function () {/*一切从这开始*/
    /*干掉默认事件*/
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    var errorDelay="";
    /*声明主object*/
    window.app = {};
    /*自适应处理*/
	function resize(){
    app.size=$(window).width()/750;
	$("#all").css({
		"-webkit-transform":"scale("+app.size+")",
		"transform":"scale("+app.size+")",
		"height":(($(window).height()/$(window).width())*750)+"px"
		});
	}
    /*先执行一次*/
	resize();
    /*屏幕有变动的时候再执行*/
	$(window).on("resize",resize);
    /*生成uuid*/
    app.uuid = function () {
        return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return (v.toString(16)).toUpperCase();
        });
    };
    /*C层*/
    app.control = {};
    /*M层*/
    app.model = {};
    /*V层*/
    app.view = {};
    /*弹出方法*/
    app.pop = {
        /*弹出打开*/
        on: function (data) {
            $("#pop").html(data);
            $("#pop").show();
            $("#popBg").show();
            $("#popBg").unbind("tap").bind("tap",function(){
                app.pop.off();
            })
        },
        /*弹出关闭*/
        off: function () {
            $("#pop").hide();
            $("#popBg").hide();
            $("#pop").empty();
        }
    };
    /*loading方法*/
    app.loading = {
        /*loading打开*/
        on:function (){
             $("#popBg").show();
            $("#popBg").unbind("tap").bind("tap",function(){
            })
        },
        /*loading关闭*/
        off:function(){
            $("#popBg").hide();
        }
    };
    /*本机缓存*/
    app.cache = function (key, value, remove) {
        if(!window.localStorage){
            alert("浏览器不支持本地缓存");
            return false;
        }
        if (value && typeof(value) === "object") {
            localStorage.setItem("h5qq_" + key, JSON.stringify(value));
        } else if (localStorage.getItem("h5qq_" + key)) {
            if (remove) {
                localStorage.removeItem("h5qq_" + key);
            } else {
                return JSON.parse(localStorage.getItem("h5qq_" + key));
            }
        } else {
            return false;
        }
    };
    /*报错方法*/
    app.err = function (data){
        $("#pop").html(JSON.stringify(data));
            $("#pop").show();
            $("#popBg").show();
            $("#popBg").unbind("tap").bind("tap",function(){});
            errorDelay=setTimeout(function(){
                $("#pop").hide();
                $("#popBg").hide();
                $("#pop").empty();
            },1000);
    };
})();