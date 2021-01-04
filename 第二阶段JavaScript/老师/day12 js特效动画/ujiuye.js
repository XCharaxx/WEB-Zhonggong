/* 
*作用：获取元素的样式
*@parm {object} elem：标签
*@parm {string} attr：属性
*/
function getStyle(elem,attr) {//标签：elem  属性：attribute
    if (window.getComputedStyle) {
        //标准
        var w = getComputedStyle(elem)[attr];
    } else {
        //ie
        var w = elem.currentStyle[attr];
    }
   return w;
}


/* 
*作用：运动元素
*@parm {object} elem：标签
*@parm {string} attr：属性
*@parm {number} step：步长
*@parm {number} target：目标值
*/
function running(elem,attr,step,target) {
    //解决步长正负问题，如果当前值<目标值 ？ 步长正 ：步长负
    step = parseInt(getStyle(elem, attr))<target ? step : -step;
    clearInterval(elem.timer);
    elem.timer = setInterval(function () {
        //4.计算运动值  在当前位置的基础上+10
        var l = parseInt(getStyle(elem, attr)) + step

        //5.停止定时器
        if ((l >= target && step>0) || (l <= target && step<0)) {
            l = target;
            clearInterval(elem.timer);
        }

        //3.移动div
        elem.style[attr] = l + "px";

    }, 30);
}

/* 
*作用：获取某个区间的随机数
*@parm {number} min：最小值
*@parm {number} max：最大值
*/
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
/* 
*作用：生成n位随机验证码
*@parm {number} n:位数
*/
function randomCode(n) {
    var str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var s = ""; //存放随机验证码
    for (var i = 0; i < n; i++) {
        s += str.charAt(Math.floor(Math.random() * str.length));
    }
    return s;
}

/*  
*作用：绑定对象
*@parm {object} elem：标签
*@parm {string} type:事件类型
*@parm {function} fun:事件处理函数
*/
function bind(elem,type,fun) {//标签,事件类型,事件处理函数
    if (elem.addEventListener) {
        elem.addEventListener(type, fun);
    } else {
        elem.attachEvent("on"+type, fun);
    }
}
function unbind(elem,type,fun) {//标签,事件类型,事件处理函数
    if (elem.removeEventListener) {
        elem.removeEventListener(type, fun);
    } else {
        elem.detachEvent("on"+type, fun);
    }
}


/* 
*作用：添加滚轮事件
*@parm {object} elem：标签
*@parm {function} upFun：往上滚调用的函数
*@parm {function} downFun：往下滚调用的函数
*/
function mousewheel(elem,upFun,downFun) {
    //1.添加滚轮事件
    elem.onmousewheel = scroll;
    if (elem.addEventListener) {
        elem.addEventListener("DOMMouseScroll", scroll)
    }

    //2.声明一个滚动事件发生时调用的函数
    function scroll(ev) {
        var oEv = window.event || ev;
        var tag = true; //上--true   下--false
        if (oEv.wheelDelta) {
            tag = oEv.wheelDelta > 0 ? true : false
        } else {
            tag = oEv.detail < 0 ? true : false
        }

        if (tag) {
            upFun()
        } else {
            downFun();
        }
    }
}