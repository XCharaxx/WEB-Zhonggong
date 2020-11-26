# day01

## 前端开发

用前端技术实现用户界面

前端技术：基础三大要素  html5   css3   javascript +js衍生物（vue,react,angular框架,node.js）

用户界面:pc端 + 移动端app （页面+交互+数据渲染）



## 发展史

web1.0阶段   蒂姆·伯纳斯·李 [1]  （Tim Berners-Lee）   界面：只能读 不能写

web2.0阶段  布兰登·艾奇（Brendan Eich，1961年～） JS  有了交互  只能读 还能写 建设者

web3.0阶段（大前端） 09年  Ryan Dahl



## 浏览器及其内核

浏览器=外壳+内核

五大浏览器 ：

| 浏览器         | 内核            |
| -------------- | --------------- |
| IE             | Trident         |
| FireFox(火狐)  | Gecko           |
| Safari（ios）  | Webkit          |
| Chrome（谷歌） | Webkit--->Blink |
| Opera(欧朋)    | Presto-->Blink  |



## HTML语言

编辑器(vscode,hbuilder,webstrom...)---->a.html --->浏览器 



!+ enter --->创建模板



HTML  结构   负责网页有什么 

CSS     样式    负责的是这些东西长什么样子

JS        行为    交互+数据渲染



HTML:  Hyper 超 Text 文本  Markup 标记 Language  语言

1. 不是编程语言 标记语言  
2. 超  文本   .txt  --->字符    .html--->不光写字符  写图片，音频，视频，动画       超文本传输协议





### 写法：

起个名字   图片 img 

img  + src  

<img   src="./image/a.png"> <> <>

#### 双标记 ，闭合标记

```html
<标记名字>内容</标记名字>
<开始>内容</结束>
```

```css
<name  属性名="属性值" 属性名="属性值" ....>内容</name>  元素 
```

#### 单标记

```html
<标记名字 属性名="属性值" 属性名="属性值" >
```



### 注释

html   <!--注释文字-->  快捷键  ctrl+/ 

单行   //注释文字

多行/*注释文字*/



## 文本相关的标记

#### 标题

```html
<h1>标题内容</h1>  有且只有一个 一般用在logo
<h2>标题内容</h2>
<h3>标题内容</h3>
<h4>标题内容</h4>
<h5>标题内容</h5>
<h6>标题内容</h6>
```

#### 段落P

```html
<p>近来围绕美国大选结果等问题，特朗普和拜登的支持者在美国多地集会持续对峙。当地时间13日，双方支持者再次来到华盛顿白宫外抗议示威，并发生激烈的言语冲突。</p>
```

#### 图片标记

```html
<img src=""  alt=""  title="" width="" height="">
src:图片路径

绝对路径
    1. 网络图片
    2. 本地绝对路径 D：...C:\Users\Administrator\Desktop\1109\老师的\day04\images

相对路径
    根目录 / （编辑器里打开的文件夹的顶级目录）
    同级目录 ./ 或者不写
    上一级 ../ 跳出一个文件夹
    上上级 ../../跳出2个文件夹
    <img src="./image/timg.jpg" alt="">
    <img src="../资料/timg.jpg" alt="">


alt: 当图片加载失败的文本提示

title:鼠标悬停时的文本提示


width:宽度  等比例缩放  3:2  
height:高度
```



### 修饰文字（了解）



#### 加粗

```html
<b>adsaudf</b> bold 非语义标签
<strong>safsf</strong> 语义化标签  装重要的 强调的文字  希望被爬虫抓取
```



#### 斜体

```html
<i>斜体文字</i> italic 斜体
<em>斜体文字</em>  语义化标签
```



#### 下划线

```html
<u>aefresf</u>
<ins>ftrewtet</ins>语义化标签
```



#### 中划线

```html
<s>99.00</s>
<del>99.00</del>语义化标签
```



#### 换行

给段落内的文字换行

```html
<br> break
```



#### 水平线

```html
<hr color="red" align=""  width="300px">

align 水平对齐方式 left 左对齐  right  center居中
```





### 字符实体

版权符  人民币符  >  <  .  ""    ---》Unicode编码

 人民币符 &yen;

