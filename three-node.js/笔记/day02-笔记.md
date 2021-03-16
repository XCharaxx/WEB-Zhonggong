# 						day02

## 回顾下昨天的授课内容

### 1. 严格模式

​	在JS中八进制需要使用0o开头

​	在严格模式中 返回值不能指向window

​	eval函数有自己独立的作用域

​	严格模式中不能删除变量

​	严格模式中定义变量必须使用变量修饰符

### 2. JSON

​	JSON有两个作用  第一个作用是配置文件  第二个作用是传输数据做数据交互

​	我们主要学习JSON的是两个函数

​	序列化函数   JSON.stringify  内置一个参数 参数是对象  他是将对象转化为json

​	反序列化函数  JSON.parse  内置一个参数  参数是一个JSON  他是将JSON转化为对象

### 3. let变量和const常量

​	let 变量和 var变量之间的区别

​		let变量在同一作用域下不能重复定义

​		let变量是块作用域   在{}内部定义的变量  在外部无法使用

​		let变量不做变量提升  暂时性死区

### 4. 模板字符串

​	使用反引号定义的字符串  我们在字符串中可以解析标识符  使用${标识符}

​	避免字符串的单双引号进行嵌套  因为引号在模板字符串中只是一个普通字符

### 5. 解构赋值

​	将数组或者对象中等可迭代数据类型中的元素一一取出  赋值给一个或者多个变量

​	数组解构赋值

​		完全解构

​		不完全解构

​		默认值解构

​		占位解构

​	字符串解构赋值

​		和数组一样

​	对象解构赋值

​	函数参数解构赋值

### 6. 对象的简写

​	当对象中元素的值是标识符的时候  并且键值和键名保持一致的时候  我们可以省略其一

​	方法的简写  直接写方法名后面直接跟上形参列表



## 今天的授课内容为

### 1. 箭头函数

​	箭头函数是ES6中新增的一种函数的语法解构  这种语法解构相对来说比较简单

​	箭头函数主要的特点是  简单  灵活

​	箭头函数和常规函数之间还是有那么一点区别的

#### 		1.箭头函数只能定义匿名函数

```js
/*
函数的结构
function  ：  声明函数  必须有
函数名  ：  可选  命名方式和变量一样
形参列表  ：  可选  有没有参数都可以  根据需求
函数体  ：  必须  函数的执行过程
返回值  ：  可选  但是每一个函数都会有返回值  即使你不定义  他也有  默认是undefined
调用  ：  函数名必选   实参列表和形参列表保持一致

function [fn]([params list]){
    // 函数体
    console.log('你好  世界');
}

箭头函数  函数解构
()  :  形参列表
=>  ：  箭头  语法结构
{}  ：  函数体
并且箭头函数在一定的规则下还可以省略一些内容


*/
// function fn(){
//     console.log('你好  世界');
// }

// fn()

let f = ()=>{
    console.log('这是我定义的第一个箭头函数');
}
f();

```

#### 		2.箭头函数没有原型对象

```js
// 不能使用箭头函数定义构造
function Person(name,age){
    this.name = name;
    this.age = age;
}

let p = new Person('Eric',18);
console.log(p);

// 箭头函数是不能定义的
let Car = (name,color)=>{
    this.name = name;
    this.color = color;
}

let c = new Car('Aodi','black');

```

#### 		3.箭头函数特殊情况

##### 			1.只有一个参数

##### 			2.函数体只有一句话

##### 			3.返回值是一个对象

```js
// 定义箭头函数箭头函数只有一个参数的时候  可以省略小括号
// let fn1 = ()=>{
//     console.log(123);
// }
// let fn1 = (num)=>{
//     console.log(100 + num);
// }
let fn1 = num=>{
    console.log(100 + num);
}
// let fun2 = a,b=>{
//     console.log(a+b);
// }
fn1(200);

// 箭头函数中  函数体只有一句话的时候  可以省略大括号
// let fun2 = ()=>{
//     console.log('这是只有一句话的时候');
// }
let fun2 = ()=>console.log('这是只有一句话的时候')
fun2();

// 当我们省略大括号  函数体只有一句话  并且这句话是返回值的时候  那么我们必须省略return
// let fun3 = ()=>{
//     return '你好  北京';
// }
let fun3 = ()=>'你好 北京';
console.log(fun3());

// 当返回值是一个对象的时候  省略大括号会出现问题
// let fun4 = ()=>{
//     return {
//         name : 'Eric',
//         age : 18,
//         sex : '男'
//     }
// }
// 因为函数和对象都有大括号  此时程序无法分辨大括号究竟是函数的还是对象的
// 我们处理的方式是  把我们返回的对象  用小括号包裹  代表是一个整体
// let fun4 = ()=>{name : 'Eric',age : 18,sex : '男'}
let fun4 = ()=>({name : 'Eric',age : 18,sex : '男'});
console.log(fun4());
```

