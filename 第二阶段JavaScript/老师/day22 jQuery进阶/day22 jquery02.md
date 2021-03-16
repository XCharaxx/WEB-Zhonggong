## day22 jquery02

## 1.回顾

jQuery：优秀的JavaScript库，强大的选择器、兼容性、语法简洁。

遍历文档，DOM处理，事件、ajax、动画

最新版3.5.2  使用版本2.0以下，兼容IE

- window.onload和ready的区别

  - 前者等文档和资源都加载完成后调用，多个事件会覆盖
  - 后者等文档加载完成就调用，多个事件会叠加

- DOM和jQuery的互换

  - DOM----》jQuery  $(dom对象)
  - jQuery---》DOM    $()[下标]   $().get(下标)

- 常用选择器

  - 基本选择器 ：  标签选择器，id 选择器，类选择器，群组选择器
  - 层次选择器： 后代，子代，+ ~
    - next,nextAll,prev,prevAll,siblings,children,find,parent,parents
  - eq
    - $("div:eq(下标)")
    - $("div").eq(下标)
  - 表单
    - ：type类型     ：text  ：radio
    - ：checked ： 获取选择框被选中的项

- 标签操作

  - 内容
    - 表单： $().val()
    - 闭合标签：$().html(),$().text()
  - 属性
    - attr
      - 设置/获取  $().attr()
      - 删除：$().removeAttr()
      - 批量操作：$().attr({})
    - prop
      - 设置/获取  $().prop()
      - 删除：$().removeProp()
      - 批量操作：$().prop({})
    - 区别：
      - 固有属性使用prop，自定义属性attr
      - 一般使用attr，input的checked使用prop
    - 操作class
      - $().addClass()
      - $().removeClass() 
      - $().toggleClass()
      - $().hasClass()  $().is()  : 判断是否存在某个class，有返回true，没有返回false
  - 样式
    - $().css()

- 循环

  - map
    - $.map(循环项,function(value,index))
    - $(循环项).map(function(index,value))
  - each
    - $.each(循环项,function(index,value))
    - $(循环项).each(function(index,value))

  

## 2.jQuery的BOM

### 2.1 原生js的BOM

- client
  - 元素可视宽高：元素.clientWidth/Height    content+padding
  - 屏幕的可视宽高：document.documentElement.clientWidth/height
- offset
  - 元素的占位宽高：元素.offsetWidth/Height  content+padding+border
  - 元素在页面位置：元素.offseTop/Left   当前元素到定位父元素的位置，没有定位父元素到boby的位置
- scroll
  - onscroll
  - 页面滚动距离：document.documentElement.scrollTop || document.body.scrollTop

### 2.2 jQuery的BOM

- 获取元素的宽高

  ~~~js
  //元素内容宽高 content
  console.log($("div").width()); //100
  
  //元素可视宽高  content+padding
  console.log($("div").innerWidth()); //120
  
  //元素占位宽高  content+padding+border
  console.log($("div").outerWidth(false)); //140  false:默认，不包含margin
  console.log($("div").outerWidth(true)); //340   true：包含margin
  
  //屏幕宽
  console.log($(window).height());
  //文档宽高
  console.log($(document).height());
  ~~~

- 获取元素的位置

  ~~~js
  //1.在页面中的位置   当前元素到body
  var offset = $(".inner").offset();
  console.log(offset); //top: 130, left: 118}
  console.log(offset.top);
  
  
  //2.获取定位距离
  var pos = $(".inner").position(); 
  console.log(pos); //{top: 20, left: 0}
  
  //3.滚动距离
  $(window).scroll(function(){
      console.log($(window).scrollTop());
  })
  ~~~

## 3.jQuery的DOM

### 3.1 原生js的BOM

- 创建
  - 创建标签节点：document.createElement（"标签名"） 
  - 创建文本节点：document.createTextNode（“文本内容”）
  - “<p></p>”