```html
&yen;  人民币符号
&copy;版权符 
&gt; 大于号
&lt;小于号
```





## 布局标签

大盒子大容器  大区域

```html
<div></div> 可以装div,img  p hi....
```

小容器 小盒子 小区域

```html
<span></span> 可以装几个字 小图标 非常小的图片
```


## 超链接

链接  anchor 锚点

```html
<a href='跳转的地址'>文本or img or div </a> 
```

属性：

href:跳转地址

target:设置打开方式

```html
target:_self本页/_blank空白页，新页
```

**base标记**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 配合超链接使用  做全局的设置 href用来设置相同的基础地址  target用于设置统一的打开方式-->
    <base href="https://shop.mogu.com/detail/" target="_blank">
</head>
```



**锚点功能**

超链接跳转到某一个界面的某一个部分

1. 先要给链接的部分加一个id属性  起一个id值
2. 在a链接里href="#id值"    如要跳转到其他界面的某一个部分 则 href="界面地址#id值"



## 列表系列



### 无序列表

![](media/wxlb.png)

```html
ul>li*n
type:标识的类型  
 <!-- type:square正方形 /circle空心圆  /desc实心圆 /none没有 -->
   <ul type="">
       <li>无序列表数据项</li>
       <li>无序列表数据项</li>
       <li>无序列表数据项</li>
       <li>无序列表数据项</li>
       <li>无序列表数据项</li>
   </ul>
```



### 有序列表

![](media/yx.png)

```html
<!-- type: 1 /a/A/I/i  start="数字" -->
   <ol type="1" start="6">
       <li>数据项1</li>
       <li>数据项2</li>
       <li>数据项3</li>
       <li>数据项4</li>
       <li>数据项5</li>
   </ol>
```



### 自定义列表

![](media/zdy.png)

```html
<!-- dl define list > dt title + dd data-->
   <dl>
       <dt>购物指南</dt>
       <dd>购物流程</dd>
       <dd>购物流程</dd>
       <dd>购物流程</dd>
       <dd>购物流程</dd>
       <dd>购物流程</dd>
   </dl>
```





## 表格结构

二位结构  水平（行）   垂直（列）



![](media/table.jpg)

==宽度和高度自己适应结构==

```html
  <table  border="1px" cellpadding="0"  cellspacing="0" style="border-collapse:collapse"
   
   align="center"  width="500px" height="300px" >

    <tr bgcolor="red">
        <td>姓名</td>
        <td>基本工资</td>
        <td>岗位工资</td>
        <td>补助</td>
        <td>其他</td>
    </tr>
    <tr align="center">
        <td bgcolor="yellow">马杰伦</td>
        <td >800</td>
        <td>100</td>
        <td width="200px">0</td>
        <td>0</td>
    </tr>
    <tr align="center">
     <td>朱德华</td>
     <td>2000</td>
     <td>500</td>
     <td>50</td>
     <td>0</td>
 </tr>
 <tr>
     <td>张荣浩</td>
     <td>3000</td>
     <td>1000</td>
     <td>1000</td>
     <td>0</td>
 </tr>  
</table>
```



**默认属性** 

​     border:边框 border="1px" 

​     cellpadding:单元格内部边框和内容的距离

​     cellspacing: 单元格与单元格之间的距离

​     align:水平对齐方式 left right center 

​     (1)写在table里  那就是表格大盒子对齐

​     (2)写在td单元格里 那就是单元格内容对齐  不要一个个的给td加 应该加在tr身上

​     width:宽度

​     height:高度

​    bgcolor：背景色  table or tr or td 

​    css属性: border-collapse:collapse细线边框属性

****



**合并属性**

跨行合并  

rowspan ="n"  n你要合并的行数  rowspan="2"

**删除个数=合并的列数-1**



跨列合并 

colspan="n" n你要合并的列数  colspan="3"



**应用**

原始：布局（淘汰）

目前：装文字的多行多列



## css语言

层叠样式表 

内容：文本样式，布局，选择器，动画，背景插入图片...

功能：美容师

特点：没有逻辑  不能计算



### 引入方法(html文件里)

三个

css属性写法  

{  

   属性名：属性值;

  属性名：属性值;

  属性名：属性值;

  属性名：属性值;

 ......

}
                                          
##### 行内引入

```html
 <div  style="width:200px;height:200px;background-color: slateblue;">
       div元素
    </div>