#### 		4.箭头函数不能使用arguments

```js
// 箭头函数中没有arguments
function fun1(){
    console.log(arguments);
    console.log(arguments.length);
}
fun1(1,2,3,4,5,6,7,8);

// 箭头函数中  没有arguments
let fun2 = ()=>{
    console.log(arguments);
    console.log(arguments.length);
}
fun2();
```

#### 		5,箭头函数没有自己的this

```js
// 箭头函数中没有自己的this
let obj1 = {
    name : '大哥',
    say : function(){
        // console.log(this);
        console.log('我是' + this.name);
    }
}
obj1.say();

// 箭头函数的this
let obj2 = {
    name : '大爷',
    say : function(){
        return {
            name : '二大爷',
            say : ()=>{
                console.log('我是' + this.name);
            }
        }
    }
}

// obj2.say();
obj2.say().say();
```



### 2. ...扩展运算符（rest）

​	扩展运算符就是三个点   但是他有好多作用  扩展运算符使用最多的还是剩余参数  和arguments比较相似

​	使用的时候要在标识符之前加上...  但是标识符的名字是自定义的

#### 	1.解开拷贝数组或者对象

```js
let arr = [22,44,66,55,88,99];
let obj = {
    name : 'Eric',
    age : 18,
    sex : '男'
};
let str = 'YES';

// 我们解开数组或者对象的方式  只需要在我们的数组或者对象前面加上...

console.log(...arr);
console.log(...str);
// console.log(...obj);


// 进行浅拷贝对象或者是数组

let newArr = [...arr];
console.log(arr);
console.log(newArr);

// 进行浅拷贝对象
let newObj = {
    ...obj
}
console.log(obj);
console.log(newObj);

let arr1 = [1,7,3,0,1,0,7,9,2,0,1];
let set = new Set(arr1);
// console.log(set);
let arr2 = [...set];
console.log(arr2);
```

#### 	2.作为剩余参数使用

​		剩余参数其实就是传递不定参数  和arguments是一样的  但是有一些区别  在箭头函数中  没有arguments

​		但是我们可以使用rest剩余参数  使用的时候需要在形参列表中有所显示  并且形参前面加上... 参数名自定义

```js
// 默认值传参
// let sum = (a,b = 0,c = 0,d = 0)=>{
//     return a+b+c+d;
// }
// console.log(sum(1,2,3,4));
// console.log(sum(1,2));

// 我们使用剩余参数  进行处理
let sum = (...value)=>{
    // console.log(value);
    // console.log(Object.prototype.toString.call(value));
    // 这是一个容器
    let result = 0;
    // 遍历数组  将其相加
    for (let i = 0; i < value.length;i++){
        result += value[i]
    };
    return result

}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

// 如果说我们使用rest不定参数  我们还可以和普通参数一起传递  但是rest参数必须放在最后
// let total = (a,b,...item)=>{
//     console.log(a);
//     console.log(b);
//     console.log(item);
// }

total(1,2,3,4,5,6,7,8,9);
```

​		rest和arguments之间的区别

​			1.arguments不能在箭头函数中使用  但是rest可以

​			2.arguments使用的时候 不能在形参列表中有所显示  但是rest可以

​			3.arguments参数不能和普通参数一起传递  只能单独传递  但是rest可以和普通参数一起传递  但是必须放在最后

### 3. Symbol类型

​	这个是ES6新增的数据类型  JS中的第七个数据类型  它主要的作用是保证数据的唯一性

​	尤其是对象的属性的名字  一旦冲突  那么必然会使对象的属性被覆盖

​	使用Symbol可以保证键名的唯一性  即使同时创建的两个Symbol  那么也不会相等

​	在使用Symbol的时候  我们可以传递一个参数  参数作为Symbol的标识

​	但是注意  即使是相同的两个Symbol  传递相同的参数   那么他们也不会相等

```js
// let obj = {
//     name : 'Eric',
//     age : 18,
//     sex : '女',
//     sex : '男'
// }
// console.log(obj);

// 两个Symbol不相等
let symbol1 = Symbol();
console.log(symbol1);
console.log(typeof symbol1);

let symbol2 = Symbol();
console.log(symbol2);
console.log(typeof symbol2);
console.log(symbol1 == symbol2);

// 传递参数作为标识
let name = Symbol('姓名');
let username = Symbol('姓名');
let age = Symbol('年龄');
console.log(name);
console.log(username);
console.log(age);
console.log(name == username);

// Symbol类型不能和其他数据类型进行运算
// console.log(name + 123);
// console.log(name + 12.3);
console.log(name + '123');
```

