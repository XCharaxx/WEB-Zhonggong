# 						day01

### 第三阶段我们的学习内容

#### ES6 --- 三天

#### NodeJS --- 两到三天

#### Express --- 两到三天

#### Webpack --- 一天

#### MySQL数据库  ---  两天

#### 实战 --- 两天

#### 答辩 + 考试 --- 一天



### 今天的授课内容为

### 1. 严格模式

简介  ：  除了正常模式，ES5添加了一种运行模式，严格模式	

为了避免JS的混杂模式   在JS的第5版本开始出现了严格模式

而定义严格模式  只需要在代码的前面  定义一个字符串  ‘use  strict’

严格模式和普通模式的区别

	1. 严格模式中  定义变量必须使用变量修饰符
	2. 严格模式中不能删除变量
	3. 严格模式中eval函数  有自己独立的作用域
	4. 严格模式中  八进制必须使用0o开头
	5. 不允许使用this返回当前的window

```js
// i = 123;
// console.log(i);
// 定义严格模式
'use strict';
// num = 200;
// 定义变量必须使用变量修饰符
var num = 300;
console.log(num);


// 2.严格模式中不允许删除变量
// console.log(delete num);

// 3.eval函数独立的作用域
eval('var age = 18');
// console.log(age);
console.log(eval('3+2'));

// 4.八进制必须使用0o开头
// console.log(056);
console.log(0o56);

// 5.不能使用this返回window
function fun(){
    return this;
}
console.log(fun());
```



### 2. JSON

​	JSON是什么  他是做什么的

​	JSON是一种传输或者是存储数据的一种工具  和xml效果是差不多的  但是要比他还要小一些  还要快一些

​	我们使用json一般情况下主要是用来作为配置文件进行使用  或者是传输数据  作为前后端数据交互使用

​	为什么要使用json

​	因为JSON独立于语言和平台  在哪里都可以使用的一种方式

​	那么在使用JSON的过程中  我们主要需要使用两个部分

​	1.序列化  ： 将JS中的对象类型转化为JSON类型

​		在JS中将对象转化为JSON  我们使用的函数是JSON.stringify方法

​		内置一个参数  参数是一个对象  要转化的对象

```js
var obj = {
    name : 'Eric',
    age : 18,
    sex : '男'
}

var arr = [
    {name : '齐民要术',page : 1300,price : 35.99,author : '贾思勰'},
    {name : '全球通史',page : 2300,price : 39.44,author : '斯塔夫里阿诺斯'},
    {name : '资治通鉴',page : 1600,price : 36.66,author : '司马光'},
    {name : '史记',page : 900,price : 88.33,author : '司马迁'},
];

console.log(obj);
console.log(typeof obj);
console.log(arr);
console.log(typeof arr);

// 使用JSON.stringify方法进行将对象格式的数据转化为json
var objJson = JSON.stringify(obj);
var arrJson = JSON.stringify(arr);

console.log(objJson);
console.log(typeof objJson);
console.log(arrJson);
console.log(typeof arrJson);

```

​	2.反序列化  ：  将JSON类型转化为JS中的对象类型

​		如果说将JSON转化为对象  那么我们使用JSON.parse方法  内置一个参数  参数是JSON

```js
// 将JSON转化为对象  使用parse方法
var newObj = JSON.parse(objJson);
var newArr = JSON.parse(arrJson);
console.log(newObj);
console.log(newArr);

// 手动在代码中定义JSON
var json1 = '{"name":"Marry","age":19}';
console.log(json1);
console.log(typeof json1);

var obj1 = JSON.parse(json1);
console.log(obj1);
```

### 3.let变量

​	在ES6中  我们还是从变量开始学习  以前在ES5中  我们使用var进行声明变量

​	但是从ES6开始  我们开始使用let进行声明变量

​	我们解析一下let声明变量和var声明变量的区别是什么

​		1.let变量不能重复声明  可以修改变量  但是不能重复定义  前提是在同一作用域下不能重复定义

