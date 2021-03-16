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