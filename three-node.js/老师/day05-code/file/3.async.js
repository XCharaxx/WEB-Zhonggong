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