```

缺点：1.代码冗余  2.结构不清晰  3. 后期维护困难

优点：

##### 内部嵌入

```css
  <!--内部 嵌入 -->
    <style>
          * {
             color:tomato;
         }

         p {
               font-size: 30px;
         }
         .list-data {

             font-size: 22px;
             color: springgreen;

         }
         .first {
             color: #000;
         }

         #one {
            color: #000;
         }      

    </style>
</head>
```

缺点：1.没有形成结构与样式相分离 不利于后期代码复用和维护

##### 外部链接

```css
1.创建一个.css文件
2.把css样式代码写入文件里
3.引入 head>link
```

缺点：无

优点：彻底形成分离   复用 +  好维护

导入



#### 优先级

行内 > 内部嵌入 >外部引入

行内:js获取行内样式是非常方便的    优先级高  覆盖外部样式  ，内部嵌入

内部嵌入:覆盖公共样式文件里的样式 common.css



# day03

1. 文本相关的css属性
2. 元素的分类与转换
3. 布局核心---》盒模型

在线的css手册网址:

http://css.cuishifeng.cn/text-decoration-line.html

## 文本相关的css属性

字体大小  颜色  字体粗细 字体斜体正体  字体类型  行高  （行间距）  水平对齐方式   垂直对齐方式   字符间距

词间距    文本格式化输出   首字母操作  缩进    文本修饰 



### 字体属性

```css
font:字体是否是斜体  字体粗细   字体大小/行高    字体类型;

字体是否是斜体 font-style:normal正/italic 斜体/oblique斜体

font-weight:100-900 100最细  900最粗  400正常  >400粗  <400细 

font-size: px /em/rem/%;  字体大小不写%   最小12px 默认16px 

字体类型 font-family:Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;


font:  14px/1.5   Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;



```

#### 字体类型，家族

规则：

1. 你要给多个选项 以,隔开

2. 你要两个字体 中文字体+英文字体

3. 汉字字符 一般不建议直接写汉字  “宋体”(不好)--"\5B8B\4F53"(好)

4. 中文字体加"" or ''   如果字体是两个单词 那么也要加“” or ''  

   

5. ![](media/sans-serif.png)  

#### 单位尺寸

px / % /em /rem

```css
px: 绝对单位  width:300px;
%   相对单位   width:80%; 相对父元素 

em  相对单位 当自己没有字体大小属性的时候 相对于父元素的字体大小  当自己有的时候那就相对于自己  
.a >.b  ,a{font-size:12px}  .b: width:20em; .b:240px
                 

rem 相对单位 相对于html根标签的字体大小 .a>.b .a:width:20rem  .b:width:16rem;
```





### 行高line-height

一行文字的高度（看文字的四条线）

![](media/文字四条线.png)

行高 = 行距+字体大小   line-height=行距 + font-size   行高在垂直方向移动文本

==单行文本水平居中和垂直居中==

```css
text-align:center;//水平居中
line-height:盒子高度;//垂直居中
```





### 文本水平居中

```css
text-align:center居中/right右对齐/left左对齐
```

### 文本变形

```css
text-transform:none/uppercase大写 /lowercase小写 /capitalize首字母大写
```

### 文本修饰属性

```css
text-decoration:none没有线/overline上划线/underline下划线/line-through中划线;
```

### 缩进

用在p 装一大段文字

```css
text-indent:32px/2em; 32px向右 -32px向左
```

### 文本格式化输出

```css
white-space:normal 正常输出 /pre-wrap换行(pre一样) /nowrap不换行 /pre 格式化输出（空格+换行）

white-space:nowrap强制一行显示！！！！！！！
```

### 词间距(中文没有间距)

```css
word-spacing:npx;
```

### 字间距

```css
letter-spacing:npx;
```

### 垂直对齐（图文对齐）

```css

    <style>
        img {
            width: 200px;
            /* 垂直对齐属性  vertical-align:top顶线/middle中线/baseline基线/bottom底线 
            
              图文默认以基线对齐---》图片在上 文字在下
            */

            vertical-align: bottom;
        }
    </style>
