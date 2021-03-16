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
