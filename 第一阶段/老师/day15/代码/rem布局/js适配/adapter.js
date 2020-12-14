//获取当前屏幕宽度 
var currSWidth = document.documentElement.clientWidth;

//预设字体基础值 
var preFont = 100; //1rem = 100px 
//psd设计稿的宽度 假如设计稿就是750px
var psdWidth = 750;
if(currSWidth > 750) {
    currSWidth = 750;
}

//当前屏幕宽度所对应的字体基础值
var currFontSize =currSWidth*preFont/psdWidth; 
//设置当前屏幕下html的字体基础值
document.documentElement.style.fontSize = currFontSize +'px';