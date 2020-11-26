# day02

全部掌握

1. 超链接
2. 列表系列 
3. 表格结构
4. 引入CSS
5. 三个方法的区别 
6. css选择器  （基础）
7. css文本属性



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