​		2.let变量是块作用域  只要是在大括号{}中定义的let变量  那么在大括号{}外部就无法进行访问

​		3.let变量不做变量提升

```js
// var num = 200;
// console.log(num);
// let age = 18;
// console.log(age);

// 不能重复定义let变量
var num = 200;
var num = 400;
console.log(num);
let num = 200;
let num = 300;
num = 600;
console.log(num);

// 2.let变量是块作用域  只要是在大括号{}中定义的let变量  那么在大括号{}外部就无法进行访问
// 可能出现大括号的  if  for  switch  while  do...while
// if (true){
//     var username = 'Eric';
//     let password = "123";
//     let blcaklist = '1';
// }
let school = '吉林大学';
{
    var username = 'Eric';
    let password = "123";
    let blcaklist = '1';
    console.log(school);
}

console.log(username);
// console.log(password);


// let变量不做变量提升
console.log(title);
var title = '奥迪';

// console.log(color);  
// let color = 'black';  //报错  不做变量提升

// 暂时性死区
let age = 18;
if (true){
    console.log(age);
    let age = 22;
    // console.log(age);
}
// console.log(age);
```

小案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <button>按钮6</button>
    <button>按钮7</button>
    <button>按钮8</button>
</body>
</html>
<script>
var obtns = document.querySelectorAll('button');
// for (var i = 0; i < obtns.length; i++){
//     obtns[i].aaa = i;
//     obtns[i].onclick = function(){
//         alert(this.aaa + 1);
//     }
// }
for (let i = 0; i < obtns.length; i++){
    obtns[i].onclick = function(){
        alert(i + 1);
    }
}
</script>
```



### 4.const常量

​	常量是一种一经定义就不再改变的量  不能修改  不能删除  也不能重新定义

​	只要定义了  就不再改变  那么  我们一般情况下  定义的时候就要对常量进行赋值

​	他也是块作用域  除了不能修改以外  和let变量的特性几乎完全一致

​	其实严格上来说 常量是可以修改的 但是前提是保证不修改其堆栈空间

```js
const age = 18;
console.log(age);

// 不能重复定义
// const age = 22;

// 不能修改
// age = 33;

// 块作用域
if (true){
    const pi = 3.14;
    // console.log(pi);
}
// console.log(pi);

// 其实严格上来说  常量是可以修改的  但是前提是保证不修改其堆栈空间
const arr = [11,33,55];
console.log(arr);
// arr = 3345;
arr.push(99);
console.log(arr);
```



### 5.模板字符串

​	模板字符串是ES6中新增的一种定义字符串的方式  在ES5中  我们定义字符串有两种方式

​	第一种是单引号的方式进行定义  第二中是使用双引号

​	在ES6中  我们可以使用反引号进行定义字符串  并且提高了字符串的使用方式

​	在使用反引号声明字符串的时候  我们还可以度取出引号中的标识符

​	在读取标识符的时候  我们使用  {$标识符名字}

```js
// let str = `你好  世界`;
// console.log(str);

// 可以度取出我们的标识符  并且  可以随意嵌套单双引号
let obj = {
    name : '大郎兄',
    age : 39,
    brother : '武松',
    wife : '潘女士'
}
// let str = `我们名字叫做${obj.name},我今年${obj.age}岁,我有一个公务员的兄弟叫做${obj.brother},还有一个优秀的老婆叫做${obj.wife}`;
let str = `"我的'名字'"叫做${obj.name},我今年${obj.age}岁,我有一个"公务员"的'兄弟'叫做${obj.brother},还有一个优秀的老婆叫做${obj.wife}`;

