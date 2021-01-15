;(function($){
    $.fn.extend({
        "fadeLunbo":function(){
            console.log(this); //$(".lunbo"):当前选择器选中的标签
            //淡入淡出轮播，定时器 2秒
            var n = 0,$this = this;
            setInterval(function(){
                n++;
                if(n == $this.find("ul li").length)n=0;
                //改变对应li的透明度
                $this.find("ul li").eq(n).animate({"opacity":1}).siblings().animate({"opacity":0});
                //改变小圆点的样式
                $this.find("ol li").eq(n).addClass("active").siblings().removeClass("active");
            },2000);
            return this; //方便链式操作
        }
    });


    $.extend({
        "getMaxString":function(str){
            //1.先把字符串里面的字符及出现的次数存储在对象中{"a":1}
            var obj = {};
            for(var i = 0;i<str.length;i++){
                obj[str[i]] = str.split(str[i]).length-1;
            }
            
            //2.判断出现次数最多的字符  先顶一个最大值，然后依次进行比较，如果后面的值比当前这个最大值还大，存储当前的最大值
            var maxCount = 0,maxStr = "";
            for(var s in obj){//s= q w e r f 
                if(maxCount < obj[s]){
                    maxCount = obj[s];
                    maxStr = s;
                }
            }
            return [maxStr,maxCount]
        },
        "quchong":function(){}
    });
})(jQuery);