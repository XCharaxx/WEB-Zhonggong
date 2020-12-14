# day15

## LESS

### 变量

### 类混入

### 导入 

```css
.css--->.css  .less --->.less 导入
@import  "文件路径";
```

### 嵌套

```css
父子 嵌套 .a>.b   

.a {
    .b {
        
    }
}
兄弟平行  .a +.b 
.a {
    
   
}
.b {
    
}
如果想加伪类 ；
.a{
    //&代指上一级选择器
    &:hover {
        
    }
}
编译后效果:
.a:hovr {
    
}
```

### 继承

```css
.a {
    
    width:200px;
    height:200px;
    
}
.c {
    border-radius:50%;
}
.b {
    &:extend(.a,.c...);
}

```



## 移动端布局

流式布局    rem布局   视口布局     手淘团队  flexible.js  

**设备区间划分**

```css
大屏 >1200px
中屏   992px-1200px
小屏  768px-992px  pad
超小屏  <768px  手机  320px 360px  375px 414px 411px ... 
```

##### 逻辑像素和物理像素

pc: 1物理 = 1逻辑

移动端: 1物理 = ？逻辑（根据系统去定） 

==逻辑像素指的是css像素 也就是我们写代码的px==



![](media/手机尺寸.png)

![](media/各设备的逻辑像素.png)



## 视口设置

移动端布局第一步  视口：呈现网页的介质 ，窗口 

```css
<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">

视口默认宽度:980px  设置:
content:
    1. width=device-width 视口宽度=设备宽度
    2. initial-scale=1   初始缩放比例1
    3. user-scalable=no 禁止用户缩放界面
```

## h5媒体查询

获取设备宽度  

```css
@media 查询的设备 and (查询的条件) {
    
    //代码  当查询条件满足时  则执行{}里的代码
    
}
查询的设备:屏幕screen ,打印机的各项数据print

//当前屏幕宽度大于320px 
@media screen and (min-width:320px){
    
    .box {
        bgc:green;
    }
    
}

width,min-width,max-width 

```

案例1： 大屏: box盒子 黑色背景  中  红色  小  粉色  超小  红色

```css
  .box {
            width: 80%;
            height: 400px;
            margin: 0 auto;

        }

        /* 小 768px--992px */
        @media screen and (min-width: 768px) and (max-width:992px) {

            .box {
                background-color: deeppink;
            }

        }

        /* 中 992px--1200px */
        @media screen and (min-width: 992px) and (max-width: 1200px) {

            .box {
                background-color: red;
            }

        }


        /* >1200px 大 */
        @media screen and (min-width:1200px) {
            .box {
                background-color: #000;
            }
        }



        /* 超<768px */
        @media screen and (max-width:768px) {

            .box {
                background-color: skyblue;
            }

        }
```

## 流式布局

自适应----》原理： 盒子宽度尽量用%表示  高度可以定高 ,或者auto  ,小间距用px即可 ，图片大小也要写% ，文字大小就是px  稍微小一点px  (320px - 750px)

缺点： 盒子高度比例与宽度不协调 图片也会被拉伸   所以就是丑一点



## rem布局

原理： 在不同的屏幕下，设置当前屏幕的html字体大小值 ，在写具体盒子的时候把量下来的px单位转换为rem单位即可

```css
当前屏幕的html字体大小值 = 当前屏幕宽度*预设字体值(100px)/设计稿的宽度;

100px为了好算 
```



相对单位 : rem  

```css
html {
    font-size:20px; //1rem = 20px 
}

.box {
    width:20rem;// 20*20 = 400px
    height:20rem;//400px
    margin:2rem 0px 1.5rem 0px; // 上 2*20 下1.5*20 
    font-size:1rem;
}
```

**媒体查询+ rem单位**

```css
/* 适配文件 : h5媒体查询+rem */
@media screen and (min-width: 320px) {

    /* 1rem = 42.6667 */

    html {
        font-size: 42.6667px;
    }


}



@media screen and (min-width: 360px) {

    /* 1rem = 48px */

    html {
        font-size: 48px;
    }


}

@media screen and (min-width: 375px) {

    /* 1rem = 50 */

    html {
        font-size: 50px;
    }


}

@media screen and (min-width: 414px) {

    /* 1rem =  55.2px*/

    html {
        font-size: 55.2px;
    }


}

@media screen and (min-width: 414px) {

    /* 1rem =  55.2px*/

    html {
        font-size: 55.2px;
    }


}

@media screen and (min-width: 540px) {

    /* 1rem =  72px*/

    html {
        font-size: 72px;
    }


}

@media screen and (min-width: 640px) {

    /* 1rem =  85.3px*/

    html {
        font-size: 85.3px;
    }


}

@media screen and (min-width: 750px) {

    /* 1rem =  100px*/

    html {
        font-size:100px;
    }


}

```



##### js查询屏幕 + rem单位

```javascript
1. 获取html元素 html元素.字体大小 ;
2. 获取当前屏幕的宽度 
3. 赋值 
当前屏幕宽度字体基础值html = 当前屏幕宽度*预设字体基础值/psd设计稿的宽度;

//获取当前屏幕宽度 
var currSWidth = document.documentElement.cilentWidth;
//预设字体基础值 
var preFont = 100; //1rem = 100px 
//psd设计稿的宽度 假如设计稿就是750px
var psdWidth = 750;
if(currSWidth > 750) {
    currSWidth = 750;
}

//当前屏幕宽度所对应的字体基础值
var currFontSize =currSWidth*preFont/psdWidth; 
//设置当前屏幕下html的字体基础值
document.documentElement.style.fontSize = currFontSize +'px';

```



