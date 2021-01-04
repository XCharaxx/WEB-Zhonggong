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

