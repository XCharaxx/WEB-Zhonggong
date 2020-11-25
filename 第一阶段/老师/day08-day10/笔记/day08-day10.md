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

