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

作用： 移动盒子位置  (上和左外边距) 右下外边距不可以移动盒子位置，但可以将盒子与其他盒子的距离拉开，外边距可以设置负值。

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



*{

magin:0;

padding:0;

}





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