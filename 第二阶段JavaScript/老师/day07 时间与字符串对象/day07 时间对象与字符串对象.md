## day07 时间对象与字符串对象

## 1.回顾

- 定时器分类
  - setTimeout
    - 语法：setTimeout(函数，时间ms)
    - 使用场景：广告弹窗
  - setInterval
    - 语法：setInterval(函数，时间ms)
    - 使用场景：轮播图，倒计时，抽奖

- 停止定时器
  - clearInterval(intervalId)
  - clearTimeout()
- 封装
  - 实现功能
  - 声明一个函数，把主要代码放入到函数中
  - 找参数
  - 调用调试-----  来回目标值问题----&&     步长正负问题----当前值比较目标值

## 2.Math对象

对象的分类

- 内置对象：Number，String,Boolean,Object,Array,Function,Date,Math,RegExp,Error
- 宿主对象：window,document   DOM,BOM
- 全局对象：global

### 2.1 数学对象Math

#### 2.1.1 取整

~~~js
//1.取整(掌握)
console.log(parseInt(3.9999999)); //3 舍弃小数部分
console.log(Math.floor(3.9999));  //3 向下取整  舍弃小数部分
console.log(Math.ceil(3.001));    //4 往上取整  有小数部分就进位
console.log(Math.round(3.45));    //3 四舍五入
console.log(Math.round(3.55));    //4
~~~

#### 2.1.2 数学公式

~~~js
 //2.数学公式(熟悉)
console.log(Math.PI); //3.141592653589793
console.log(Math.abs(-10)); //10 取绝对值  正
console.log(Math.pow(2,10));  //计算次方数  2的10次方  1024
console.log(Math.sqrt(81));  //9  开根号

//编程计算x(10,20)   (100,100)两个点之间距离;   x2-x1的平方 + y2-y1的平方，开根号
var x1=10,x2=100,y1=20,y2=100;
console.log(Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)));
~~~

#### 2.1.3 随机数

~~~js
//3.随机数(掌握)
//Math.random() : 生成0-1之间的随机数，包括0，不包括1 [0,1)
console.log(Math.random());

//0-x   公式  Math.random()*x
//0-10
for(var i = 0;i<10;i++){
    console.log(Math.floor(Math.random()*10));
}

//x-y  公式  Math.random()*(max-min+1)+min

//20-100
//0+20  0  =  20
//1     1*80+20 = 100
for(var i = 0;i<10;i++){
    console.log(Math.floor(Math.random()*(100-20+1)+20));
}

var arr = ["mac电脑","500万","对象","帅哥","美女"];
console.log(arr[Math.floor(Math.random()*arr.length)]); //0 1 2 3 4 
~~~

封装一个获取随机数的函数

~~~js
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
~~~

## 3.Date对象

### 3.1 创建时间对象

~~~js
//1.创建时间对象(获取到当前这一秒的时间)
var oDate = new Date();
console.log(oDate);
~~~

### 3.2 获取固定格式时间对象

~~~js
//2.获取固定格式的时间
console.log(oDate.toDateString()); //Tue Dec 22 2020
console.log(oDate.toLocaleDateString()); //2020/12/22

console.log(oDate.toTimeString()); //13:42:33 GMT+0800 (中国标准时间)
console.log(oDate.toLocaleTimeString()); //下午1:42:33
~~~

### 3.3 获取单个时间

~~~js
//3.获取单个时间
var year = oDate.getFullYear();
console.log(year); //2020

//月份
var month = oDate.getMonth()+1; //月份从0开始，月份+1
console.log(month); //12

//日期
var date = oDate.getDate();
console.log(date); //22

//星期
var w = oDate.getDay();
console.log(w);//2    星期二
var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
console.log(week[w]);

//小时
var h = oDate.getHours();
console.log(h);

//分钟
var m = oDate.getMinutes();
console.log(m);

//秒
var s = oDate.getSeconds();
console.log(s);

console.log(oDate.getTime());//时间戳 --- 1970,1,1 -- 现在的秒数
~~~

3.4 倒计时

原理：未来时间-现在时间

- 创建未来时间

  ~~~js
  //创建时间  new Date(年,月,日,时,分,秒);  时分秒省略默认就是0
  var oDate1 = new Date(2021,1-1,1,0,0,0);
  console.log(oDate1); //Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
  
  //创建时间  new Date(“年,月,日,时:分:秒");  时分秒省略默认就是0
  var oDate2 = new Date("2021,1,1,00:00:00");
  console.log(oDate2);////Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
  
  //创建时间
  var oDate3 = new Date("Jan 01 2021,00:00:00");
  console.log(oDate3);//Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
  
  //创建时间 7天以后
  var oDate = new Date();
  oDate.setDate(oDate.getDate()+7);
  console.log(oDate);
  
  //7个小时以后
  oDate.setHours(oDate.getHours()+7);
  console.log(oDate);
  ~~~

