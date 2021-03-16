# 						day03

## 1.回顾一下昨天的授课内容

### 1.扩展运算符

#### 	1.解开数据解构

#### 	2.浅拷贝

#### 	3.剩余参数

#### 	4.函数的默认传参

### 2.Symbol

#### 	1.特点

​		ES6的新的数据类型  它主要的作用是保证数据的唯一性

#### 	2.注意

​		两个Symbol不可能相等  即使是传递了相同的参数  也不能相等

​		Symbol不能和其他数据类型进行运算

### 3.集合

#### 	1.set集合

​		是一个无序的不重复的集合  结构类似与数组  使用的时候需要实例化

​		内置的方法  add  delete  has  size属性  clear

#### 	2.map集合

​		是一个无序的不重复的集合  结构类似与对象  使用的时候需要实例化

​		内置的方法  set  delete  get  has  size属性  clear

### 4.iterator

#### 	1.概念

​		他是为了所有的可迭代的数据类型添加的一个接口访问机制  也就是说  他是可以迭代数据类型的

​		迭代数组  字符串  set集合  map集合  不能迭代对象

#### 	2.使用

​		使用方法[Symbol.iterator]

​		但是如果说为了更方便的使用  我们可以使用语法糖

​		for...of  迭代语句

​		for...of迭代语句  他可以迭代数组  字符串  集合   其实他是iterator的语法糖  可以迭代iterator所有可迭代的数据类型

### 5.generator

​	它主要的作用是解决异步问题  他是可以控制函数的执行过程  进行惰性求职  可以暂停函数

​	内置由yield组成   外部使用next调用

​	一旦程序触碰到yield  那么程序会陷入阻塞状态

### 6.Promise

​	他是ES6中解决异步编程方案之一  通俗一点说  就是将异步变成同步操作

​	他是一个构造函数  使用的时候需要实例化  比我们之前使用的回调更加合理  避免回调地狱

​	它本身有三种状态

​		1.初始化状态

​		2.成功状态

​		3.失败状态

​	我们使用的时候  需要先进行实例化  内置一个参数  参数是回调函数

​	回调内置两个参数  第一个参数是成功状态  第二个参数是失败状态  他们都是函数

​	定义之后  我们使用then  catch方法进行触发promise

​	then触发成功状态  catch触发异常 失败

​	触发之后返回值还是一个Promise



####################################################################

## 2.Promise

### 1.简介

Promise 是异步编程的一种解决方案，比传统的回调函数和事件更合理、更强大

ES6的Promise是一个构造函数, 用来生成Promise实例, Promise实例是异步操作管理者

Promise代表了未来某个将要发生的事件(通常是一个异步操作) 有了Promise对象

可以将异步操作以同步的流程表达出来, 避免了层层嵌套的回调函数(回调地狱)

Promise本身还是在使用回调函数(只不过比回调函数多了一种状态管理)

### 2.使用

#### 	1.创建

​	创建promise对象，实例化Promise

​	参数是回调函数，内置两个参数，resolve和reject

​	promise三个状态

​		初始化状态  pending

​		成功状态  fullfilled

​		失败状态  rejected

```js
/* 
    Promise是一个构造函数  所以说创建promise我们需要实例化
    实例化promise内置一个参数  参数是一个回调函数
    回调内置两个参数
        第一个参数是Promise的成功状态
        第二个参数是Promise的失败状态
        两个参数其实都是函数
    返回的结果是Promise实例

    Promise有三种状态
        第一种状态  许诺状态  也是初始化状态
        第二种状态  成功状态
        第三种状态  失败状态
*/

let promise = new Promise((resolve,reject)=>{
    // 初始化
    let num = 10;
    // console.log(resolve());
    // console.log(typeof resolve);
    // console.log(reject);
    // console.log(typeof reject);

    // 初始化完毕之后  我们对初始化的条件进行判断
    if (num > 10){
        // 如果说成功  也就是初始化条件成立  那么我们调用resolve成功状态
        // 注意  这是一个函数  所以说调用的时候  别忘了加括号  也可以传递实参
        resolve('成功了');
    }else{
        // 如果失败  调用reject失败状态
        // 他也是一个函数  也可以传递实参
        reject('失败了')
    }
})
```



#### 	2.调用

​		then  ：  触发resolve方法执行then

```js
// 我们定义好了promise之后  我们需要对Promise对象进行触发
// 触发使用Promise对象中的then方法   then方法可以内置一个或者两个参数  都是回调函数
// 第一个回调函数  其实就是resolve函数
// 第二个回调函数  其实就是reject
promise.then((data)=>{
    console.log('这是触发Promise' + data);
},(err)=>{
    console.log('这是触发Promise' + err);
})


```

​		catch  ：  触发reject方法执行catch

