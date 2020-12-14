# day08

## 文件创建

![r](../../day08-day10/笔记/media/文件夹.png)

## 文件命名规范

**统一用小写的英文字母，数字和下划线的组合，不得包含汉字空格和特殊字符**。

原则： 1）方便理解，见名之意

 2）方面查找

```css
例如：

首页—index
产品列表—prolist产品详细页面—pro_detail
新闻列表—newslist新闻详细页面—news_detail
发展历史—history
关于我们—aboutus
联系我们—linkus，contactus
信息反馈—feedback
留言—leavewords
```

## 图片命名规范

图片的名称分为头尾两部分，用下划线隔开，头部表示此图片的大类性质，例如广告，标志，菜单，按钮等

- banner：放置在页面顶部的广告，装饰图案等长方形的图片
- logo：标志性的图片
- button：在页面上位置不固定，并且带有链接的小图片
- menu：在页面中某一位置连续出现，性质相同的链接栏目的图片
- pic：装饰用的图片

```css
例子：

banner_sohu.gif, banner_sina.gif
menu_aboutus.gif,menu_job.gif
title_news.gif
logo_police.gif
pic_people.gif
```



## 代码规范

### html

缩进使用soft tab（4个空格）；
嵌套的节点应该缩进；
在属性上，使用双引号，不要使用单引号；
属性名全小写，用中划线做分隔符；
不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；

<img src="" >

不要忽略可选的关闭标签，例：</li> 和 </body>。

块元素可以嵌套行内元素和行内块,行内元素不可以套块元素(a除外)  a>div  

复合标签的直接子代按照规定写(ul>li,ol>li,dl<dt+dd)

一个界面上有且只有一个H1元素,一般用在logo上

自定义属性时,最好用data-属性名 命名属性名字 方便获取

### CSS

尽量用class属性取挑选元素  .类名 {} 

不要写超出三个-5个的类选择器

==不要出现任何单独的标签选择器!!!==

#id  100 权重最大   父元素 id  



#### css书写规范

```css
div.a {
    布局相关的属性;  display,overflow,float,position,margin,padding
    本身的属性;width,height,border,bgc,
    文本的属性;text-,font-,...
    其他属性;z-index,border-radius,box-shadow,cursor,resize...
    
}
```



## 网站三剑客(head)

TDK

Title  网页标题    4-6词 词语 

```html
<title>   </title>
```

Description 描述

```css
<meta name="description"  content="U.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!">
```

Keywords

```html
网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东
```







## 鼠标样式属性

1. cursor:auto; 默认

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233131398-565432029.png)

2. cursor:crosshair; 加号

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233149789-96954117.png)

3. cursor:text; 文本竖标

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233203703-1291561763.png)

4. cursor:wait; 等待

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233216488-387848529.png)

5. cursor:help; 帮助

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233228280-1279318759.png)

6. cursor:progress; 过程

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233239106-73902129.png)

7. cursor:inherit; 继承

8. cursor:move; 移动

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233249864-1861715169.png)

9. cursor:ne-resize; 左下右上箭头

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233301899-585380352.png)

10. cursor:ns-resize; 向上向下箭头

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233315514-945594282.png)

11. cursor:nw-resize; 左上右下箭头

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233408995-645352735.png)

12. cursor:pointer; 手指

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233419355-1143926520.png)

13. cursor:zoom-in; 放大镜

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233433262-683298874.png)

14. cursor:zoom-out; 缩小镜

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233444095-419110564.png)

15. cursor:grab; 手

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233456521-795887230.png)

16. cursor:grabbing; 抓拳

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233508419-382262541.png)

17. cursor:no-drop;  红圈禁止

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233519301-602815245.png)

18. cursor:not-allowed; 红圈禁止