console.log(str);
```



小案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            padding: 0px;
            margin: 0px;
        }
        #app{
            width: 770px;
            height: 230px;
            border: 1px solid;
            margin: 100px auto;
        }
        #app div{
            width: 140px;
            height: 230px;
            float: left;
            margin-left: 10px;
        }
        #app div .image{
            width: 140px;
            height:180px;
            margin: 0px;
            margin-top: 5px;
        }
        #app div .image img{
            width: 100%;
            height:100%;
        }
        #app div p{
            text-align: center;
            font-size: 12px;
            line-height: 29px;

        }
    </style>
</head>
<body>
    <div id="app">
        <div>
            <div class="image"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2632091530.jpg" /></div>
            <p>发财日记&nbsp;&nbsp;<span>6.0</span></p>
        </div>
    </div>
</body>
</html>
<script>
let arr = [
    {title : '发财日记',score : 6.0,src : "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2632091530.jpg"},
    {title : '无依之地',score : 8.4,src : "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2628328069.jpg"},
    {title : '反击',score : 5.3,src : "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2631923710.jpg"},
    {title : '无声',score : 7.6,src : "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2619399682.jpg"},
    {title : '夺冠',score : 7.3,src : "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2620083313.jpg"}
];
let str = arr.map(function(item){
    return `<div>
            <div class="image"><img src="${item.src}" /></div>
            <p>${item.title}&nbsp;&nbsp;<span>${item.score}</span></p>
        </div>`;
}).join('');

let app = document.querySelector('#app');
app.innerHTML = str;


</script>
```

总结  ： 模板字符串的好处是  如果说我们字符串涉及到大量的拼接或者说我们字符串中涉及到单双引号互相嵌套问题

我们使用反引号处理该问题教教容易  但是他的速度比较慢

### 6. 解构赋值

解构赋值其实就是将我们对象或者是数组或者是字符串中的数据取出来  一次性都取出来或者是取出局部的几个数据

我使用解构赋值主要的作用就是取出数组或者对象中的数据

解构赋值  就是把数组或者对象中的数据一一取出  赋值给一个或者多个变量

#### 1.数组解构赋值

​	数组解构赋值就是将数组中的数据取出一个或者多个  分别赋值给一个变量或者多个变量

​	数组解构赋值也是按照下标进行的解构赋值  我们使用数组进行解构数组

##### 	1.完全解构

​		数组解构赋值也是分为好几种  如果说将数组中的所有元素全部取出  赋值给对应的变量  那么这就是完全解构

```js
// 数组解构赋值
let arr = [22,44,66,88];
// let a,b,c,d = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// 完全解构
let [a,b,c,d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

##### 	2.缺省情况

​		缺省情况分为两种  第一种缺省情况是变量的数量大于数组元素的数量

​		数组元素的数量大于变量的数量  但是无论是哪种形式  我们都不会出现报错行为

```js
// 缺省情况
let arr = [22,44,66,88];

// let [a,b] = arr;
// console.log(a);
// console.log(b);

let [a,b,c,d,e] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

```

##### 	3.默认值解构

​		在我们解构赋值的过程中  可能会出现  变量的值可能会出现undefined  我们可以在解构之前给变量设定默认值

```js
// 默认值
let arr = [22,44,66,88];
let [a,b,c,d,e = 99] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

```

##### 		4.占位

​	占位就是我们不想定义太多的变量  只想取出数组中的某一个元素

​	那么我们涉及到占位操作  在数组解构赋值中  我们占位符使用的是,

```js
// 占位
let arr = [22,44,66,88];
let [,,num] = arr;
console.log(num);
```

#### 2.字符串的解构赋值

​	字符串解构赋值的方式和数组是一样的  因为字符串也是有序的  可迭代的数据类型

​	所以说字符串的解构赋值  使用的也是中括号  也是按照下标进行解构赋值的

```js
let str = 'YES';

// 完全解构
let [a,b,c] = str;
console.log(a);
console.log(b);
console.log(c);

// 缺省情况
let [d,e] = str;
console.log(d);
console.log(e);

// 默认值
let [f,g,h,i = 'NNN'] = str;
console.log(f);
console.log(g);
console.log(h);
console.log(i);