</head>
<body>
    <img src="./image/timg.jpg" alt="">
    <span>yyggaaxxxfff</span>
```



### 颜色

```css
1.red,yellow,blue....不用


2.16进制  6位16进制 #6位16进制  16进制(0-9 A-F)
#000 黑色 2位为一组  #xxmmnn xx红色 mm绿色  nn蓝色 #xmn #334455--->#345
#fff白色 #ff0000 #ff1225 红色
#333


3.rgb(red,green,blue) 写10进制 00---ff   0---255
rgb(0-255,0-255,0-255) 

rgba(red,green,blue,alpha)alpha透明度 0-1  1完全不透明 0完全透明  
rgba(255,0,0,.5)红色透明度为0.5
```





## 元素的分类与转换

元素分类大致三类：（与布局相关）

#### 块类（display:block）

div,p,h1~h6,ul li ,ol li ,dl dd dt ...

特点：

1. 宽度是默认100%  高度由内容撑开  可以设置宽高
2. 独立成行 一行一个垂直放置 （霸道） 
3. 行高撑开盒子高度



#### 行内类display:inline

span,em,i,strong,b,ins,u,... ==a==

特点：

  1.宽度高度取决于内容的大小  设置宽高不起作用

2. 并排放置  放不下会换行
3. 中间有默认间距 （一个空格）原因？ 行内元素具有文本特性
4. 设置行高撑不开盒子高度 

#### 行内块类display:inline-block

img

特点：

1. 可以设置宽高
2. 并排 
3. 中间有间距（行内块元素具有文本特性 图片居中可以用text-align:center）
4. 不可以设置行高 





### 元素转换

```css
display:block 块
display:inline;行内
display:inline-block;行内块
```



## 布局核心---盒模型

盒模型： 描述网页上盒子所占据的区域  

组成: 盒模型 = 外边距margin  + 内边距 padding  +边框border  +  有效内容区域width,height

盒模型宽度  = 左右外边距 +左右内边距 +左右边框  +有效内容宽度



### 外边距margin

作用： 移动盒子位置  (上和左外边距) 右下外边距不可以移动盒子位置

margin-left:-px 向左移动 +px向右

margin-top:+px 向下移动  -px向上

```css
margin:10px ;四个方向都是10px
margin:10px 20px; 上下10px 左右20px
margin:10px 20px 30px;上10px 左右20px 下30px
margin:10px 20px 30px 40px;顺时针 上由下左


margin-left:10px;
margin-right
margin-top
margin-bottom:

margin:0 auto;盒子水平居中
```

==盒子水平居中实现==

```css
margin:0 auto;盒子水平居中
```

前提:

1. 必须块类型
2. 必须有明确宽度 (px,%)





## 内边距padding

作用;设置内容与边界的距离

```css
padding:10px;
padding:10px 20px;
...四个方法  


padding-left:
padding-right
....
```

-==加了内边距 扩大盒模型 盒子可视区域增大 需要内减  减到宽高身上即可！！！！==



# day04



1. 盒模型 组成以及用法
2. 背景属性
3. 语义化理解
4. 选择器进阶 ，优先级计算

## 外边距margin

使用：  上外边距可以使盒子向下移动   左外边距可以使盒子向右移动  右下外边距不能使盒子发生移动  只能将这个盒子与其他盒子的距离拉开    外边距可以设置负值  



```css
margin:10px;

margin: 0 auto ;水平居中（1.块类型 2.明确可以计算的宽度）
```





## 内边距padding

使用：上下左右内边距全部有用  移动内容位置

==加了内边距必定会增大盒模型  做内减计算  减在有效内容宽高==





## 边框border

内外分割线

```css
border:1px solid springgreen;

1px 边框宽度
solid 边框的形式 实线  dashed虚线  dotted小圆点  double双实线 

颜色  #677777  rgba()  rgb() 

边型必须写 ！！！其他两个可以省略！

          border-width:10px;
          border-style:solid; 
          border-color:yellow;



         border-width:10px 0px 0px 40px; 上10px 右0px 下0px 左40px
         border-style:solid double dashed dotted;
         border-color:red yellow blue orange;