![img](https://img2020.cnblogs.com/blog/1917324/202004/1917324-20200415233529684-1036809219.png)

 



## 实现箭头

原理： 定位两个三角形 （边框）

```css
<style>
            .box {
                width: 50px;
                height: 50px;
                /* background-color: pink; */
                position: relative;
                margin-left: 100px;
                margin-top: 100px;
            }
            /* 定位 黑色  */
            .arrow::before {
                content: '';
                position: absolute;
                left: 0;
                top: 1px;
                border-width:20px 20px 0px 20px;
                border-style:solid;
                border-color:#000 transparent transparent transparent;

            }
            /* 白色 */
            .arrow::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0px;
                border-width:20px 20px 0px 20px;
                border-style:solid;
                border-color:#fff transparent transparent transparent;

            }
        </style>
    </head>
    <body>
        <div class="box arrow"></div>
```





## 精灵图技术（sprites雪碧）

前端图片优化技巧之一

精灵图：多张小图拼合成一张大图

精灵图技术原理：用背景属性插入精灵图 ，用background-position属性移动图片的位置，把想要显示的图片部分显示在大小固定的盒子里

​	

优缺点：

优点： 

1. 减少http请求次数 ，提高代码加载的速度
2. 易替换整体风格

缺点：需要测量





## 文本溢出处理

![](media/文本溢出.png)

## 文本溢出处理

##### 单行文本溢出

实现方法：

```
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```

效果如图：
![dome1](http://www.daqianduan.com/wp-content/uploads/2015/10/dome1.png)

##### 多行文本溢出

实现方法1：

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
 overflow: hidden;
 text-overflow:ellipsis;
```

效果如图：
![dome2](http://www.daqianduan.com/wp-content/uploads/2015/10/dome2.png)

适用范围：
因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；

注：

1. -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
2. display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
3. -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 
4. ==兼容性差==

  

**实现方法2：**

==兼容性比较好 伪元素...加在盒子末尾==

```css
.box2 {
            position: relative;
            width: 150px;
            /* 高度是行高的倍数 显示几行就是几倍数 */
            line-height: 30px;
            height: 90px;
            border: 1px solid red;
            overflow: hidden;
          
        }
        .box2:after {
            content: '...';
            position: absolute;
            right: 0px;
            bottom:0;
            padding-left: 20px;

        }
<h3>方法2</h3>
    <div class="box2">
        海边度假穿搭指南！一件泳衣赚足回头率
        海边度假穿搭指南！一件泳衣赚足回头率
        海边度假穿搭指南！一件泳衣赚足回头率
        海边度假穿搭指南！一件泳衣赚足回头率
        海边度假穿搭指南！一件泳衣赚足回头率
        海边度假穿搭指南！一件泳衣赚足回头率
    </div>

```





# day09

## 表单结构

作用：收集用户信息  

### 表单：

​    作用： 用来收集用户信息；也叫 表单框（表单域form）

```html
<form method=""></form>
```

​        action: 传给后端的地址

​        method: 传给后端的方法

​        GET： 从后端获取数据，数据量比较小，安全性比较低，速度较快

​        POST： 向后端发送数据，数据量大，安全性高，速度较慢

​        name: 表单的标识

### 表单控件:

​          在表单里面，绝大部分的表单控件都是input标签，通过type属性的不同来区分的，表单控件要写在form标签的里面, 不是独占一行的

​    **文本框**

```html
<input type="text">
```

  name:控件字段名字

  value:用户输入的值

​      

​    **密码框**

```html
 <input type="password">
```

​    name:控件字段名字

   value:用户输入的值

​    **提交按钮**

```html
<input type="submit">
```

​        value: 按钮里面的文字

​        没有value属性，默认是‘提交’两个字

​        一旦点击submit，就会将表单里面的内容通过method的方法提交给action的地址

​    **重置按钮**

```html
<input type="reset">
```

​        value: 按钮里面的文字

​        只能清空当前form表单里面的内容

​    **单选框**

```html
<input type="radio">
```

​        name： 给单选框分组的（相同name的单选框是一组的）

​        checked: 默认选中

​        disabled: 禁用状态

​        value: 发送给后端的值

​    **多选框（复选框）**

```html
<input type="checkbox">
```

​        name: 给多选框分组（相同name的多选框是一组的）

​        checked: 默认选中

​        disabled: 禁用状态

​        value: 发送给后端的值

​    **下拉菜单**

```html
<select>    <option value="">131</option>    <option value="">132</option></select>
```

​        value: 发送给后端的值

​        selected: 默认选中

  **多行文本框（文本域）**

```html
<textarea rows="" cols=""></textarea>
```

​        rows: 一共能显示多少行

​        cols: 一行能显示多少字（英文字母）

  **普通按钮**

```html
<button></button><input type="button">
```

## get与post

​    \1. get是从服务器上获取数据，post是向服务器传送数据。

​    \2. get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML，HEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。

​    \3. 对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。

​    \4. get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。

​    \5. get安全性非常低，post安全性较高。但是执行效率却比Post方法好。

**建议：**

1、get方式的安全性较Post方式要差些，包含机密信息的话，建议用Post数据提交方式；

2、在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式；



## 兼容性问题

##### 1、ie8下图片边框问题（记）

```css
<a>
   <img src="">
</a>

解决办法：reset.css
img {
    //取消默认添加的边框
    border:none;
}
```

![](media/ie8图片边框问题.png)





##### 2. ie7下子元素相对定位 父盒子overflow属性失效问题

##### 3. ie6下小高度盒子问题

原因：ie6下有默认行高  

![](media/ie6下小高度问题.png)

##### 4. ie6浮动双边距问题

![](media/ie6双边距.png)

##### 5. ie8下透明度问题（记）

![](media/其他浏览器.png)

#####   背景透明,  内容不透明

```css
background-color:rgba(0,0,0,.3)
```



#####    背景和内容一起透明

```css
opacity:0-1; 0是完全透明 （消失）  1是不透明  
```

##### ie8下透明度显示效果:

![](media/ie8专属滤镜.png)





![](media/ie8解决背景透明内容不透明.png)





## 常见问题（所有浏览器）（记）

##### 图片下间隙问题

盒子>img  图片和盒子多的底边有一个默认的间距

![](media/图片下间隙.png)

```css
 图片下间隙：
        原因：图片具有文本的特性---》 以基线对齐---》 间距就是基底之间距离
        解决办法：
          1. 给父盒子加字体属性
          2. 图片设置除了基线以外的对齐属性
          3. 给图片转块元素 
```



##### 文本框和按钮对不齐

![](media/按钮和文本框对不齐的现象.png)

## css hack（了解）

#### 结构hack(条件hack)(ie10废除了)（记）

![](media/浏览器不支持显示.png)

在ie的低版本里  查询一些盒子或者是样式要不要显示的条件 

```css
  // 在什么地方需要显示 ie8- 条件是： 只要浏览器版本是ie8及其以下就显示这个p 
    
  //   lte: less than or equal 小于或者等于


    <!--[if lte IE 8 ]>
    <p>
        您的浏览器版本太低，可能存在要换的危机 <a href="">UC</a>
    </p>
    <![endif]-->

```



#### css属性hack

```css
.box {
            color: red;
            
             /* ie7及其以下的标识是* */
             *color:orange;
            /* ie6及其以下是蓝色 */
            _color:blue;
             /* ie8-ie9识别\0 */
             color:deeppink\0;

           
           
        }
```



#### 选择符集hack

```css
   /* ie6下识别的类 */
       *html .a {
            background-color: deeppink;
            border-radius: 50%;

        }
        /* ie7下识别的类 */
       * + html .a {
            background-color: springgreen;
            border-radius: 50%;
       }
```





# day10

## BFC规则

### 1. 什么BFC规则？

Block   Formatting   Context 块级格式化上下文   

块级元素的渲染区域规则   BFC盒子 外部不影响内部  内部不影响外部



### 2. 哪些属性可以触发BFC规则？

```
   1. float不为none
   2. position属性为absolute和fixed
   3. oveflow不为visiable 
   4. html 根标签 
```



### 3. BFC有哪些规则

```
   1. BFC盒子内部的子标签按照垂直从上到下排
   2. 共用一个BFC盒子的垂直方向上的外边距会发生塌陷现象
   3. 子标签都会父盒子的左边界停靠，即使浮动元素也如此
   4. BFC盒子内部浮动元素也要参与高度计算
   5. BFC区域和浮动元素不重叠
   6. BFC盒子是一个密闭空间   外部不影响内部  内部不影响外部
```



### 4.解决的问题

2---》外边距塌陷

3---》浮动特性

4---》清除浮动影响

5----》图文不环绕  (p+overflow)



## 经典的多列布局

自适应： 一个盒子的宽度随着屏幕宽度发生变化    单位：%

#### 两列自适应布局

原理： 两列并排  左列固定宽度  右列宽度自适应（100%） 

/* 1.解决方案：左列+ float: left; */

/* 2.解决方案    左列+ position:absolute */

![](media/两列自适应.png)

#### 三列自适应布局

原理： 左右两列固定宽度  中间列自适应 (100%)

![](media/三列自适应.png)

##### 圣杯布局

过程：

三列同时左浮动，中间列写到结构的上面去，利用负外边距把两列放到中间列上，然后利用最外侧大盒子的==内边距==和相对定位把中间列内容居中

##### 双飞翼布局

过程：

原理：三列同时左浮动，中间列写到结构的上面去，利用负外边距把两列放到中间列上，然后利用中间列盒子的==内容盒子的外边距==把中间列内容居中





## 图片优化技巧

减少http请求   降体积 

1. 合适地方选择合适的图片类型 

   jpg 不支持背景透明  装饰性，商品盒子图片 (60-70)

   png 支持背景透明 （精灵图）png-8

   webp 背景透明+ 无损压缩+体积小    不兼容ie8- 

![](media/图片格式.png)

2. 在线压缩工具  压缩图片

3. 小图拼合成精灵图
4. 单一的小图 纯色 ---》字体图标
5. 图片可以采用编码 base64



## 轮播图结构

原理：

![](media/轮播图.png)