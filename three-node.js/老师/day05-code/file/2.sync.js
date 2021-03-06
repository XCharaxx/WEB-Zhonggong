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