- 添加
  - 追加：父节点.appendChild（子节点）
  - 插入：父节点.insertBefore(newChild,refChild)
- 删除
  - 删除本身：标签.remove()   ie8-不兼容
  - 删除子节点：父节点.removeChild(子节点)
- 复制
  - 被复制的标签.cloneNode（boolean）  默认是false：只复制标签，true：复制标签和内容
- 替换
  - 父节点.replace(newChild，refChild)

### 3.2 jQuery的DOM

- 创建

  $("<li></li>")

- 添加 

  - 在父元素末尾添加
    - $(父元素).append(子元素)
    - $(子元素).appendTo(父元素)
  - 在父元素头部添加
    - $(父元素).prepend(子元素)
    - $(子元素).prependTo(父元素)
  - 在某个元素之前添加
    - $(参考元素).before(添加的元素)
    - $(添加的元素).insertBefore(参考元素)
  - 在某个元素之后添加
    - $(参考元素).after(添加的元素)
    - $(添加的元素).insertAfter(参考元素)

  ~~~js
  //1.创建节点  $("<li>大江大河2</li>")
  console.log($("<li>大江大河2</li>"));
  
  //2.追加,在父元素的末尾添加
  //2.1 $(父节点).append(子元素)       
  $("ul").append("<li>家有儿女</li>");
  
  //2.2 $(子元素).appendTo(父元素)
  $("<li>品如的衣柜</li>").appendTo("ul");
  
  //3.在头部添加
  //3.1 $(父元素).prepend(子元素)
  $("ul").prepend("<li>赵四</li>");
  
  //3.2 $(子元素).prependTo(父元素)
  $("<li>刘能</li>").prependTo("ul");
  
  //4.在某个元素之前添加
  //4.1 $("参考元素").before(添加的节点)
  $("li:eq(4)").before("<li>大郎</li>");
  
  //4.1 $("添加的节点").insertBefore("参考节点")
  $("<li>牛郎</li>").insertBefore("li:eq(4)");
  
  //5.在某个元素之后添加
  //5.1 $("参考元素").after("要添加的节点")
  //5.2 $("要添加的节点").insertAfter("参考元素")
  $("li:eq(1)").after("<li>谢大脚</li>");
  ~~~

- 删除

  - detach:删除元素，返回被删除元素的引用,方便下次使用，会保留被删除元素的事件

  - remove:删除元素，返回被删除元素的引用,方便下次使用，不会保留被删除元素的事

  - empty:清空子元素

    ~~~js
    //detach:删除元素，返回被删除元素的引用,方便下次使用，会保留被删除元素的事件
    $(".detach").click(function(){
        var del = $("li").detach();
    
        setTimeout(function(){
            $("ul").append(del);
        },2000);
    })
    
    
    //remove:删除元素，返回被删除元素的引用,方便下次使用，不会保留被删除元素的事件
    $(".remove").click(function(){
        var del = $("li").remove();
    
        setTimeout(function(){
            $("ul").append(del);
        },2000);
    })
    
    
    //empty:清空子元素
    $("ul").empty();
    ~~~

- 复制

  - $().clone(boolean)，
    - 默认是false：复制标签，不会复制js中添加的事件，
    - true:复制标签，会复制js中添加的事件

  ~~~JS
  $("div").click(function(){
      alert("你猜我是个啥？");
  })
  //$().clone(boolean)
  //默认是false：复制标签，不会复制js中添加的事件
  //true:复制标签，会复制js中添加的事件
  
  $("div").clone(false).appendTo("body");
  // $("div").clone(true).appendTo("body");
  ~~~

- 替换

  - $(被替换的内容).replaceWith(替换的内容)

  - $(替换的内容).replaceAll(被替换的内容)

    ~~~JS
    //$(被替换的内容).replaceWith(替换的内容)
    $("li:eq(2)").replaceWith("<li>第三周：睡觉</li>");
    
    //$(替换的内容).replaceAll(被替换的内容)
    $("<li>第二周：国美项目完成</li>").replaceAll("li:eq(1)");
    ~~~

