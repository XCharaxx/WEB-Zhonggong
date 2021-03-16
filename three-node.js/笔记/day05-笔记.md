# 						day05

## 1.回顾一下上周的授课内容

### 1.第一天

#### 	1.严格模式

#### 	2.JSON

#### 	3.let变量和const常量

#### 	4.解构赋值

#### 	5.对象的属性简写

#### 	6.模板字符串

#### 	7.箭头函数

### 2.第二天

#### 	1.扩展运算符

#### 	2.Symbol

#### 	3.Set集合和Map集合

#### 	4.iterator

#### 	5.generator

#### 	6.Promise

### 3.第三天

#### 	1.async...await

#### 	2.面向对象

#### 	3.ES6模块

### 4.第四天

#### 	1.内置函数

#### 	2.深度克隆

#### 	3.Node简介

#### 	4.环境变量

#### 	5.Doc命令

############################################################################

## 2.非阻塞说明

​	NodeJS是非阻塞的  也就是说异步的  我们整个Node中使用的都是异步回调

​	几乎都在操作回调函数和模块

​	首先  我们Node中相较于以前的JS  多添加了服务器操作  模块操作  文件流

```js
// 这里指的是引入一个模块   fs模块   fileSystem
// 引入模块使用require函数  内置一个参数 参数是模块名  和在html中的script中的src属性是一样的
// 只不过添加了命名空间  我们过来是是一个对象
// fs模块是核心模块  在安装好Node的时候  Node自带的模块
let fs = require('fs');
// console.log(fs);

console.log(1111111111);

// 使用模块
// 读取文件使用fs模块中的readFile方法  内置三个参数
// 第一个参数是路径  第二个参数是字符集
// 第三个参数是回调函数
// 回调内置两个参数  第一个参数是错误  第二个参数是读取出来的数据
fs.readFile('./test/1.test.txt','utf-8',(error,data)=>{
    if (error){
        console.log('读取失败');
    }else{
        console.log(data);
    }
});

console.log(2222222222);
```

## 3.事件驱动

### 1.概念

​	node核心API构建用的是异步事件驱动架构，其中某些类型的对象又称触发器（emitter）

​	会触发命名事件来调用函数，又称监听器，所有能触发的事件对象都是EventEmitter类的实例

​	这些对象有一个 eventEmitter.on(函数)用于一个或这个多事件绑定到命名事件中

​	events模块  只提供了一个对象 events.EventEmitter，核心就是监听与触发

​	我们使用事件驱动  使用的是一个模块  events  他也是Node的核心模块

​	使用emit方法进行触发事件对象

### 2.参数使用

​	在事件中传递了参数，EvnentEmitter每个事件有一个事件名和若干个参数组成

​	事件名是一个字符串 表达一定的意思  见名之意，对于每一个事件  EventEmitter又支持若干个监听器

​	当事件触发时 注册到这个事件监听器依次被调用  事件参数作为回调参数使用

```js
// 引入核心模块  events
const events = require('events');

// 实例化仅有的一个实例  得到一个对象
const event = new events.EventEmitter();

// 使用该对象进行绑定事件
// 绑定事件使用on方法  内置两个参数
// 第一个参数是事件的名字
// 第二个参数是回调函数   回调函数其实就是事件的行为
// 可以给回调函数传递参数  若干参数  因为这是一个自定义的函数
// event.on('I_LOVE_YOU',()=>{
//     console.log('终于等到你');
// });

// 触发事件的时候  使用emit方法
// 内置参数若干  第一个参数是我们触发的事件名
// 从第二个参数开始  都是事件的参数  如果没有参数  那么emit方法内置一个参数  参数是事件的名字
// event.emit('I_LOVE_YOU');
// event.emit('I_LOVE_YOU');
// event.emit('I_LOVE_YOU');
// event.emit('I_LOVE_YOU');


// 传递事件参数
event.on('I_LOVE_YOU',(aName,bName)=>{
    console.log(aName + '终于等到你' + bName);
});

event.emit('I_LOVE_YOU','Eric','Mary');
event.emit('I_LOVE_YOU','Jerry','Tom');
event.emit('I_LOVE_YOU','喜洋洋','灰太狼');
```



## 4.模块

### 1.概念

​	模块就是一个JS文件  将我们已有的程序进行一个不封装  当我们需要再次使用的时候  直接引入