- 倒计时

  ~~~js
  //1.获取当前时间
  var currentDate = new Date();
  
  //2.创建未来时间
  var futureDate = new Date("2021,1,1,00:00:00");
  
  //3.时间差 = 目标(未来)时间-当前时间     时间戳  某个时间到某个时间之间毫秒数
  var time = parseInt((futureDate - currentDate) / 1000);
  console.log(time);
  
  //4.计算
  var t = parseInt(time / 86400);
  console.log(t);
  
  var h = parseInt(time % 86400 / 3600);  //(time%86400:计算天数，剩余再算小时)
  console.log(h);
  
  var m = parseInt(time % 3600 / 60);
  console.log(m);
  
  var s = time % 60;
  console.log(s);
  ~~~

## 4.String对象

### 4.1 创建字符串对象

~~~js
//string：包装类对象，字面量创建的 字符串不能说是一个真正的字符串对象，
//调用字符串方法的时候，会暂时包装成String对象
//1.字面量
var str1 = "web1116";
console.log(str1); 
console.log(typeof str1);
console.log(str1.charAt(1)); //e

//2.关键字new 创建
var str2 = new String("web1116");
console.log(str2);
console.log(typeof str2);
~~~

### 4.2 字符串属性

- length : 获取字符串长度

### 4.3 字符串方法

- charAt(下标)

  作用：获取对应下标位置的字符

- charCodeAt(下标)

  作用：获取对应下标字符的编码

- indexOf(searchStr,index)

  作用：查询一个字符串在另一个字符串中首次出现的位置，出现返回对应的下标，没有返回-1

  参数：

  - searchStr:必须的，需要查询的字符串

  - index:可选，开始查找的位置，默认是下标0

    ```js
    var str = "web1012web1012web";
    var index = str.indexOf("10");
    console.log(index);//3
    var index = str.indexOf("17");
    console.log(index);//-1
    
    var index = str.indexOf("10",5); //从下标为5的位置开始查找
    console.log(index); //10
    
    //一般用于：看字符串中是否有某个特定的字符  例：验证小数
    var str = "1256";
    if(str.indexOf(".") != -1){
        alert("小数")
    }else{
        alert("整数")
    }
    ```

- lastIndexOf(searchStr,index)

  作用：查询一个字符串在另一个字符串中最后一次出现的位置，出现返回对应的下标，没有返回-1

  参数：

  - searchStr:必须的，需要查询的字符串

  - index:可选，开始查找的位置，默认是str.length  从后往前找

    ```js
     var str = "web1116web1116web";
    var index = str.lastIndexOf("10");
    console.log(index);//10  从后往前找
    ```

    

- substring(start,end)：截取

  作用：提取字符串中介于两个指定下标的字符，包括开始下标，不包括结束下标

  参数：

  - start:可选，开始截取的下标位置，默认是0
  - end:可选，结束截取的下标位置，默认是str.length

- slice(start,end) ：截取

  作用：提取字符串中介于两个指定下标的字符，包括开始下标，不包括结束下标

  参数：

  - start:可选，开始截取的下标位置，默认是0
  - end:可选，结束截取的下标位置，默认是str.length

```js
 var str = "431102197812123333";
//5.1 substring(start,end) : 提取字符串中介于两个指定下标的字符，包括开始下标，不包括结束下标
//start:可选，开始截取的下标位置，默认是0
//end:可选，结束截取的下标位置，默认是str.length
var s = str.substring(6); //下标为6开始，默认到最后
console.log(s); //197812123333

var s = str.substring(6,10);
console.log(s); //1978

//5.2 slice(start,end) : 提取字符串中介于两个指定下标的字符，包括开始下标，不包括结束下标
//start:可选，开始截取的下标位置，默认是0
//end:可选，结束截取的下标位置，默认是str.length
var s = str.slice(6,10);
console.log(s); //1978


 //区别
var str = "abcedfg";
console.log(str.substring(5,1)); //bced    自动调整大小顺序
console.log(str.slice(5,1)); //""   不调

console.log(str.substring(3,-1)); //默认负数为0  abc
console.log(str.slice(3,-1)); //截取倒数第几个 edf

var arr = ["[object Object]","[object Array]","[object Function]"];
//循环数组，打印所有具体数据类型 Object Array Funtion
for(var i = 0;i<arr.length;i++){
    console.log(arr[i].slice(8,-1));
}
```

- substr(start,length)

  作用：从那开始，截取几个

  ```js
  var str = "431102197812123333";
  console.log(str.substr(6,4));
  ```

- replace():替换

  作用：替换字符串，一次只能替换一个

  参数：

  - searchVale：将要被替换掉的内容
  - replaceValue：替换的内容

  ~~~js
  //1.str.replace(将要被替换掉的内容,替换的内容)   替换一次只能换一个
  //字符串的方法不会影响到原来的字符串，返回一个操作好的新的字符串
  var str = "ui1116ui1116";
  str = str.replace("ui","web");
  str = str.replace("ui","web");
  console.log(str);
  
  var str = "13144447890";
  str = str.replace(str.substr(3,4),"****");
  console.log(str);
  ~~~

  