```js
// 使用异常处理链式调用
let promise = new Promise((resolve,reject)=>{
    let num = 10;
    if (num > 19){
        resolve('成功');
    }else{
        // console.log(aaa);
        reject('失败');
    }
})

// 使用then进行触发
// promise.then(data=>console.log(data),err=>console.log(err));

// 我们一般情况下  then中只会出现一个参数  参数是成功
// 失败的情况下  我们会使用catch进行触发
promise.then((data)=>{
    console.log(data);
}).catch((err=>{
    console.log(err);
}))


// 特点
// let a = promise.then(data=>console.log(data));
// 当我们then触发了Promise之后  我们返回的结果依然是一个promise
// console.log(a);
// a.catch(error=>console.log(error));

```



### 3.捕获异常

​	在使用then的时候是无法捕获异常的，但是在catch中可以捕获异常

​		try  ：  可能出现异常的代码

​		catch  ：  如果try出现错误，代码执行catch

​		finally  ：  不管会不会发生异常，都会执行finally中的代码

```js
// 异常处理
/*
    try  ：  可能出现异常的代码
    catch  ：  如果try出现错误，代码执行catch
    finally  ：  不管会不会发生异常，都会执行finally中的代码

    在程序中  我们通常把可能会出现错误的代码存储在try中
    如果说  try中出现了错误  那么不会报错  执行执行catch中的代码
    finally  无论代码是否错误  都会执行
*/

// console.log(num);
// let num = 100;

try{
    // 如果说num存在报错信息  那么不执行  直接执行catch
    console.log(num);
}catch{
    // 如果说try中没有报错信息  这里不会执行
    console.log('num没有定义  直接执行我');
}finally{
    console.log('我都执行');
}
```



### 4.链式操作

​	then方法的第一个参数，成功时的回调函数，分两种情况

​	返回了一个普通的数据(非promise)，这个值会作为参数传递给下一个then的成功回调

​	返回了一个promise,下一个then的执行，取决于这个promise状态的改变

```js
let promise = new Promise((resolve,reject)=>{
    let arr = '获取一级栏目数据';
    if (arr.length > 0){
        resolve(arr);
    }
})

// 触发Promise
// 因为promise触发得到的结果是一个promise对象  所以说 我们可以继续触发
// 前一个then中的回调函数中的返回值  作为新的promise的resolve状态  成功状态
let a = promise.then(data=>{
    console.log(data);
    return data + '中的食品';
}).then(data=>{
    console.log(data);
    return data + '中的元宵';
}).then(data=>{
    console.log(data);
    return data + '只提供一人份';
}).then(data=>{
    console.log(data);
    return data + '豆沙馅的'
}).then(data=>{
    console.log(data);
})
```



### 5.其他方法

​	all  ：  执行所有的promise

```js
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('p1');
        resolve('这是第一个promise');
    }, 3000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('p2');
        resolve('这是第二个promise');
    }, 1000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('p3');
        resolve('这是第三个promise');
    }, 2000);
})

// 使用Promise中的all方法  执行所有的Promise
// all方法是Promise对象中的静态方法
// 内置一个参数  参数是一个数组  数组中的每个元素是你要执行的所有的promise
// 执行所有的Promise  但是没有顺序
let a = Promise.all([p1,p2,p3]);
// Promise.all([p1,p2,p3]).then(data=>console.log(data));
a.then(d=>console.log(d))
```

​	race  ：  执行最快的promise

```js
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log('p1');
        resolve('这是第一个promise');
    }, 3000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log('p2');
        resolve('这是第二个promise');
    }, 1000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log('p3');
        resolve('这是第三个promise');
    }, 2000);
})

// race方法  执行最快的Promise
// 传参方式和all一样
// 只执行一个Promise  执行速度最快的
let a = Promise.race([p1,p2,p3]);
a.then(d=>console.log(d));
```



### 6.封装ajax

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <input type="text"  id="user">
        <input type="button" id="btn" value="搜索">
    </div>
</body>
</html>
<script src="./jquery.js"></script>
<script>
// let p1 = new Promise((resolve,reject)=>{
//     $.ajax({
//         url : './index.php',
//         type : 'get',
//         data : {user : 'Eric'},
//         success : (res)=>{
//             resolve(res);
//         },
//         error : (err)=>{
//             reject(err);
//         }
//     })
// })

// p1.then(d=>{
//     console.log(d);
//     return d;
// }).then(d=>{
//     console.log(d);
//     $.ajax({
//         url : './server.php',
//         type : 'get',
//         data : {user : d},
//         success : (res)=>{
//             console.log(res);
//         }
//     })
// })

