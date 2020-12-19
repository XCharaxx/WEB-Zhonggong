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
