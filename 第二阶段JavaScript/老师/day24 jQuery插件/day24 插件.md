## day24 插件

## 1.回顾

- 跨域：浏览器针对于JavaScript同源策略的限制
- 跨域的情况：
  - 域名不同   http://www.taobao.com       http://www.jd.com
  - 端口不同   http://www.taobao.com:8000   http://www.taobao.com:3000
  - 协议不同    http://www.taobao.com   https://www.taobao.com
- 解决跨域：
  - 解决方式jsonp：通过script标签的src属性，请求数据，会在参数中传递一个函数，后台调用函数传值，把这种不规范的数据传输方式叫jsonp
  - 注意：jsonp只支持get，    cors：跨域资源共享
  - jquery解决跨域：dataType：”jsonp“
- 前端和后台的编码方式不一样，请求出现乱码怎么办？
  - 统一编码

## 2.表单序列化

~~~js
$("button").click(function(){
    console.log($("form").serialize()); //usr=txf1116&pwd=1233456
    console.log($("form").serializeArray());
    /* 
                [
                    {"name":"usr","value":"txf1116"},
                    {"name":"pwd","value":"12354"}
                ]
            */
})
~~~



## 3.jquery插件

- 第三方插件

  - 明确需求
  - 网上找资源  jq22    github   百度 
  - 下载
  - 使用
    - 引入jquery
    - 引入插件的js
    - 调试代码

- 自定义插件

  - 扩展类级别的插件   $.map()    $.trim()
    - $.extend({  "方法名":function(){}  })

  ~~~js
  //语法：$.extend({方法名:function(){ }})
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
          return [maxStr,maxCount];
      },
      "quchong":function(){}
  });
  
  var arr = $.getMaxString("qweqreqfsfqsfqeqwqewqewqewqewqe");
  console.log(arr[0]+"出现次数最多，共出现了："+arr[1]);
  ~~~

  

  - 扩展对象级别的插件 $().css()   $().html()
    - $.fn.extend({  "方法名":function(){}  })

  ~~~js
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
  ~~~

  

注意：扩展是在jquery的基础上，必须先引入jquery

## 4.zepto

官网：https://www.runoob.com/manual/zeptojs.html

**Zepto**是一个轻量级的**针对现代高级浏览器的JavaScript库，** 它与jquery**有着类似的api**。 如果你会用jquery，那么你也会用zepto。

~~~js
<script src="./js/zepto.min.js"></script>
<script src="./js/fx.js"></script>
<script>
    $("div").css({"width":100,"height":100,"background":"red",padding:10});
    $("div").click(function(){
        alert("新年好，万事大吉");
        $("div").animate({"width":500})
    });

    //zepto和jquery的区别
    //1、zepto没有innerWidth和outerWidth方法,获取元素可见的宽度,元素隐藏为0
    console.log($("div").width());
    // console.log($("div").innerWidth());
    // console.log($("div").outerWidth());


    //2、{left: 0, top: 0, width: 0, height: 0}
    console.log($("div").offset());
</script>
~~~

touch模块

~~~js
 ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
      'doubleTap', 'tap', 'singleTap', 'longTap']
$("div").tap(function(){
    console.log("弹弹弹");
});
$("div").singleTap(function(){
    console.log("单单单");
});
$("div").doubleTap(function(){
    console.log("双双双");
});


$("div").swipeLeft(function(){
    console.log("左滑");
})
~~~



## 5.深浅拷贝

- 浅拷贝：拷贝地址，一改全改

  ~~~js
  //浅拷贝：拷贝的是地址，一改全改
  var arr1 = [1,2,3,4];
  var arr2 = arr1; //[1,2,3,4];
  arr2.push(5); //arr2 = [1,2,3,4,5];
  console.log(arr1); //[1,2,3,4,5];
  
  
  var obj1  = {"name":"web"};
  var obj2 = obj1;
  obj2.name = "ui";
  console.log(obj1); //{"name":"ui"};
  ~~~

- 深拷贝：拷贝的是值

  ~~~js
  //深拷贝：拷贝值，相互之间不影响
  var arr3 = [1,2,3,4];
  var arr4 = [];
  for(var key in arr3){
      arr4[key] = arr3[key];
  }
  console.log(arr4);
  arr4.push("a"); //arr4 = [1,2,3,4,"a"];
  console.log(arr3); //[1,2,3,4]
  
  
  var obj3 = {"age":18};
  var obj4 = {};
  for(var key in obj3){
      obj4[key] = obj3[key]
  }
  console.log(obj4); //{"age":18}
  obj4.age = 17;
  console.log(obj3);  //{"age":18} 不会影响
  ~~~

- 封装一个深拷贝的函数

  ~~~js
  //返回数据的具体的类型
  function getType(data){ 
      return Object.prototype.toString.call(data).slice(8,-1);
  }
  function deepCopy(obj){
      //1.创建一个空对象/空数组
      if(getType(obj) == "Array"){
          var res = [];
      }else if(getType(obj) == "Object"){
          var res = {};
      }else{
          return obj;  //如果不是数组和对象，就不存在深浅拷贝
      }
  
      //2.循环往这个空对象/空数组中添加属性
      for(var key in obj){
          //4.如果复制的值还是一个引用数据类型，继续进行深拷贝
          if(getType(obj[key])=="Array"||getType(obj[key])=="Object"){
              res[key] = deepCopy(obj[key]);
          }else{
              res[key] = obj[key];
          }
      }
  
      //3.返回复制好的内容
      return res;
  }
  ~~~

- jQuery 的深浅拷贝

  语法：$.extend(deep,目标对象，被复制的对象,....)

  ​            deep:是否深拷贝，默认是false(作用对象，对象里面嵌套的引用数据类型)

  ~~~js
  var obj = {
      "sex":"女"
  }
  var obj1 = {
      "name":"web",
      "detail":{
          'age':10
      }
  }
  var newObj = $.extend(true,{},obj1);
  console.log(newObj);
  
  obj1.detail.age = 20;
  console.log(newObj); 
  ~~~

  