$('#btn').click(function(){
    let search = $('#user').val();
    let p = new Promise((resolve,reject)=>{
        $.ajax({
            url : './index.php',
            type : 'get',
            success : (data)=>{
                resolve(data);
            }
        })
    })
    p.then(data=>{
        let arr = JSON.parse(data);
        let result = arr.filter(element=>element.sex == search);
        // console.log(result);
        return result;
    }).then(data=>{
        let second = 10;
        let result = data.filter(element=>element.age > 10);
        console.log(result);
    })
})
</script>
```

**谈谈你对promise的理解**

​	Promise用来解决异步回调问题，由于js是单线程的，很多异步操作都是依靠回调方法实现的，

​	这种做法在逻辑比较复杂的回调嵌套中会相当复杂；也叫做回调地狱；

​	promise用来将这种繁杂的做法简化，让程序更具备可读性，可维护性；

​	promise内部有三种状态，pedding，fulfilled，rejected；

​	pedding表示程序正在执行但未得到结果，即异步操作没有执行完毕，fulfilled表示程序执行完毕，且执行成功，

​	rejected表示执行完毕但失败；这里的成功和失败都是逻辑意义上的；并非是要报错。

​	其实，promise和回调函数一样，都是要解决数据的传递和消息发送问题，

​	promise中的then一般对应成功后的数据处理，catch一般对应失败后的数据处理。

## 3.async

### 1.概念

​	async...await是基于promise的generator语法糖，它用来等待promise的执行结果，常规函数使用await没有效果；

​	async修饰的函数内部return不会得到预期的结果，会得到一个promise对象；

​	await等待的promise结果是resolve状态的内容，reject状态的内容需要使用try...catch获取，

​	await关键字必须要出现在async修饰的函数中，否则报错。

​	主要来说  async函数的特点是

​		1.获取promise中的resolve状态或者是reject状态

​		2.async函数的返回值是一个promise

​		3.程序一旦触碰到await  程序陷入阻塞状态  知道将await右面的表达式执行完毕

### 2.应用

```js
// async函数的返回值都是一个promise
// async function fn(){
//     console.log('你好');
// }
// console.log(fn());


// async函数中的await能够获取promise的状态  不需要then和catch
let promise = new Promise((resolve,reject)=>{
    resolve('成功')
})

async function fn(){
    let v1 = await promise
    console.log(v1);
}
fn();



// async函数中存在await  如果程序碰到await  那么陷入阻塞状态
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('这是p1  1s');
    }, 1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('这是p2  3s');
    }, 3000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('这是p3  2s');
    }, 2000);
})

// 这种方式   最先执行的是p2
// p1.then(d=>console.log(d));
// p2.then(d=>console.log(d));
// p3.then(d=>console.log(d));


// 如果说  我们使用async函数
async function test(){
    let v1 = await p1;
    console.log(v1);
    let v2 = await p2;
    console.log(v2);
    let v3 = await p3;
    console.log(v3);
}

test();

```



## 4.面向对象

### 1.概念

​	ES6中的面向对象是和其他语言基本比较相似  JS正常来说是基于对象语言

​	很多程序都是基于对象开发  不是面向对象  但是在ES6中  我们引入了其他语言中的面向对象

​	面向过程就是  你需要什么  写什么

​	面向对象  他就是  你直接封装好一个功能  哪里需要的时候  在哪里调用

​	面向对象的好处

​		1.避免代码冗余

​		2.便于后期维护

### 2.类和对象的概念

​	类  ：  类泛指一类事务  比较抽象

​	对象  ：  所有实际存在的实体

​	对象和类之间的关系是什么  ：  包含与被包含的关系

​		类是对象的模板  对象是类的实例

​		类是对象的模具  对象是类的铸件

### 3.类的组成

​	类的组成是由成员组成

​	定义类  使用关键字class   后面跟上类名  类名的命名是帕斯卡命名法

​	后面直接跟上大括号  注意  没有形参列表

​	类的内部组成主要是成员

​		成员属性  ：  属性是一个事务自身的特征  特性  一般是形容词或者名词

​		在类中  类似于变量  但是不同与变量  因为成员在类中是全局的

​		成员方法  ：  方法是一个事务的行为  一般是动词  

​		在类中类似与函数  但是不同于函数  因为他也是全局的

​	定义一个类

```js
class Car{
    // 定义汽车属性
    name = '红旗';
    color = '黑色';

    // 定义汽车方法
    start(){
        console.log(`这是一辆${this.color}的${this.name}车`);
    }
}
```



### 4.实例化一个类，创建对象

​	类定义好了是不能直接使用的  那么我们需要将类实例化  创建出一个对象

​	使用new 关键字   进行实例化   注意  实例化类名的时候 有实参列表

```js
class Car{
    // 定义汽车属性
    name = '红旗';
    color = '黑色';

    // 定义汽车方法
    start(){
        console.log(`这是一辆${this.color}的${this.name}车`);
    }
}