```

==边框也可以撑开盒子！！！！需要内减计算==





### 用法：实线三角形

边框交界形成分割线 

```css
       .box {
            width: 0px;
            height: 0px;
            /* transparent 透明色 */
            /* border-top:50px solid red;
            border-left:50px solid rgba(0,0,0,0);
            border-right:50px solid rgba(0,0,0,0); */
            /* border-bottom:50px solid rgba(0,0,0,0); */


            /* 上有下左顺时针 */

            border-width:50px 50px 0px 50px;
            border-style: solid;
            border-color:red transparent transparent transparent ;
        }
```





## width,height

```css
width:100px/100%/20rem/20em;

width:auto; 自动的 当你不写盒子宽度的时候就是auto 
height:auto ;自动的 当你不写盒子高度的时候就是auto 内容撑开 
```

**width:100%和 width:auto的区别**

```css
width:100% 取父盒子有效宽度为自己的宽度 盒子有内边距时可能会发生溢出
width:auto 浏览器有一个默认行为 会自动的把内边距和边框算到width里 ---》不溢出
```



## 外边距塌陷（了解）

浏览器默认问题，只发生块类型元素的上下外边距 

### 父子嵌套塌陷

![](media/父子关系塌陷.png)

### 兄弟上下塌陷



![](media/兄弟关系塌陷.png)

## 背景属性

插入图片 img src  ,css 属性插入图片

```css
div {
   
    width:100px;
    height:100px;
    //背景属性
    background:
    
}
```

```css
background:图片路径url()  是否平铺   位置/尺寸   是否随着滚动条滚动 背景颜色;


图片路径 background-image:url(./image/a.jpg);
是否平铺 background-repeat:no-repeat不平铺/repeat 平铺（默认） /repeat-x 水平/repeat-y垂直;

位置 background-position:npx mpx/n% m% / right bottom or left top or center center ;


尺寸 background-size:wpx hpx /w% h% 相对于背景盒子;

是否随着滚动条滚动:
background-attachment:scroll(默认)/fixed;
fixed: 图片固定在背景盒子上 不随内容滚动  改变了背景图参考对象 变为可视区域

背景颜色background-color:rgba()/rgb()/#ffacdc
```



#### 背景案例

![](media/jd_bg01.png)

![](media/背景案例02.png)

## css选择器进阶

基础选择器 *  tagName  class id 

### 父子关系选择器

##### 后代选择器

```css
E F {
    
} 匹配的是E的后代元素  类型为F类型
.box span {
    
}
```

##### 子代选择器

```css
E > F {
    
}匹配的是E元素的直接子代 类型为F类型
```

适应场所：多级列表嵌套时

### 兄弟关系选择器

##### 兄弟选择器

```css
E ~ F {}匹配的是E的相邻的下面的兄弟元素 类型为F类型
```



##### 相邻选择器

```css
E + F {}匹配的是E 的紧紧相邻的下面的兄弟元素 类型为F类型
```





### 数学关系选择器

##### 交集选择器

```css
EF {} 匹配的是既是E类型又是F类型的元素 
.a {}
div.a {}
p.a {}
```

##### 并集选择器

```css
E ,F ,C ,D .... {}匹配的是既是E 还有F 还有C 还有D... 
```



### 选择器优先级

| 选择器类型         | 优先级（权重） | 写法                                               |
| ------------------ | -------------- | -------------------------------------------------- |
| 行内样式           | 1000           | <div style=""></div>                               |
| id选择器           | 100            | #id值{}                                            |
| class              | 10             | .class值{}                                         |
| TagName标签名      | 1              | tagName {}                                         |
| * 全局             | 0              | * {}                                               |
| 继承属性，默认分配 | 无             | text-(除了text-decoration),font-,line-,color,list- |

复合选择器应该怎么计算优先级值?

复合选择器 = 基础选择器的和（不计算关系符号）;

.a .b {

}优先级 10+10

.a > .b {

}优先级 10+10





## 语义化

em,strong,ins,del,h1~h6..

什么是语义化？用合适的标签表示合适的内容 

作用？

![](media/语义化.png)

