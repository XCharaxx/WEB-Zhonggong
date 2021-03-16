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