​	比如jquery就是一个模块  我们可以使用其中的一些功能

​	在NodeJS中  我们模块比较复杂  有以下三种

### 2.核心模块

​	核心模块就是安装完成Node的时候  自带的一些模块

​	不需要下载  不需要定义  我们可以直接使用

​	使用的时候 使用require函数进行引入模块  引入进来的是一个对象

​	使用的时候要模块名（引入的时候赋给的变量）对象中的属性或者是方法 或者是对象

​	常用的核心模块   fs  events  url  path  http  querystring

​	核心模块比较少  只是完成一些基本功能  大多都是使用JS之前的逻辑和代码

​	如果说我们使用到更复杂的逻辑  那么需要依赖第三方模块

### 3.第三方模块

​	很多时候  我们需要依赖与第三方模块  去网上下载

​	第三方模块  模块的名字都是唯一的  不用担心重复下载  第三发模块是所有的开发者的结晶

​	第三方模块的使用依赖于npm命令  我们使用npm进行模块的下载

​	npm是包管理工具

​		主要用来做模块的发布  依赖  下载  安装等工作

​	NPM命令

​		init  ：  初始化命令  下载包之前必须初始化  生成package.json

​		install/i   ：  下载包  安装包  生成node_module文件夹  装包的    生成package_look.json  包的信息

​		install/i@x.x  ：  下载包  安装包  指定版本号

​		search/s  :  查看包

​		install/i  -g   ：  全局安装  只有工具类的模块才会使用全局安装  全局安装之后会带给我们一个命令

​		install/i  --save  ||  install -S  : 安装运行依赖

​		install/i  --save-dev  ||  install  -D  : 安装开发依赖

​		remove/r  ：  删除包

​		uninstall  ：  卸载包

```js
// JS源码或者时间
// let date = new Date();

// let Y = date.getFullYear();
// let M = date.getMonth() + 1;
// let D = date.getDate();
// let H = date.getHours();
// let m = date.getMinutes();
// let s = date.getSeconds();

// console.log(`${Y}年${M}月${D}日${H}时${m}分${s}秒`);


// 使用Node模块  第三方模块  time-stamp
const timer = require('time-stamp');
// console.log(timer);
// console.log(timer('YYYY年MM月DD日HH点mm分ss秒'));
console.log(timer('YYYY年MM月DD日HH点mm分ss秒=======星期zz'));
```

### 4.自定义模块

​	自定义模块其实就是我们自己定义的JS文件  将其封装  然后暴露

​	我们可以自行引入  使用

​	暴露  ：  exports   ||   module.exports

​	引入  ：  require   在NodeJS中引入模块  一直使用require 

​		引入自定义模块的时候注意要写路径  即使是当前目录  也不能省略./

```js
// 第一种暴露方式
// 使用export方式进行暴露   这种方式不常用
/*
exports.username = 'admin';
exports.password = '123';
exports.fun = ()=>{
    console.log('fun函数');
}
exports.obj = {
    // username,password  因为username  password不是变量  所以说不能这样暴露
    name : 'Eric',
    age : 18
};
*/

// 第二种暴露方式
// 使用modult.exports

// module.exports.username = 'admin';
// module.exports.password = '123';
// module.exports.fun = ()=>{
//     console.log('fun函数');
// }
// module.exports.obj = {
//     // username,password  因为username  password不是变量  所以说不能这样暴露
//     name : 'Eric',
//     age : 18
// };

// 堆栈空间都保持一致
// console.log(exports);
// console.log(module.exports);
// console.log(module.exports === exports);
// let obj1 = {a:1};
// let obj2 = {a:1};
// console.log(obj1 == obj2);





module.exports.username = 'admin';
exports.password = '123';
exports.fun = ()=>{
    console.log('fun函数');
}
exports.obj = {
    // username,password  因为username  password不是变量  所以说不能这样暴露
    name : 'Eric',
    age : 18
};


// 第三中暴露方式  最常用的方式
let name = 'Eric';
let age = 18;
let username = 'admin';
let password = '123';
let func = ()=>{
    console.log('这是哈数');    
}
let obj = {
    name,age,username,password
}

module.exports = {
    obj,func
}


// 如果说同时使用export和module.exports两种方法暴露
// 那么module.exports会覆盖exports
```

Node顶层对象

