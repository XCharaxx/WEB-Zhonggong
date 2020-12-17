# day01 js初识

上课认真听

写

每日反馈：列一下没有听懂的点，暂无



课程安排：

第一阶段：20天  html+css 静态布局

第二阶段：25天  网页交互

​			      15天：原生js

​						      5天基础语法： 变量  if else for循环  函数

​							 5天webapi：方法

​						     5天高级

​				  4天项目：优学		

​		          1天touchjs：移动端手势

​		          4天：jquery		

​				 1天:答辩    

第三阶段：es6+nodejs  15天

第四阶段：vue+react  20天

第五阶段：小程序 15天



## 1.js历史(了解)

1995年，网景(NetScape)开发出了一款大型商用浏览器，后台用java

解决问题：解决前端的表单提交问题

要求：尽可能要和java像，要比java简单

开发：布兰登.艾奇   借鉴  10天

命名：LiveScript ---- > javaScript (热点)    



微软 -- 搭载了一个克隆版的JavaScript  ---   JScript

 

**ECMA(欧洲计算机制造商协会)**（记忆）

制定标准：ECMAScript1.0

​					ECMAScript5.0: es5    

​					ECMAScript6.0: es6   

网景--火狐

##  2.JavaScript是什么？（掌握）

JavaScript是基于对象和事件驱动的解释性脚本语言

基于对象：js内部提供了一些对象（工具），这些对象的方法或者属性可以实现js的基本功能

事件驱动：浏览器对用户行为的直接响应，不需要经过服务器，

解释性：浏览器可以直接识别js语言，逐行解析代码，不需要编译



编译性：高级语言，计算机没有办法直接识别和执行，必须先编译成计算机能够识别的，然后在一起执行

解释性：可以直接识别的代码，读一行执行一行

## 3.JavaScript组成（掌握）

- ECMAScript ： JavaScript的标准
- DOM：Document Object Model  文档对象模型
- BOM：Browser Object Model  浏览器对象模型



ECMAScript和JavaScript的关系？

ECMAScript是JavaScript的标准

JavaScript是ECMAScript的具体实现



## 4.JavaScript的引用

- 行间

  ~~~js
  <!-- 1.行间  开始标签里面
   onclick ： 点击事件  点击这个按钮的时候触发
   alert(警告信息)：警告框
  -->
  <button onclick='alert("吃！！")'>吃饭</button>
  ~~~

- 内嵌

  ~~~js
   <!-- 2.内嵌 
          通过script标签直接写入js代码
          script标签可以写任意多个，可以放在任意位置，代码都是从上往下执行
          一般放在head或者是body的末尾，建议放body末尾
      -->
      <script>
          alert("hello world1?");
      </script>
  ~~~

- 外链

  ~~~js
   <!-- 3.外链 
        通过script标签的src属性引入外部的js文件，如果引入外部js文件，script标签内部的代码将不会被执行
      -->
      <script src="./outer.js">
           //如果引入外部js文件，script标签内部的代码将不会被执行
          alert("我是来之里面的js")
      </script>
  	
  
      <script>
           alert("我是来之里面的js");
      </script>
  ~~~

- 注释   //:单行注释     /**/多行注释

  ~~~js
    
  //单行  ctrl+/
  /*  
   多行   ctrl+shift+/
  */
  ~~~

注意：js的执行顺序是从上往下执行

## 5.window.onload

语法：window.onload = function(){  所有的js代码 }

作用：等文档和资源都加载完成后调用

~~~js
<script>
    //等待文档和资源的加载，都加载完成后才会触发window.onload事件
    	window.onload = function () {
            //获取元素
            // Cannot set property 'onclick' of null : 前面标签问题
            //is not defined :  没有定义，单词写错了，要么根本没有这个东西
            alert(document.getElementById("btn"))
            document.getElementById("btn").onclick = function () {
        		alert("好的呀");
    		}
	  }
</script>
~~~

## 6.常用的鼠标事件

### 6.1 鼠标事件

- onclick:点击

- onmouseover：鼠标移入/onmouseenter

  - onmouseover ： 子元素可以触发父元素的事件

  - onmouseenter：子元素不可以触发父元素的事件

    ~~~js
    <div id="box1"><div></div></div>
    <div id="box2"><div></div></div>
    <script>
            //1.添加移入事件：子元素可以触发父元素的事件
            document.getElementById("box1").onmouseover = function(){
            alert("onmouseover移入")
        }	
    
    	//1.添加移入事件：子元素不可以触发父元素的事件
    	document.getElementById("box2").onmouseenter = function(){
    	    alert("onmouseenter移入")
    	}
    </script>
    ~~~

    

- onmouseout：鼠标移出/onmouseleave

- onmousedown：鼠标按下

- onmouseup：鼠标抬起

- onmousemove：鼠标移动

- ondblclick：双击

- oncontextmenu：右击

