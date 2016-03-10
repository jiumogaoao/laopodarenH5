// JavaScript Document
;(function () {/*一切从这开始*/
    /*干掉默认事件*/
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    /*声明主object*/
    window.app = {};
    /*自适应处理*/
	function resize(){
    app.size=$(window).width()/750;
	$("html").css({
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
        on: function (view, data, fn) {
            
        },
        /*弹出关闭*/
        off: function () {
            
        }
    };
    /*loading方法*/
    app.loading = {
        /*loading打开*/
        on:function (){

        },
        /*loading关闭*/
        off:function(){

        }
    };
    /*本机缓存*/
    app.cache = function (key, value, remove) {
        if (value && typeof(value) === "object") {
            localStorage.setItem("h5qq_" + key, JSON.stringify(value));
        } else if (localStorage.getItem("h5qq_" + key)) {
            if (remove) {
                localStorage.removeItem("h5qq_" + key);
            } else {
                return JSON.parse(localStorage.getItem("lvbh_" + key));
            }
        } else {
            return false;
        }
    };
    /*报错方法*/
    app.err = function (){};
})();