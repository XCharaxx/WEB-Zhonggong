
var ujiuye = (function () {
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
*作用：元素运动
*@parm {object} elem：标签
*@parm {string} attr：属性
*@parm {number} step：步长
*@parm {number} target：目标值
*(@parm {number} time : 间隔时间)
*/
function move(elem, attr, step, target) {//elem:标签  attr:属性  step:步长   target：目标值
    if (parseInt(getStyle(elem, attr)) - target < 0) {
        step = step;
    } else {
        step = -step;
    }
    clearInterval(elem.timer);
    elem.timer = setInterval(function () {
        var i = parseInt(getStyle(elem, attr)) + step;
        if ((i >= target && step > 0) || (i <= target && step < 0)) {
            i = target;
            clearInterval(elem.timer);
        }
        elem.style.left = i + "px";
    },30);
}



/*
*作用：任意属性运动
*@parm {object} elem：标签
*@parm {object} attrs：属性和目标值组成的对象
*@parm {number} xs：速度系数
*@parm {function} callback：回调函数（）
*/
function bufferMove(elem, attrs, xs, callback) {
    clearInterval(elem.timer)
    elem.timer = setInterval(function () {

        //a.假设所有属性都到了目标 
        var tag = true;
        //b.验证：挨个看，只要有一个没有到目标点  假设不成立  tag = false
        for (var attr in attrs) {//attr:width  height
            //4.获取当前值
            if (attr == "opacity") {
                //目标需要放大100
                attrs[attr] = attrs[attr] <=1 ? attrs[attr] * 100 : attrs[attr];
                var cur = parseInt(getStyle(elem, attr) * 100); //透明度的值太小，放大100倍处理
            } else {
                var cur = parseInt(getStyle(elem, attr));
            }
           
            //5.计算速度 (目标值-当前值)/系数
            var speed = (attrs[attr] - cur) / xs;

            //6.像素取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            //3.移动div
            if (attr == "opacity") {
                elem.style[attr] = (cur + speed) / 100;  //透明度不加单位
            } else {
                elem.style[attr] = cur + speed + "px";
            }

            //c.只要有一个没有到目标点  假设不成立  tag = false
            if (cur != attrs[attr]) {
                tag = false;
            }
        }

        //d.通过tag的值，得出结论
        if (tag == true) {
            clearInterval(elem.timer);
            //两真为真，如果第一个为真，看第二个，如果第一个为假，第二个就不看
            callback && callback(); //callback：可选
        }
    }, 30);
}





/* 作用：在最小值和最大值的范围内随机取数
*@parm  { number } max: 最大值
*@parm  { number } min: 最小值 
*/
function getRandom(min, max) {    //max:最大值   min：最小值
    var ra = Math.floor(Math.random() * (max - min + 1) + min);
    return ra;
}


/* 作用：生成5位随机验证码
*@parm  { number } n: 验证码个数
*/
function getVer(n) {
    var str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
// 1.生成5位随机验证码
    var s="";
for (var i = 0; i < n; i++) {

     s += str[Math.floor(Math.random() * (str.length))];
    
    }
    return s;
}





/* 作用：去除字符串重复的数
*@parm  { string } str: 要去重的字符串名
*/
function clearRep(str) {
    var s = "";
for (var i = 0; i < str.length; i++) {
    if (s.indexOf(str[i]) == -1) {
        s += str[i];
    }
    }
    return s;
}




/*  
*作用：绑定对象   取消绑定
*@parm {object} elem：标签
*@parm {string} type:事件类型
*@parm {function} fun:事件处理函数
*/
function bind(elem, type, fun) {//标签,事件类型,事件处理函数
    if (elem.addEventListener) {
        elem.addEventListener(type, fun);
    } else {
        elem.attachEvent("on" + type, fun);
    }
}
function unbind(elem, type, fun) {//标签,事件类型,事件处理函数
    if (elem.removeEventListener) {
        elem.removeEventListener(type, fun);
    } else {
        elem.detachEvent("on" + type, fun);
    }
}










/*
*作用：滚轮事件
*@parm {object} elem：标签
*@parm {function} upFun:向上函数
*@parm {function} downFun:向下函数
*/
function mousewheel(elem, upFun, downFun) {
    //1.添加滚轮事件
    elem.onmousewheel = scroll;
    if (elem.addEventListener) {
        elem.addEventListener("DOMMouseScroll", scroll)
    }
    //2.声明一个滚动事件发生时调用的函数
    function scroll(ev) {
        var oEv = window.event || ev;
        //console.log(oEv.wheelDelta); //chrome ie
        //console.log(oEv.detail);//ff

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



/* 
    *作用：请求后台数据
    *@parm {object} requests：请求对象的各种数据
    */
function ajax(requests) { //{url,type,data}
    //1.创建一个请求对象
    var xhr = new XMLHttpRequest();

    //2.建立连接
    if (requests.type.toLowerCase() == "get") {
        //如果有参数，就拼接在url的后面，没有就不拼
        var url = requests.data ? requests.url + "?" + requests.data : requests.url;
        xhr.open("get", url, true);
        //3.发送请求
        xhr.send();
    } else {
        xhr.open("post", requests.url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //3.发送请求
        xhr.send(requests.data);
    }

    //4.监听结果
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { //服务器处理结束，并且已经返回响应包
            if (xhr.status == 200) {//请求成功
                requests.success(JSON.parse(xhr.responseText));
            }
        }
    }

}


return {
    "bufferMove": bufferMove,
    "mousewheel": mousewheel,
    "unbind": unbind,
    "bind": bind,
    "getVer": getVer,
    "clearRep": clearRep,
    "getRandom": getRandom,
    "move": move,
    "getStyle": getStyle,
    "ajax": ajax
}
}) ()
