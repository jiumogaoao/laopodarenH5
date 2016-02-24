// JavaScript Document
;
(function ($, obj, config) {
    var routeArry = {};
    window.domAll = $('<div id="domAll"></div>');

    function changePage() {
        
        var hash = "index";
        if (location.hash) {
            hash = location.hash.replace("#", "");
            hash = hash.split("?")[0];
        }
        var hashArry = hash.split("/");

        function runRoute() {
            app.pop.off();
            var dataObj = {};
            if (routeArry[hashArry[0]].par) {
                var dataArry = routeArry[hashArry[0]].par.split("/");
                for (var i = 0; i < dataArry.length; i++) {
                    dataObj[dataArry[i]] = hashArry[i + 1];
                }
            };

                routeArry[hashArry[0]].fn(dataObj);
            
        };

        if (routeArry[hashArry[0]]) {
            runRoute();
        } else {
            app.loading.on();
            $.ajax({
                url: "control/" + hashArry[0] + ".js",
                dataType: "script",
                data:{v:config.version},
                cache: true,
                error: function (err) {
                    app.loading.Off();
                    app.err();
                    window.location.hash = "";
                },
                success: function (data) {
                    app.loading.off();
                    runRoute();
                }
            });
        };
    }

    window.addEventListener("hashchange", function () {
        var hash = "index";
        if (location.hash) {
            hash = location.hash.replace("#", "");
            hash = hash.split("?")[0];
        }
        var hashArry = hash.split("/");
        changePage();
    })
    var set = function (data) {
        if (data && data.name) {
            routeArry[data.name] = {
                par: data.par || "",
                fn: data.fn || function () {
                }
            };
        }
    };
    obj.set = function (data) {
        set(data);
    };
    obj.init = function (loadDom) {
        if (loadDom) {
            $.ajax({
                url: "view/domAll.html",
                data: {v: config.version},
                dataType: "html",
                cache: true,
                error: function (err) {
                    app.loading.off();
                    app.err();
                },
                success: function (html) {
                    if (html) {
                        domAll.html(html);
                    }
                    changePage();
                }
            });
        } else {
            changePage();
        }
    };
})($, app.control, config);