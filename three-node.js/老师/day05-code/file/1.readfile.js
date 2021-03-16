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