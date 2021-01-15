
(function () {
    //1.获取元素
    var oWrap = document.querySelector(".wrap");
    var oUl = oWrap.getElementsByTagName("ul")[0];
    var oLi = oUl.getElementsByTagName("li");
    var oSpans = oWrap.getElementsByTagName("span");
    var oAL = oWrap.getElementsByTagName("a");
    //2.完善静态布局(获取后台数据，根据后台数据生成对应的标签)
    // 轮播图
    ujiuye.ajax({
        "url": "http://edu.xqb.ink/api/banner",
        "type": "get",
        "success": function (res) {
            var data = res.data;
            var n = 0;
            //根据后台数据生成对应的标签
            for (var i = 0; i < data.length; i++) {
                oUl.innerHTML += " <li style='background: url(" + data[i].coverimg + ") center top no-repeat '></li>";
            }
            //1.初始化样式
            oLi[0].style.opacity = 1;
            //自动轮播
            var timer = setInterval(auto, 3000);
            function auto() {

                n++;
                if (n >= oLi.length) {
                    n = 0;
                    // for (var j = 0; j < oLi.length; j++) {
                    //     oLi[j].style.opacity = 0;
                    // }
                }
                if (n < 0) {
                    n = oLi.length - 1;

                }
                for (var k = 0; k < oSpans.length; k++) {
                    ujiuye.bufferMove(oLi[k], { "opacity": 0 }, 20);
                    oSpans[k].className = "";
                }
                //   oLi[n].style.opacity = 1;
                ujiuye.bufferMove(oLi[n], { "opacity": 1 }, 20);
                oSpans[n == oSpans.length ? 0 : n].className = "active";
            }

            oWrap.onmouseover = function () {
                clearInterval(timer);

            }
            oWrap.onmouseout = function () {
                timer = setInterval(auto, 3000);
            }
            oAL[1].onclick = function () {
                auto();
            }
            oAL[0].onclick = function () {
                n -= 2; //因为在轮播函数中index会加1
                auto();
            }
            for (var i = 0; i < oSpans.length; i++) {

                oSpans[i].index = i;
                oSpans[i].onclick = function () {
                    clearInterval(timer);
                    for (var j = 0; j < oLi.length; j++) {
                        oLi[j].style.opacity = 0;
                    }
                    oLi[this.index].style.opacity = 1;
                    // bufferMove(oLi[this.index], { "opacity":1 }, 20);
                    for (var j = 0; j < oSpans.length; j++) {
                        oSpans[j].className = "";
                    }
                    n = this.index;
                    oSpans[this.index].className = "active";

                }
            }

        }
    });
})();


(function () {
    // 热门直播获取
    var oZbbg = document.querySelector(".zb_bg");
    var oAs = oZbbg.getElementsByTagName("a");
    var oZblist = document.querySelector(".zb_list ul");
    var oLis = oZblist.getElementsByTagName("li");
    ujiuye.ajax({
        "url": "http://edu.xqb.ink/api/hotplays",
        "type": "get",
        "success": function (res) {
            console.log(res);
            var data = res.data;
            for (var i = 0; i < data.length; i++) {
                oZbbg.innerHTML += "<a href=''><img src='" + data[i].images + "'><p>" + data[i].title + "</p></a>";
            }
            for (var h = 0; h < data.length; h++) {
                oZblist.innerHTML += h < 2 ? "<li class='clearfix'><a href='#'><img src='./images/ujyx_18.gif'><div>" + data[h].times.substring(0, 10) + "<br>" + data[h].times.substring(11, 19) + "</div><span>" + data[h].title + "</span></a></li>":"<li class='clearfix'><a href='#'><img src='./images/ujyx_25.jpg'><div>" + data[h].times.substring(0, 10) + "<br>" + data[h].times.substring(11, 19) + "</div><span>" + data[h].title + "</span></a></li>";
            }
            oAs[0].style.display = "block";
            for (var j = 0; j < oLis.length; j++) {
                oLis[j].index = j;
                oLis[j].onmouseover = function () {
                    for (var k = 0; k < oAs.length; k++) {
                        oAs[k].style.display = "none";
                    }
                    oAs[this.index].style.display = "block";
                }
            }

        }
    });
})();

(function () {

    var onlineClass = document.getElementById("onlineClass");
    var freeClass = document.getElementById("freeClass");
    var workClass = document.getElementById("workClass");
    
    // var oPer = document.querySelector(".perlon");
   
    ujiuye.ajax({
        "url": "http://edu.xqb.ink/api/courses",
        "type": "get",
        "success": function (res) {
            showClass(onlineClass, res, 0, 5);// 精品网课
            showClass(freeClass, res, 2, 6); //免费课程
            showClass(workClass, res, 1, 8); //就业面授班
        }
    });
    function showClass(parent, res,x,y) {

        var oPerhead = parent.querySelector(".perlon-head");
        var oPerhead_li = oPerhead.getElementsByTagName("li");
        var oPerdiv = parent.getElementsByClassName("perbodydiv")[0];
        var oPerbody = oPerdiv.getElementsByTagName("ul");
        console.log(res);
        var data = res.data;
        for (var i = 0; i < y; i++) {
            oPerhead.innerHTML += "<li><a href='./pages/list.html'>" + data[i].class + "</a></li>";
            oPerdiv.innerHTML += "<ul class='perlon-body clearfix'></ul>";
            for (var k = 0; k < data[i].course_list.length; k++) {
                oPerbody[i].innerHTML += "<li><a href='./pages/show.html'><img src='" + data[i].course_list[k].courseimg + "'><p>" + data[i].course_list[k].coursename + "</p><div class='clearfix'>&yen; <span>" + 199.00 + "</span><span>" + data[i].course_list[k].hours + "</span></div></a></li>";
            }
            //oPerdiv.innerHTML += "</ul>"
        }
        oPerbody[x].style.display = "block";
        for (var l = 0; l < oPerhead_li.length; l++) {
            oPerhead_li[l].index = l;
            oPerhead_li[l].onmouseover = function () {
                for (var j = 0; j < oPerbody.length; j++) {
                    oPerbody[j].style.display = "none";
                }
                oPerbody[this.index].style.display = "block";
            }
        }
    }

})();
  
(function () {
    //底部链接选项卡
    var oZbottom = document.querySelector(".z-bottom");
    var odtSpan = oZbottom.querySelectorAll("span");
    var oDd = oZbottom.getElementsByTagName("dd");
    odtSpan[0].style.color = "tomato";
    for (var i = 0; i < odtSpan.length; i++){
        odtSpan[i].index = i;
        odtSpan[i].onmouseover = function () {
            for (var i = 0; i < oDd.length; i++){
                oDd[i].style.display = "none";
                odtSpan[i].style.color = "black";
            }
            oDd[this.index].style.display = "block";
            odtSpan[this.index].style.color = "tomato";
        }
    }
})();

(function () {
   //锚点现身
    var oFixtip = document.querySelector(".fix-tips");
    window.onscroll = function () {
          var sTop = document.documentElement.scrollTop || document.body.scrollTop;
        
     
     
        if (sTop <=(oFixtip.clientHeight+600)) {
            oFixtip.style.display = "none";
        } else {
            oFixtip.style.display = "block";
    }
    }
    
})();