```js
// __dirname  :  获取当前文件夹的绝对路径
console.log(__dirname);

// __filename  :  获取当前文件的绝对路径
console.log(__filename);
```

## 5.buffer

### 1.概念

​	Buffer 结构和数组非常像  操作的方法也相似  数组中不能存储二进制的文件  而buffer专门存储二进制的数据

​	文件流的写入 网络请求数据处理   javascript 语言不能读取或操作数据流机制

​	buffer在全局作用域 不需要引入  直接使用  buffer中存储的是二进制的数据 显示的时候 是以16进制显示

​	buffer中每个元素从00-ff   0-255  buffer 中的每个元素 占用内存的一个字节 8比特

​	一个汉字占有三个字节  buffer大小一旦确定 不能修改   buffer是对底层内存的直接操作

### 2.方法

​	buffer.length属性  ：  查看Buffer的长度

​	Buffer.from(str)   ：  将一个字符串转换成buffer

​	buf.toString();  ：   将缓冲区的数据 转成字符串

```js
// let str = 'hello';
let str = 'hello 中公';

// Buffer.from将字符串转化为buffer
let buf = Buffer.from(str);
console.log(buf);
console.log(buf.length);


// 将Buffer转化会字符串
console.log(buf.toString());


// console.log(buf.toString('base64'));
// 如果说使用Buffer  将Buffer转化为base格式
// 使用toString方法  内置参数  参数是base64
let base64 = buf.toString('base64');


// 将base格式  转化会buffer
// 使用Buffer.from方法  内置两个参数  第一个参数是base64  第二个参数是’base64‘
let buff = Buffer.from(base64,'base64');
console.log(buff);
```



buffer和base64之间的转换

```js
// 这是一个JSON  
let json = '{"title" : "沙尘暴","type" : "百年一遇"}';


// 我们想要将json转化为base64的格式
// 将JSON准化为Buffer
// let buf = Buffer.from(json);
// let base64 = buf.toString('base64');
// console.log(base64);

// 将json转化为base64的格式  封装函数
function jsonToBase64(obj){
    let buf = Buffer.from(obj);
    return buf.toString('base64');
}

console.log(jsonToBase64(json));


let base = "eyJ0aXRsZSIgOiAi5rKZ5bCY5pq0IiwidHlwZSIgOiAi55m+5bm05LiA6YGHIn0=";
// 将base64格式转化为JSON封装一个函数
function base64ToJson(obj){
    let string = Buffer.from(obj,'base64');
    return string.toString();
}
console.log(base64ToJson(base));
```



## 6.文件操作

### 1.数据操作

​	NodeJS是可以对文件进行操作的  能操作所有类型的文件  对文件的操作主要包括  文件的读取   文件的写入

​	在文件操作中  使用的模块是我们的核心模块  fs模块   fileSystem

​	这个模块中有着丰富的模块操作方法  其中包括文件的读取和文件的写入

​	最重要的是  每一个方法其实都是两个  有一个同步方法  还有一个异步方法

​	同步方法方法的名字在后面加上Sync

​	同步的方法比异步的方法多了一个返回值  异步方法比同步方法多了一个回调函数

#### 	1.文件的读取

​		文件的读取异步方法使用readFile

​			内置两个或者三个参数  第二个参数是可选参数  字符集

​			如果说传递第二个参数  那么按照字符集读取  如果说不传递  那么读取的是一个Buffer

​			第一个参数是文件的路径

​			第三个参数是回调函数

​				回调内置两个参数  第一个参数是错误  第二个参数是读取的数据

​		文件的读取同步方法使用readFileSync

​			内置一个或者两个参数  第一个参数是文件路径  第二个参数是可选参数字符集

```js
// 文件读取操作
// 1.引入模块
const fs = require('fs');

// 使用readFile方法
// 传递两个参数的时候
fs.readFile('../test/2.data.json',(error,data)=>{
    if (error){
        console.log('读取失败  错误为：');
        console.log(error);
    }else{
        // 将buffer直接转化为对象  使用JSON.parse方法
        console.log(JSON.parse(data));
        // console.log(data.toString());
    }
})

// 使用费三个参数的时候
fs.readFile('../test/2.data.json','utf-8',(error,data)=>{
    if (error){
        console.log('读取失败  错误为：');
        console.log(error);
    }else{
        console.log(JSON.parse(data));
    }
})


// 同步读取方式
// 内置一个参数的时候
let buf = fs.readFileSync('../test/1.test.txt').toString();
console.log(buf);

let result = fs.readFileSync('../test/1.test.txt','utf-8');
console.log(result + '同步');
```



