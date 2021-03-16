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