let c = new Car();
console.log(c.name);
console.log(c.color);
c.start();
```



### 5.构造器

​	以上定义的类有一个缺点  上述的类中 只能有一个对象  是一个死类  所以说  不适合开发中使用

​	如果说定义一个活类  那么就需要不确定的数据

​	如果说需要活着的数据  那么我们就需要向类中进行传参  

​	构造器  ：  他是一个类中的内置方法  方法的名字是固定的  constructor

​	即使你不定义  这个方法也是存在的  只不过方法是空的而已

​	其实这个方法是一个魔术方法  不需要我们手动调用  在满足条件的情况下  会被自动调用

​	那么构造器  在我们实例化的同时  被调用

​	它主要的作用是  ：  主要用来初始化类的成员  尤其是成员属性

​	初始化的数据主要是传参

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<script>
// class Cat{
//     constructor() {
//         console.log('类已经被实例化了');
//     }
    
// }
// let c = new Cat();
// let a = new Cat();
// let b = new Cat();
// console.log(c);
// console.log(typeof c);

class Cat{
    constructor(name,color,age) {
        this.name = name;
        this.color = color;
        this.age = age
        // 初始化成功
        // console.log(this.name,this.age,this.color);
    }

    // 定义方法
    eat(food){
        console.log(`${this.name}在吃东西 吃的是${food}`);
    }

}

let c = new Cat('Tom','灰色',3);
// console.log(c);
c.eat('奶酪');

</script>
```

### 6.继承

​	继承指的是一个类中有另一个类的属性和方法  虽然没有定义  但是可以使用另一个类中的属性和方法

​	继承使用关键字  extends

​	继承

```js
class Worker{  // 基类
    constructor(name){
        this.name = name;
    }
    kq(){
        console.log(this.name + '的考勤信息');
    }
    jx(){
        console.log(this.name + '的绩效');
    }
}

class Boss extends Worker{  // 派生类
    
}

let w = new Worker('Eric');
w.kq();
w.jx();

let b = new Boss('Mary');
b.jx();
b.kq();
```

方法的重写

```js
class Worker{  // 基类
    constructor(name){
        this.name = name;
    }
    kq(){
        console.log(this.name + '的考勤信息');
    }
    jx(){
        console.log(this.name + '的绩效');
    }
}

class Boss extends Worker{  // 派生类
    skq(){
        console.log(this.name + '审核考勤');
    }
    sjx(){
        console.log(this.name + '审核绩效');
    }
    // 方法的重写  覆写  重载
    // 直接命名相同的名字  覆盖父类中的方法
    jx(){
        console.log(this.name + '说  我的绩效和你的不一样  我是按年的');
    }
}

let w = new Worker('Eric');
w.kq();
w.jx();

let b = new Boss('Mary');
b.jx();
b.kq();
b.sjx();
b.skq();
```



### 7.继承构造器

​	继承中可以继承方法  也可以进行方法的重写  但是有一点瑕疵

​	如果说父类的构造器无法满足子类的时候  我们怎么重写

​	不能直接重写  需要去继承父类的构造器  然后在加以补充

​	调用父类的构造器  使用super方法进行调用  继承的时候  必须继承父类构造器中的所有参数

```js
class Worker{
    constructor(name){
        this.name = name;
    }
    jx(){
        console.log(this.name + '的绩效');
    }
}
class Boss extends Worker{
    constructor(name,money) {
        // Worker.constructor(name)
        super(name);
        this.money = money;
    }
    sjx(){
        console.log(this.name + '审核绩效');
    }
    jx(){
        console.log(this.name + '说  我的绩效和你的不一样  我是按年的' + '我的工资是' + this.money);
    }
}

let w = new Worker('Eric');
w.jx();

let b = new Boss('Mary',60000);
b.jx();
b.sjx();
```



### 8.静态方法

​	静态方法是比较特殊的方法  他不需要实例化  直接调用就可以

​	他的运行速度比较快  大约是普通的对象方法的1.5倍  快了55%

​	一般情况下  在我们不需要实例化的情况下  或者是不考虑封装的情况下  我们可以使用静态方法  因为快

​	静态方法需要使用bstatic进行修饰

​	在调用的时候  直接使用类名.方法名()

```js
class Person{
    static name = 'MM';
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log('吃饭');
    }
    // 定义静态方法
    static say(name){
        // console.log(name + '说话');
        // console.log(this.name + '说话');
        console.log(Person.name + '和' + name + '在说话');
    }
}
let p = new Person('Mary',13);

// 使用静态方法
Person.say('Eric');

// Person.eat();

// 使用eat需要实例化
// let p = new Person('Mary',13);
// console.log(p);
// p.say('nnn');

```

​	注意事项

​		1.静态方法不需要实例化

​		2.静态方法速度比较快

​		3.静态方法不能使用对象调用

​		4.静态方法中不能使用this

​		5.静态方法中不能使用非静态成员  如果使用  先定义静态