#### 	2.文件的同步写入

​		所有的文件写入  如果说写入的文件不存在  那么会自动创建文件

​		文件写入  就是将我们数据写入到文件中  一下的三种方法也是一样的  所以说  都是写入

​		一般情况下  我们文件写入分为三步组成  同步写入最醒目  最清晰

​		其实写入文件就是将数据存到文件中  一共分为三步

​		第一  打开文件  第二  把数据放到文件中  第三  关闭文件

​		一共涉及到三个方法

​			1.openSync  ：  打开文件

​				内置三个参数

​					第一个参数是打开的文件路径

​					第二个参数是打开方式

​						文件的打开方式有三种

​							r  ：  只读方式打开

​							w  ：  写入方式打开   覆盖写

​							a  ： 写入方式打开  追加写

​					第三个参数是打开权限  这个参数一般不传

​				返回值是资源句柄

​			2.writeSync  ：  写入文件

​				内置四个参数

​					第一个参数是资源句柄

​					第二个参数是写入的数据

​					第三个参数是字符集  写入的字符集

​					第四个参数是写入的起始位置  但是  我们一般不传

​			3.closeSync  ：  关闭文件

​				内置一个参数  参数是资源句柄

```js
const fs = require('fs');

// 打开文件
/*
1.openSync  ：  打开文件
    内置三个参数
        第一个参数是打开的文件路径
        第二个参数是打开方式
            文件的打开方式有三种
                r  ：  只读方式打开
                w  ：  写入方式打开   覆盖写
                a  ： 写入方式打开  追加写
        第三个参数是打开权限  这个参数一般不传
    返回值是资源句柄
*/
// let fd = fs.openSync('../test/3.sync.txt', 'w');
let fd = fs.openSync('../test/3.sync.txt', 'a');

// 定义写入到文件的字符串
// let str = "五花马  千金裘  呼儿将出换美酒  与尔同销万古愁";
let str = "五花马  千金裘  呼儿将出换美酒  与尔同销万古愁\n";

// 写入文件
/*
2.writeSync  ：  写入文件
    内置四个参数
        第一个参数是资源句柄
        第二个参数是写入的数据
        第三个参数是字符集  写入的字符集
        第四个参数是写入的起始位置  但是  我们一般不穿

*/
fs.writeSync(fd, str, 'utf-8');

// 关闭文件
/*
3.closeSync  ：  关闭文件
    内置一个参数  参数是资源句柄
*/
fs.closeSync(fd);
```



#### 	3.文件的异步写入

​		异步写入方法原理和同步方法相同  只有一点不同  没有返回值  全部都靠回调

​		也就是说传参的方式不同  都加了一个回调函数  方法名字都去掉了Sync

​		一共涉及到三个方法

​			1.open  ：  打开文件

​				内置四个参数

​					第一个参数是打开的文件路径

​					第二个参数是打开方式

​						文件的打开方式有三种

​							r  ：  只读方式打开

​							w  ：  写入方式打开   覆盖写

​							a  ： 写入方式打开  追加写

​					第三个参数是打开权限  这个参数一般不传

​					第四个参数是回调函数

​						回调内置两个参数 第一个参数是错误  第二个参数是资源句柄

​			2.write  ：  写入文件

​				内置五个参数

​					第一个参数是资源句柄

​					第二个参数是写入的数据

​					第三个参数是字符集  写入的字符集

​					第四个参数是写入的起始位置  但是  我们一般不传

​					第五个参数是回调

​						回调内置一个参数  参数是错误

​			3.close  ：  关闭文件

​				内置两个个参数  

​					第一个参数是资源句柄

​					第二个参数是回调函数

​						回调内置一个参数  参数是错误

