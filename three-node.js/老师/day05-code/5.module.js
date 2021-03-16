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