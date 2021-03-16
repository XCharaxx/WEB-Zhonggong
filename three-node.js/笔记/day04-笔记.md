# 						day04

## 1.回顾一下昨天的授课内容

### 1.promise

​	它主要的作用是将异步操作变成同步操作  ES6中的异步问题解决方案之一  他是一个构造函数

​	他有三种状态  初始化状态  成功状态  失败状态

​	定义好promise之后  我们使用promise对象中的then方法进行调用

​	使用catch方法进行处理异常

​	链式操作  前一个成功状态函数的返回值作为新的promise的resolve状态

​	all方法  ：  执行所有的promise

​	race方法  ：  执行最快的Promise

### 2.async...await

​	他是真正意义上的解决异步问题之一   使用async定义函数  他是promise和generator的语法糖

​	async定义的函数返回值是一个Promise  async函数中有await  而await只能存在在async修饰的函数中

​	它主要的作用  阻塞程序  当程序触碰到await的时候  程序陷入阻塞状态  直到执行完毕await后面的表达式

​	和yield比较相似  但是不同的是  下一个yield需要next方法进行调用  但是await是自动执行的

​	await可以直接获取promise中的成功状态  失败状态

### 3.面向对象

​	面向对象的概念  实现的就是封装代码

​	面向对象的三大特性  封装  继承  多态

​	定义对象使用class  继承使用extends   构造器使用constructor  继承构造器使用super

​	静态使用static  实例化使用new



###########################################################################

## 2.模块

### 1.概念

​	模块其实就是一个JS文件  暂时我们这样理解  也就是说  我们之前看到的jquery  他就是一个模块

​	在ES5中  我们引入和使用模块需要在html中进行使用  JS文件是不能单独运行的  现在也不能

​	我们之前在html中使用模块的时候  使用script标签中的src属性   其实这个属性特别不好

​	使用的方式不是特别安全

​	在ES6中  我们使用的是新的模块操作  使用的时候  我们可以使用import进行引入

​	我们可以在JS中引入JS

​	以前  我们一个JS想使用另一个JS文件  那么必须在html中产生依赖

​	现在  我们可以在一个JS中引入另一个  也可以在html中进行引入

​	除了引入之外还有暴露  保证数据的安全性

​	如果说使用这种模块机制  必须满足两个条件

​	1.必须在服务器中运行

​	2.如果在html中  那么script标签中必须加上type=‘module’

### 2.export

​	使用export进行暴露数据

​	一个模块就是一个独立的 js文件   该模块中的所有变量 外部无法获取

​	如果外部希望可以读取模块中的内容  export 关键字  暴露 export 

​	如果不暴露  那么html中不能引入

```js
var username = 'Eric';
var age = 18;
var obj = {username,age};
var arr = [1,2,3];
var fun = ()=>{
    console.log('这是函数');
}

export {
    obj,arr,fun
}
```

### 3.import 

​	使用import进行引入数据

​	使用export命令定义了模块的对外接口  其他的文件

​	就可以使用import这个命令去加载这个模块

```html
<script type="module">
import {obj,fun,username} from "./1.js";

console.log(obj);
console.log(username);

</script>
```



## 3.函数的扩展

### 1.字符串扩展

​	includes  ：  是否包含字符串

​	startsWith  ：  是否以某个字符开头

​	endsWith  ：  是否以某个字符结尾

​	repeat  ：  重复字符串指定的次数

```js
let str = 'http://www.ujiuye.com/index.html';

// 字符串的扩展
// includes  : 检测是否包含字符或者字符串
// 返回值是布尔值
console.log(str.includes('h'));
console.log(str.includes('u'));
console.log(str.includes('a'));
console.log(str.includes('ujiuye'));


// 重复字符串
// repeat  ：  重复字符串  内置一个参数  参数是重复的次数
let string = '*'
console.log(string.repeat(50));
console.log(string.repeat(5));


// startsWith  ：  检测字符串是否以某个字符或者字符串开头
console.log(str.startsWith('h'));
console.log(str.startsWith('s'));
console.log(str.startsWith('http'));
console.log(str.startsWith('https'));
console.log(string.repeat(50));


// endsWith  :  检测字符串是否以某个字符或者字符串结尾
console.log(str.endsWith('.html'));
console.log(str.endsWith('.htm'));
console.log(str.endsWith('.jpg'));
```