​	应用Symbol

```js
let name = Symbol('姓名');
let age = Symbol('年龄');
let rename = Symbol('新名');

// 使用Symbol
// let obj = {
//     name : 'Eric',
//     age : 18,
//     rename : '康柏松'
// };
// console.log(obj);

// 如果使用外部的变量作为对象中的键  那么我们可以使用中括号的方式
let obj = {
    [name] : 'Mary',
    [age] : 19,
    [rename] : '小张'
}

console.log(obj);
console.log(obj[name]);

// 第二种方法  追加对象元素
let address = Symbol('地址');
obj[address] = '吉林长春';
console.log(obj);

// 第三种方法  可以通过对象中的方法向对象中追加一个属性
let school = Symbol('学校');
Object.defineProperty(obj,school,{
    value : '吉林大学'
});
console.log(obj);
```



### 4. 集合数据结构

​	其实在ES6中给我们增添不少新的集合   比如说  set集合  map集合  这两种集合都有各自的特性  和数组一样

​	也都有自己的方法  

#### 	1. set

​		set集合是一种无序的  不重复的集合  它本身自带去重功能  set中不可能出现重复的元素

​		我们使用set的时候  需要new一个set对象  可以内置一个参数  参数是数组  也可以传递参数  后期追加元素

​		内置的方法

​			add  ：  添加一个集合元素

​			delete  ：  删除一个集合元素

​			has  ：  查看集合中是否存在某个元素

​			clear  ：  清空集合

​			size属性  ：  这个不是方法  是属性  类似于数组中的length  查看集合的长度

```js
// 使用set  需要new Set  内置一个参数  可选
// 返回值是一个set集合
let arr = [1,7,3,0,1,0,7,9,2,0,1];
let set = new Set(arr);
let set1 = new Set();

console.log(set);
console.log(set1);

// 去重数组
// console.log(...set);
// let newArr = [...set];

// set集合中对应的方法
// add  添加集合元素
set.add('Eric');
console.log(set);
console.log(set[1]);

// 查看set集合中的具体个数
console.log(set.size);

// 删除一个集合元素
set.delete(9);
console.log(set);

// 查看set元素是否存在
console.log(set.has(9));
console.log(set.has(8));
console.log(set.has(3));
console.log(set.has('Eric'));

// 清空set集合
set.clear();
console.log(set);
```



#### 	2. map

​		map集合也是一个无序的不重复的集合  但是和set不一样  set的集合解构类似与数组

​		但是  map的集合解构类似与对象  他是由一组组键值对组成的  他的不重复指的是键不重复  不包括值

​		使用的时候也是需要new一下  也可以传递一个参数  参数还是数组  但是这个数组和之前的数组不一样

​		如果说传递了这个参数  数组需要是一个二维数组   每一个数组元素都是一个子数组

​		每一个子数组中有两个值  第一个是键  第二个是值

​	内置方法

​		set  ：  添加一个集合元素  内置两个参数  第一个是键  第二个是值

​		delete  ：  删除一个集合元素

​		has  ：  查看集合中是否存在某个元素

​		clear  ：  清空集合

​		get  ：  取出一个集合元素

​		size属性  ：  这个不是方法  是属性  类似于数组中的length  查看集合的长度

```js
// map集合
let arr = [
    ['name','Eric'],
    ['rename','Eric'],
    ['age',18],
    ['sex','女'],
    ['sex','男']
];
// console.log(arr);
// 创建集合
let map = new Map(arr);
let newMap = new Map();
console.log(map);
console.log(newMap);

// map集合中的内置方法
// set  添加集合元素
map.set('address','吉林长春');
console.log(map);

// delete删除集合元素
map.delete('sex');
console.log(map);

// has查看是否存在某个集合元素
console.log(map.has('sex'));
console.log(map.has('address'));

// 查看集合的长度
console.log(map.size);

// 获取集合元素
console.log(map.get('name'));
console.log(map.get('age'));

// 清空集合
map.clear();
console.log(map);
```



### 5. iterator迭代器

​	简介

​		iterator 是一种接口机制  为不同的数据结构提供统一的访问机制

​		不同的数据结构包括  数组  字符串  set集合  map集合这些可迭代的数据类型

​		但是  不包括对象

​	作用

​		为不同的数据结构提供统一的访问机制   使得数据结构成员能够按照某种次序排序