## 4.事件

### 4.1 事件对象

添加事件：$().事件方法(事件处理函数)

~~~js
$(window).click(function(ev){
    //1.事件对象，jQuery通过事件处理函数的参数获取，已经做好了兼容
    //console.log(ev); //jQuery.Event
    //console.log(ev.originalEvent); //原生事件对象

    //2.事件对象属性
    console.log(ev.clientX+"-----"+ev.clientY); //鼠标位置，相对于可视区
    console.log(ev.keyCode); //按键编码
    console.log(ev.shiftKey,ev.ctrlKey,ev.altKey); //有没有按，按了-true  没按-false
});

$("a").click(function(ev){
    ev.stopPropagation(); //阻止事件冒泡
    ev.preventDefault(); //阻止默认行为
    console.log("被点击了");
})
~~~

### 4.2 事件绑定

#### 4.2.1 原生js的事件绑定

- 绑定
  - 标准浏览器：标签.addEventLister(事件类型，事件处理函数，是否捕获)
  - IE浏览器：标签.attachEvent(事件类型，事件处理函数)
- 取消
  - 标准浏览器：标签.removeEventLister(事件类型，事件处理函数，是否捕获)
  - IE浏览器：标签.detachEvent(事件类型，事件处理函数)

#### 4.2.2 jquery的事件绑定

- 绑定事件：on

  - 普通事件添加：$().on(事件类型，事件处理函数)

    ~~~js
    //1.不会覆盖，可以叠加
    $("div").on("click",week1);
    $("div").on("click",week2);
    
    //2.可以多个不同事件添加同一个事件处理函数
    $("div").on("click mouseover",week1);
    
    //3.同时添加多个事件
    $("div").on({
        "click":week1,
        "mouseover":week2
    });
    
    //4.可以自定义事件
    $("div").on("classover",function(){
        console.log("睡觉看奥特曼，梦里啥都有");
    });
    
    //触发自定义事件
    setTimeout(function(){
        $("div").trigger("classover");
    },2000);
    
    
    //5.命名空间，如果项目足够大，或者引入了大量的第三个库，可能会出来命名冲突
    var index = {}; 
    index.name = "首页";
    
    var detail = {};
    detail.name = "详情页";
    
    
    $("div").on("click.txf",week1);
    $("div").on("click.ujiuye",week2);
    ~~~

  - 事件绑定添加：$().on(type,子元素选择器,事件处理函数)

    ~~~js
    //将事件添加给父元素，当子元素事件触发的时候，会通过事件冒泡传递到父元素
    //特点：提高性能，事件可以发生在未来
    //$().on(type,子元素选择器,事件处理函数)
    $("ul").on("click","li",function(){
        console.log(this); //this指向触发事件的子元素
        $(this).css("background","green").siblings().css("background","");
    });
    
    $("ul").append("<li>下课</li>")
    ~~~

- 取消事件：off  所有形式添加的事件都可以通过off方法取消

  ~~~js
  //取消：$().off(事件类型,事件处理函数)
  //$("div").off(); //默认清除这个标签上的所有事件
  //$("div").off("click"); //清除标签上所有的点击事件
  $("div").off("click",week1); //清除这一个
  ~~~

- 一次性事件

  ~~~js
   //一次性事件语法：$().one(事件类型，事件处理函数)
  var arr = ["1600压岁钱","对象","1060显卡","苹果全套"];
  $("button").one("click",function(){
      console.log(arr[Math.floor(Math.random()*arr.length)]);
  });
  ~~~

- 组合事件

  ~~~js
   $("div").hover(function(){
       //移入执行代码
       $("div").css("width",200)
   },function(){
       //移出执行代码
       $("div").css("width",100)
   })
  ~~~

  

  