### 2.数值扩展

​	Number.isFinite  ：  判断是否是有限大

​	Number.MAX_VALUE  ：  数字最大值

​	Number.isInteger  ：  判断是否是整数

​	Number.parseInt  ：   将字符串转换为整型

​	Math.trunc  ：  向下取整

```js
// 数组的扩展
// JS中的数字的最大值
// console.log(99999999999999**9);
console.log(Number.MAX_VALUE);
console.log(1.7976931348623157e+309);  // Infinity 无穷大
console.log('*'.repeat(50));

// Number.isFinite 判断数组是否有限大
console.log(Number.isFinite(99999999));
console.log(Number.isFinite(1.7976931348623157e+309));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(9999**99));
console.log('*'.repeat(50));

// isInteger  :  判断数字是否是整数
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.1));
console.log(Number.isInteger(5.0));
console.log(5.0);
console.log(Number.isInteger(5.));
console.log(Number.isInteger(5.0000000000000001));
console.log(5.000000000000001);
console.log('*'.repeat(50));

// Number.parseInt  :  强制转化为整形
console.log(Number.parseInt('1.2'));
console.log(Number.parseInt('a1.2'));
console.log(Number.parseInt('1q2.2'));
console.log(Number.parseInt('12.2'));
console.log(Number.parseFloat('1.2'));
console.log(Number.parseFloat('a1.2'));
console.log(Number.parseFloat('1q2.2'));
console.log(Number.parseFloat('12.2a1'));
console.log('*'.repeat(50));

// trunc  ： 向下取整
console.log(Math.trunc(3.1));
console.log(Math.trunc(3.9));
console.log(Math.trunc(3.9999999999999999));
```



### 3.数组扩展

​	Array.from  ：  将伪数组对象或者可遍历的对象 转换成真数组

​	Array.of  ：  将一系列的值转换为数组

​	find  ：  找出第一个满足条件的元素

​	findIndex  ：  找出第一个满足条件元素的索引

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
// 数组的扩展
// of  ：  将一组数据组成一个数组  其实就是创建数组
// 内置参数若干  每一个参数  最后都是数组的元素
let arr = Array.of(22,44,66,88,99,33);
console.log(arr);
console.log(Object.prototype.toString.call(arr));


// from  :  将伪数组转化为真数组
let oBtns = document.getElementsByTagName('button');
let oBtn = document.querySelectorAll('button');
// console.log(Object.prototype.toString.call(oBtn));
console.log(Object.prototype.toString.call(oBtns));
// 将伪数组转化为真数组
let oBtnsArr = Array.from(oBtns);
console.log(Object.prototype.toString.call(oBtnsArr));
oBtnsArr.forEach(element=>console.log(element));
oBtn.forEach(element=>console.log(element));


// find  ：  查找数组中第一个符合条件的元素  和filter比较相似
// filter的返回值是数组  即使没有符合条件的  返回的也是空数组
// find返回的是一个数组元素  只返回一个  如果说没有符合条件的  返回undefined
let result1 = arr.filter(element=>element%3==0);
console.log(result1);
let result2 = arr.find(element=>element%3==0);
console.log(result2);


// findIndex  ：  查找数组中第一个符合条件的元素的下标  如果说数组元素不存在  那么返回-1
// 传参方式和find相同
let index = arr.findIndex(element=>element%7==0);
console.log(index);
</script>
```



### 4.对象扩展

​	Object.is  ：  判断v1,v2数据是否完全相等

​	Object.assign  ：  将源对象source的属性复制到新的目标target对象上

​	Object.keys  :  取出对象中所有的键  作为一个数组

​	Object.valuess  :  取出对象中所有的值  作为一个数组

​	Object.create  :  以一个对象为原型创建另一个对象

​	Object.defineProperties  :  给对象添加属性

```js
// 对象扩展
// Object.is  ：  判断v1, v2数据是否完全相等
// 只要是对象类型的数据  两个对象就不可能完全相等  除非是拷贝
let arr1 = [1,2,3];
let arr2 = [1,2,3];
console.log(Object.is(arr1,arr2));
let str1 = '123';
let str2 = '123';
console.log(Object.is(str1,str2));
console.log(arr1 == arr2);
console.log(str1 == str2);


