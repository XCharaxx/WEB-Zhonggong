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
    //当前值   目标值
     //0       500     +
     //500     0       -
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