~~~js
//1.点击事件
document.getElementById("box").onclick = function(){
    //alert("他扒拉我！");
}
//2.双击事件(了解)
document.getElementById("box").ondblclick = function(){
    //alert("他又扒拉我！");
}
//3.移入事件
document.getElementById("box").onmouseover = function(){
    //alert("鼠标移入");
}
//4.移出事件
document.getElementById("box").onmouseout = function(){
    //alert("鼠标移出");
}
//5.鼠标移动事件
document.getElementById("box").onmousemove = function(){
    //alert("鼠标移动");
}
//6.鼠标按下
document.getElementById("box").onmousedown = function(){
    //alert("鼠标按下");
}
//6.鼠标抬起
document.getElementById("box").onmouseup = function(){
    //alert("鼠标抬起");
}
//7.右击事件(了解)
document.getElementById("box").oncontextmenu = function(){
    alert("菜单");
}
~~~

## 7.变量与调试命令

### 7.1变量

变量：可以改变的量，存储数据的容器

声明变量语法： var 变量名 = 值

~~~js
//1.声明变量
var a;
alert(a); //undefined 未定义，声明变量但是没有赋值，结果就是undefined

//2.赋值 =  
a = 10; //将10赋值给a
alert(a);

//3.声明的同时赋值
var b = 20;
alert(b);

//4.同时声明多个
var n = 100,m = 100;
alert(n);

//5.链等
var x = y = 100;
~~~

注意：变量的命名规则

- 变量名只能以字母、数字、_ $组成，并且不能以数字开头
- 不能使用关键字和保留字
- 见名知意，遵循驼峰标识 top_head   topHead
- 最好不要同名,同名会覆盖

### 7.2调试命令

- alert（）:在页面弹出，一次弹一个

- console.log（）：在控制台显示,多个之间用逗号隔开

  ~~~js
  //在页面弹出，一次弹一个
  //变量和数字不加引号
  alert(oDiv,oBtn);
  
  //在控制台显示,多个之间用逗号隔开
  console.log(oDiv,oBtn);
  ~~~

  一般用于调试阶段，上线前会删除

## 8.操作标签

### 8.1 操作标签内容

#### 8.1.1 操作表单元素内容

- 获取：var 变量 = 标签.value

- 设置：标签.value  = 值

  ~~~js
  //2.点击获取按钮，获取输入框的内容
  oGetBtn.onclick = function(){
      //获取：var 变量 = 标签.value
      var v = oIn.value;
      console.log(v);
  }
  
  //3.点击设置按钮，设置输入框的内容
  oSetBtn.onclick = function(){
      //设置：标签.value = 值
      oIn.value = "北国风光"; //一般加引号，变量和数字不加
  }
  ~~~

### 8.1.2 操作闭合标签内容 

~~~js
<div id='box' style='width:100px'><span>fdasfdafdsafd</span></div>
~~~

- 获取：var 变量 = 标签.innerHTML/innerText

- 设置：标签.innerHTML/innerText = 值

- 特性：

  ​            innerHTML会覆盖标签内原有的内容

  ​            innerHTML能识别标签,innerText不识别标签

  ~~~js
  //1.获取元素
  var oDiv = document.getElementById("box");
  
  //2.获取标签内容 var 变量 = 标签.innerHTML
  var inner = oDiv.innerHTML; 
  console.log(inner); // <p>少壮不努力</p>
  
  //3.设置标签内容： 标签.innerHTML = 值
  //oDiv.innerHTML = "<p>老大徒<strong>伤</strong>悲</p>";
  
  //4.在后面添加(不覆盖)
  //拼接  之前+现在的
  //oDiv.innerHTML = oDiv.innerHTML + "<p>老大徒<strong>伤</strong>悲</p>";
  
  //追加，在末尾添加
  oDiv.innerHTML += "<p>老大徒<strong>伤</strong>悲</p>";
  ~~~

  

### 8.2 操作标签属性

~~~html
<div id='box' title='标题' class=''>
</div>

<img src=''>
~~~

- 获取：var 变量 = 标签.属性名

- 设置：标签.属性名 = 属性值

- 特殊：操作class  标签.className

  ~~~js
  //1.获取元素
  var oDiv = document.getElementById("box");
  
  //2.获取元素属性： 标签.属性名
  var title = oDiv.title;
  console.log(title);
  
  //3.设置标签属性  标签.属性名 = 属性值
  oDiv.title = "我是一个卖报的小行家";
  
  //4.特殊：
  oDiv.className = "active";
  ~~~

### 8.3 操作标签样式

- 设置：标签.style.属性名 = 属性值

  ~~~js
   //2.移入，200*200
  oDiv.onmouseover = function(){
      //操作样式，标签.style.属性名 = 属性值
      oDiv.style.width = "200px";
      oDiv.style.height = "200px";
      oDiv.style.background = "red";
      oDiv.style.border = "2px solid teal";
  }
  ~~~

  