// Object.assign  ：  将源对象source的属性复制到新的目标target对象上
let obj = {name : 'Eric',age : 18};
let newObj = {sex : '男'};
Object.assign(newObj,obj);
console.log(newObj);


// Object.keys  : 取出对象中所有的键  作为一个数组
let keys = Object.keys(obj);
console.log(keys);


// Object.valuess  : 取出对象中所有的值  作为一个数组
let values = Object.values(obj);
console.log(values);


// Object.create  : 以一个对象为原型创建另一个对象
// 实质上就是实现了对象的继承
// 内置两个参数  第一个参数是原型对象  object
// 第二个参数是描述  是一个对象
    // 对象中的键是添加的属性名字  键名  对象的值还是一个对象
        // 对象中有4个属性
            // value  :  属性值
            // writable  ：  属性是否可写  是否可以修改  默认为false
            // configurable  :  是否可删除  默认为false
            // enumerable : 是否可枚举  其实就是遍历  默认为false
let object = {name : 'Eric',age : 18,sex : '男'}
let newObject = Object.create(object,{
    address : {
        value : '吉林长春',
        writable : true,
        configurable : true,
        enumerable : true
    },
    school : {
        value : '吉林大学',
        writable : false,
        configurable : false,
        enumerable : false
    }
})

console.log(newObject);
console.log(newObject.name);

// 修改对象属性
newObject.address = '河北廊坊';
newObject.school = '北京大学';
console.log(newObject);

// 删除对象属性
// delete newObject.address;
// delete newObject.school;
// console.log(newObject);

// 遍历对象
for (let key in newObject){
    console.log(newObject[key]);
}


// Object.defineProperties  : 给对象添加属性

let obj = {
    firstName : '大郎',
    lastName : '武'
};

// 内置两个参数  第一个参数是原型对象  第二个参数是描述 描述是一个对象
// 对象中的键是新增的属性的名字  也就是键名
// 对象中的值还是一个对象
    // 对象中有两个方法  是魔术方法【不需要手动调用 在满足条件的情况下  自动调用】
    // get  ：  名字固定  在我们获取新增属性的时候  会被自动调用
    // set  ：  名字固定  在我们改变  设置新增属性的时候  会被自动调用
        // set方法可以接受一个参数  参数是我们修改的内容  自动传参


Object.defineProperties(obj,{
    fillName : {
        get(){
            // console.log('调用了fillname属性');
            return this.lastName + this.firstName;
        },
        set(name){
            // console.log('你在试图改变fillname' + name);
            this.lastName = name.slice(0,1);
            // console.log(this.lastName);
            this.firstName = name.slice(1);
        }
    }
});

console.log(obj.lastName);
console.log(obj.firstName);
// obj.fillName;
console.log(obj.fillName);

// obj.fillName = '武松';
obj.fillName = '关羽';
console.log(obj.fillName);
```



## 4.深度克隆

​	克隆其实就是拷贝  就是复制  这是主要是针对引用数据类型来说的  也就是说在底层存储的时候  使用堆栈存储的

​	我们主要针对的对象是  数组  对象  因为只有他们才是引用类型  堆栈空间存储

​	拷贝涉及到两种拷贝

### 1.浅拷贝

​	浅拷贝指的是  我们在拷贝被对象的时候  只是拷贝对象的地址  不是拷贝存储

​	等同于给一个人去两个名字  那么当一个发生改变的时候  另一个也会收到影响

```js
// 浅拷贝
let obj = {name : 'Eric','age' : 18,sex : '男',arr : [33,66,99],friend : {name : 'MM',age : 17}};
// let arr = [22,44,66,88];
let data = [
    // 22,44,66,88,
    {name : 'Eric','age' : 18,sex : '男'},
    {name : 'Mary','age' : 16,sex : '女'},
    [22,44,66,88]
];

// 对对象进行浅拷贝
// let newObj = obj;
// console.log(obj);
// console.log(newObj);

// newObj.school = '吉林大学';
// console.log(obj);
// console.log(newObj);

