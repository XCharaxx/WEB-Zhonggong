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

| 浏览器         | 内核             |
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



