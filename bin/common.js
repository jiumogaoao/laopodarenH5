// JavaScript Document
;(function () {
    window.app = {};
	function resize(){
    app.size=$(window).width()/640;
	$("html").css({
		"-webkit-transform":"scale("+app.size+")",
		"transform":"scale("+app.size+")",
		"height":(($(window).height()/$(window).width())*640)+"px"
		});
	}
	resize();
	$(window).on("resize",resize);
    app.uuid = function () {
        return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return (v.toString(16)).toUpperCase();
        });
    };
    app.control = {};
    app.model = {};
    app.view = {};
    app.pop = {
        on: function (view, data, fn) {
            
        },
        off: function () {
            
        }
    };
    app.loading = {
        on:function (){

        },
        off:function(){

        }
    };
    app.cache = function (key, value, remove) {
        if (value && typeof(value) === "object") {
            localStorage.setItem("lvbh_" + key, JSON.stringify(value));
        } else if (localStorage.getItem("lvbh_" + key)) {
            if (remove) {
                localStorage.removeItem("lvbh_" + key);
            } else {
                return JSON.parse(localStorage.getItem("lvbh_" + key));
            }
        } else {
            return false;
        }
    };
    app.err = function (){};
})();