​		ES6提供了一个新的遍历办法  for of Iterator主要是提供for of使用

​	原理

​		创造一个指针 指向数据结构的起始位置  第一次调用next() 指针自动指向数据结构的第一个成员

​		接下来不断的调用next() 指针一直往后移动 直到指向最后一个成员

​		每次调用next的时候 返回的值包括一个value done

​		原生具备iterator接口的数据（可以用for of遍历）

​		如果说调用next方法  指针指向某一个元素的时候  那么返回的对象是{value ： 值  ， done ： false}

​		如果说  指针已经到达最后一个元素 再向下指向的时候  我们会指向一个空

​		返回的是 {value ： undefined ， done ：true}

自定义迭代数组

```js
// 编辑iterator工作原理

// 定义一个数组  一会迭代这个数组
let arr = [11,33,55,99];

// 定义一个iterator方法  用来迭代数据结构
function myIter(array){
    // 定义一个数组指针
    let index = 0;
    return {
        next : function(){
            // return 'iter是返回的对象  next方法是iter中的方法';
            // 判断迭代数据解构的长度是否大于数组指针
            if (array.length > index){
                // 成功指向返回的数据
                return {value : array[index++],done : false};
            }else{
                // 失败的时候  返回的数据
                return {value : undefined,done : true};
            }
        }
    };
}

// 调用方法  准备迭代
let iter = myIter(arr);
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
```

iterator的使用

```js
// 我们使用iterator的时候  没有这么麻烦  只需要使用一种方法就可以
// 使用[Symbol.iterator]()方法  进行迭代数据结构

// 使用iterator迭代数组
let arr = [66,88,99,88,66];
let arrIter = arr[Symbol.iterator]();
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());

// iterator迭代字符串
let str = 'YES';
let strIter = str[Symbol.iterator]();
console.log(strIter.next());
console.log(strIter.next());
console.log(strIter.next());
console.log(strIter.next());

// iterator迭代set集合
let set = new Set(arr)
// console.log(set);
let setIter = set[Symbol.iterator]();
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());

// iterator迭代map集合
let map = new Map([['name','Eric'],['age',18]]);
console.log(map);
let mapIter = map[Symbol.iterator]();
console.log(mapIter.next());
console.log(mapIter.next());
console.log(mapIter.next());

// 但是注意  iterator不能迭代对象
let obj = {
    name : 'Eric',
    age : 18
};
let objIter = obj[Symbol.iterator]();

```

但是我们在正常的使用中  不需要这么麻烦  因为iterator有一个语法糖

for of  就是iterator的语法糖  我们以后可以使用for  of迭代各种数据类型   但是唯独不能迭代对象

for  of  几乎可以迭代所有的数据类型  但是唯独不能对象

```js
// 使用for...of迭代数组
let arr = [66,88,99,88,66];
for (let value of arr){
    console.log(value);
}

// 使用for...of迭代字符串
let str = 'YES';
for (let value of str){
    console.log(value);
}

// 大多数情况下  我们使用for...of  迭代set或者map
// 使用for...of迭代set集合
let set = new Set(arr);
for (let value of set){
    console.log(value);
}

// 使用for...of迭代map集合
let map = new Map([['name','Eric'],['age',18]]);
for (let value of map){
    console.log(value);
}

// 不能迭代对象
// let obj = {
//     name : 'Eric',
//     age : 18
// };
// for (let value of obj){
//     console.log(value);
// }
```

**总结一下  for...of   for...in  和forEach之间的区别**

​	for...of  可迭代一切iterator可迭代的数据类型  他是iterator的语法糖  数组  字符串  set  map

​	for...in  唯一一个可以迭代对象的语法

​	forEack他是一个方法  不是一个语句  他是数组的方法  只能遍历数组



iterator迭代对象  自己封装

```js
let obj = {
    name : 'Eric',
    age : 18,
    sex : '男'
};

// 迭代对象
obj[Symbol.iterator] = function(){
    // 定义一个数组指针
    let index = 0;
    // 取出当前对象中的所有的键名  组成一个数组
    let keys = Object.keys(this);
    return {
        next : ()=>{
            if (keys.length > index){
                return {value : this[keys[index++]],done : false};
            }else{
                return {value : undefined,done : true};
            }
        }
    }
}

let objIter = obj[Symbol.iterator]();
console.log(objIter.next());
console.log(objIter.next());
console.log(objIter.next());
console.log(objIter.next());

// 取出对象中所有的键
// console.log(Object.keys(obj));
// 取出对象中所有的值
// console.log(Object.values(obj));
```

