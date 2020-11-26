## 复习

关键帧动画

```

    @keyframes 动画名称{

        0%{

        }
        ...
        100%{

        }
    }



    .box{
        animation:动画名称 1s/1000ms linear 1s/1000ms 1/infinite alternate;

        animation:动画名称 1s/1000ms linear 1s/1000ms forwards; 

    }
```



溢出隐藏

overflow:hidden;


定位层级

z-index:0/999;  


居中

margin:0 auto;

边框

border:5px solid black;


## 多个类的使用

```
        
        .leaf{
            position: absolute;
            left: 43px;
            top: 0;
            width: 14px;                                                             
            height: 100px;
            border-radius: 50%;
            background-color: lightblue;
        }
        .leaf01{ 
        }
        .leaf02{
            transform: rotate(90deg);
        }

        <!-- 一个标签可以设置多个class属性值，leaf类用来添加公共样式，leaf01和leaf02用来添加各自不同的样式 -->
        <div class="leaf leaf01"></div>
        <div class="leaf leaf02"></div>

```


## 鼠标悬停及后代选择器

```

        .outer{
            width: 300px;
            height: 300px;
            border: 1px solid black;
        }
        /* 鼠标悬停在.outer上，改变.outer自身的样式 */
        .outer:hover{
            background-color: lightblue;
        }
        /* 鼠标悬停在.outer上时，让后代中的.box改变样式 */
        .outer:hover .box{
            background-color: pink;
        }
        /* 选择.outer 后代中的 .box */
        .outer .box{
            color: yellow;
        }

```

## 浮动
- 多个标签水平方向从左到右依次排列，给这些标签都设置float:left
```
    float:left;  
```

## 外边距
- 外边距指的是标签与标签之间的空白间距

```
    margin: 10px 20px;  上下10px   左右20px
    marign-left:10px; 左外边距
    marign-right:10px; 右外边距
    marign-top:10px; 上外边距
    marign-bottom:10px; 下外边距
```

## 变形原点设置


```
    transform-origin:水平  垂直;
    transform-origin:left/center/right/50px/-50px  top/center/bottom/50px/-50px;

```


## 过渡动画

```
    transition: 过渡属性名 时间 速度曲线 延迟时间;
        过渡属性名: all 表示所有属性都过渡

    transition: 2s; /*省略过度的属性名称表示所有变化的属性都过渡*/
    transition: width 1s linear, background-color 2s linear 1s ...; /* 指定部分属性过渡*/

```
## 图片

```
    <img src="./案例/images/1.jpg">
    <img src="http://www.ujiuye.com/uploadfile/2020/0929/20200929115751929.jpg">
```

## 阴影

```
        box-shadow: 水平位置 垂直位置 模糊度 颜色;
        box-shadow: 0px 0px 10px #333;
```
## 半透明颜色

```
            /* 半透明颜色  rgba(0-255,0-255,0-255,0-1) */
            background-color: rgba(0,0,0,0.5);  
```
## 文本样式

```

            /* 文本水平居中 */
            text-align: center; 
            /* 单行文本垂直居中 */
            line-height: 300px;
            /* 字体大小 */
            font-size: 30px;
            /* 文字颜色 */
            color: white;
```