// 占位
let [,k] = str;
console.log(k);
```

#### 3.对象解构赋值

​	对象解构赋值  也是将对象中的每一个属性值  （值）取出来  赋值给一个或者多个变量  和数组几乎差不多

​	但是有些区别  对象的解构赋值是按照对象进行解构的  数组的解构赋值用数组进行解构

​	所以说对象的解构赋值使用的是大括号{}  但是对象是没有下标的  也没有顺序  但是对象有键名

​	对象使用键名进行解构赋值  不用按照顺序  按照键名

```js
let obj = {
    name : 'Eric',
    age : 18,
    sex : '男'
};
console.log(obj);

// 解构obj对象  我们使用的方式
// 但是解构的时候 键名必须和原对象的键名保持一致
let {name : uname,sex : usex,age : uage} = obj;
console.log(uname);
console.log(uage);
console.log(usex);
```

​	使用更简单的方式进行解构对象  也就是说  我们使用对象简写的方式进行处理问题

```js
let obj = {
    name : 'Eric',
    age : 18,
    sex : '男'
};
console.log(obj);

// 解构obj对象  我们使用的方式
// 但是解构的时候 键名必须和原对象的键名保持一致
// let {name : uname,sex : usex,age : uage} = obj;
// console.log(uname);
// console.log(uage);
// console.log(usex);

// let {name:name,sex:sex,age:age} = obj;
let {name,sex,age} = obj;
console.log(name);
console.log(age);
console.log(sex);
```



#### 4. 对象属性的简写

​	对象属性的简写  当我们对象的属性值是一个标识符的时候  并且对象的属性的名字和对象的属性的值保持一致的时候

​	那么我们可以省略其一

```js
let name = 'Mary';
let age = 19;
let sex = "女";
let school = '中国地质大学';
let address = '河北廊坊';

// let obj = {
//     name : 'Eric',
//     age : 18,
//     sex : '男',
//     school : school,
//     address : address
// };

// let obj = {
//     name : 'Eric',
//     age : 18,
//     sex : '男',
//     school,
//     address
// };

let obj = {name,age,sex,school,address};
console.log(obj);
```

​	对象方法也是可以进行简写的

​	方法的简写其实就是将方法中的function去掉  不用再写function

```js
// 方法的简写
// let newObj = {
//     name,
//     age,
//     say : function(){
//         console.log(this.name + '在说话');
//     }
// }
let newObj = {
    name,
    age,
    say(){
        console.log(this.name + '在说话');
    }
}


console.log(newObj);
newObj.say();
```



#### 5. 函数参数解构赋值

​	在函数传递参数的时候  我们很多时候可能都会传递一个数组或者是对象

​	所以说  如果我们想使用对象或者数组中的数据内容  那么我们可以先将数组或者对象中的数据进行解构

```js
// 如果函数参数是数组的时候
function fun1([a,b,c] = array){
    console.log(a);
    console.log(b);
    console.log(c);
}

let arr = [11,33,66];
fun1(arr);

// 如果说函数参数是对象的时候
// function fun2({name,age,sex} = object){
//     // console.log(object);
//     console.log(name);
//     console.log(age);
//     console.log(sex);
// }

// let obj = {name:'Eric',age:18,sex:'男'};
// fun2(obj);

function fun({name,age,sex} = {name:'Eric',age:18,sex:'男'}){
    console.log(name);
    console.log(age);
    console.log(sex);
}

fun();
let obj = {name:'Mary',age:22,sex:'女'};
fun(obj)

// let aa = {name:'Eric',age:18,sex:'男'};
// let {uname = '潘金莲',uage = 22,usex = '女'} = aa;
// console.log(uname);
// console.log(uage);
// console.log(usex);

```



**对象解构赋值和数组解构赋值的区别是什么**

​	**对象解构赋值使用对象  也就是说使用大括号**

​	**数组解构赋值使用数组  也就是说使用中括号**

​	**因为对象是无序的  不可迭代  所以说对象解构赋值不需要按照顺序  但是一定要按照下标的名字**

​	**数组解构赋值  没有键名  名字都是自定义的  但是按照顺序进行解构**

