```js
const fs = require('fs');

// 打开文件
/*
1.open  ：  打开文件
    内置四个参数
        第一个参数是打开的文件路径
        第二个参数是打开方式
            文件的打开方式有三种
                r  ：  只读方式打开
                w  ：  写入方式打开   覆盖写
                a  ： 写入方式打开  追加写
        第三个参数是打开权限  这个参数一般不传
        第四个参数是回调函数
            回调内置两个参数 第一个参数是错误  第二个参数是资源句柄
*/

// 定义一个对象  将对象写入
let arr = [
    { article_id: 1, article_title: "诫子书", article_author: "诸葛亮" },
    { article_id: 2, article_title: "兰亭集序", article_author: "王羲之" },
    { article_id: 3, article_title: "岳阳楼记", article_author: "范仲淹" },
    { article_id: 4, article_title: "滕王阁序", article_author: "王勃" }
]

fs.open('../test/4.async.json', 'w', (error, fd) => {
    if (error) {
        console.log('打开文件失败');
    } else {
        // 写入文件
        /*
            2.write  ：  写入文件
                内置五个参数
                    第一个参数是资源句柄
                    第二个参数是写入的数据
                    第三个参数是字符集  写入的字符集
                    第四个参数是写入的起始位置  但是  我们一般不传
                    第五个参数是回调
                        回调内置一个参数  参数是错误
        */
        // 注意  ：  对象不能直接进行写入操作  要先将其转化为字符串（JSON）
        fs.write(fd, JSON.stringify(arr), 'utf-8', err => {
            if (err) console.log('写入失败');
            else console.log('写入成功');
        })
        // 关闭文件
        /*
            3.close  ：  关闭文件
            内置两个个参数
                第一个参数是资源句柄
                第二个参数是回调函数
                    回调内置一个参数  参数是错误
        */
        fs.close(fd, err => {
            err ? console.log('关闭失败') : console.log('关闭成功');
        })

    }
})
```



#### 	4.文件的简单写入

​		简单写入操作  我们使用的最多的  因为简单

​		只涉及到一个方法  打开和关闭都不需要  或者说都在这一步完成了

​		writeFile  ：  写入文件操作

​			内置四个参数

​				第一个参数是打开的文件路径

​				第二个参数是写入的内容

​				第三个参数是描述  是一个对象	

​					对象中两个属性   flag  ：  写入的方式   encoding  ：  写入的字符集

​				第四个参数是回调函数

​					回调内置一个参数  参数是错误

```js
const fs = require('fs');

// 写入操作
/*
writeFile  ：  写入文件操作
    内置四个参数
        第一个参数是打开的文件路径
        第二个参数是写入的内容
        第三个参数是描述  是一个对象
            对象中两个属性   flag  ：  写入的方式   encoding  ：  写入的字符集
        第四个参数是回调函数
            回调内置一个参数  参数是错误
*/

// 定义一个写入的字符串
let str = "将进酒  杯莫停  与君歌一曲  请君为我倾耳听";

fs.writeFile('../test/5.easy.txt',str,{flag : 'w',encoding : 'utf-8'},error=>{
    if (error) console.log('写入失败');
    else console.log('写入成功');
})

let string = "床前明月光";
fs.writeFileSync('../test/6.easy.txt',string,{flag : 'w',encoding : 'utf-8'});
```



#### 	5.流式文件写入

​		流式文件操作和其他操作都不一样  需要使用事件驱动  但是使用的时候比较少

​		一般不使用流失操作  流式操作有一个优势  是其他写实方式不具备的

​		他可以进行大批量的数据写入  源源不断的进行写入操作

​		所以说  我们使用流式操作  一般情况下的写入方式都是追加写

​		涉及到的方法

​		1.createWriteStream  ：  创建一个可写的流

​			内置两个参数

​				第一个参数是写入的文件路径

​				第二个参数是一个描述

​					第一个属性是flags  ：  写入的方式  一般都是a

​					第二个属性是encoding  ：  字符集

​			返回值是一个资源  使用资源进行触发事件

​			触发之后  使用资源中的write方法进行写入

​			写入之后  使用资源中的end方法进行结束

```js
const fs = require('fs');

// 创建一个可写的流
let ws = fs.createWriteStream('../test/7.stream.txt',{flags : 'a',encoding : 'utf-8'});

// 使用事件驱动打开流式操作
// 使用ws中的on方法  驱动事件open
ws.on('open',()=>{
    console.log('打开流');
})

// 写入操作  使用ws中的write方法
// 内置一个参数  参数是写入的内容
for (let i = 0;i <= 100000;i++){
    ws.write(`第${i}次想起你\n`);
}

// 使用ws中的on方法  驱动事件close
// 关闭可写的流
ws.on('close',()=>{
    console.log('关闭流');
})

// 结束所有操作  使用end方法
ws.end();
```



























​	

