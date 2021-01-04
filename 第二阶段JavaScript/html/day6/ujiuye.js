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
*@parm {number} time : 间隔时间
*/
function move(elem, attr, step, target, time) {//elem:标签  attr:属性  step:步长   target：目标值
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
    }, time);
}