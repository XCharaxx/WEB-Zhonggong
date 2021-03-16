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