// 浅拷贝模式之...
// let newArr = [...arr];
// console.log(arr);
// console.log(newArr);
// newArr.push(99);
// console.log(arr);
// console.log(newArr);
// let newData = [...data];
// console.log(data);
// console.log(newData);
// newData[4].school = '吉林大学';
// console.log(data);
// console.log(newData);

// 浅拷贝之JSON
// let str = JSON.stringify(data);
// let newData = JSON.parse(str);
// console.log(data);
// console.log(newData);
// newData.push({name : 'Jack','age' : 22,sex : '男'});
// console.log(data);
// console.log(newData);
// newData[2].push(99);
// console.log(data);
// console.log(newData);
// newData[0].school = '吉林大学';
// console.log(data);
// console.log(newData);

// let str = JSON.stringify(obj);
// let newObj = JSON.parse(str);
// console.log(obj);
// console.log(newObj);
// newObj.arr.push(88);
// console.log(obj);
// console.log(newObj);
// obj.friend.sex = '女';
// console.log(obj);
// console.log(newObj);
```



### 2.深拷贝

​	深拷贝是将地址和内存都进行拷贝  之前的对象不会影响到之后的对象

```js
// 深拷贝
let obj = {name : 'Eric','age' : 18,sex : '男'};  // [object Object]
let arr = [33,66,99];  // [object Array]
let data = [
    {name : '知行合一',author : '王阳明',price : 99,arr : [22,66,88]},
    {name : '齐民要术',author : '贾思勰',price : 99},
    {name : '史记',author : '司马迁',price : 99},
    {name : '资治通鉴',author : '司马光',price : 99},
    {name : '伤寒杂病论',author : '张仲景',price : 99},
    {name : '本草纲目',author : '李时珍',price : 99},
]

// let result = [];
// for (let i in arr){
//     result[i] = arr[i];
// }
// console.log(result);
// let result = {};
// for(let key in obj){
//     result[key] = obj[key];
// }
// console.log(result);


// 定义一个函数
// 需要一个参数  参数是拷贝的对象
function deepCopy(object){
    // 先判断我们拷贝的对象的具体数据类型  是数组还是对象
    // 如果是数组  我们创建空数组   如果是对象  我们创建空对象
    let result;
    if (Object.prototype.toString.call(object) == '[object Object]'){
        result = {};
    }else if (Object.prototype.toString.call(object) == '[object Array]'){
        result = [];
    }else{
        return object;
    }
    // 进行对象的拷贝
    for (let key in object){
        // console.log(typeof object[key]);
        if (typeof object[key] == 'object'){
            result[key] = deepCopy(object[key]);
        }else{
            result[key] = object[key];
        }
        // result[key] = object[key];
    }

    return result;
}

let newData = deepCopy(data);
console.log(data);
console.log(newData);
data.name = '1232132';
console.log(data);
console.log(newData);
data[0].page = 300;
console.log(data);
console.log(newData);

console.log(data[0].arr.push(365));
console.log(data[0].arr);
console.log(newData[0].arr);
```



## 5.Node

### 1.Node简介

​	略

### 2.Node暗转

​	官方网站

​		https://nodejs.org/zh-cn
​		https://nodejs.org/en
​		https://nodejs.cn

### 3.环境变量

​	当在DOC中运行Node命令的时候  显示不是内部或者外部命令  那么就是环境变量没有安装

​	如果说不再Node程序目录下  不能使用  

​	那么我们在执行Node命令的时候  需要在前面协商Node路径

​	但是这样写非常麻烦  我们可以把他装到变量中   window的环境变量

​	node = D:/Node/node

​	打开我的电脑  =>  点击右键   =>  属性  =>  高级选项配置  =>  环境变量  =>  系统变量  =>  path  =>  新建  

​	如果说win7不用新建  只讲使用;  把Node路径添加到后面就可以

### 4.DOC命令

​	doc命令是windwo系统命令

​	cd  ：  切换路径   ./   ../   /

​	mkdir  ：  创建文件夹

​	rmdir  ：  删除文件夹   /s  强制删除   /q  静默删除

​	dir  ：  查看当前目录

​	dir.>  ：  创建文件

​	del  ：  删除文件

​	clear  ：  清屏













