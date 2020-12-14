# day14

## 弹性盒布局css3(伸缩盒布局)

### 传统布局的局限性

1. 清除浮动影响 

2. 很难实现居中 
3. 结构不灵活  不能随时添加盒子 

### 弹性盒布局

非常灵活   提供一套浏览器内置布局  特点：一维布局   固定的css属性  

![](media/弹性盒兼容性.png)

==决定了 这个布局一般用在移动端==

![](media/弹性盒认识.png)

### 加在弹性父盒子身上的属性

#### 1. 声明弹性盒

```css
-webkit-display:flex;
display:flex;
```

#### 2. 设置主轴方向

```css
flex-direction:row水平（默认）/row-reverse水平反向/column垂直/column-reverse垂直反向
```

#### 3. 设置主轴方向的排列方式

```css
justify-content:flex-start 左对齐/flex-end右对齐 /center居中/space-around两端间距等于中间的一半/space-between两端对齐中间间距等分/space-evenly间距等分;
```

#### 4. 设置交叉轴方向的排列方式（单行去用）

```css
align-items:flex-start上对齐/flex-end下对齐 /center居中/baseline基线对齐/stretch延伸，占满;
```



#### 5.换行属性

前提： 不想自动收缩的时候  ，子项宽度>父盒子宽度

```css
flex-wrap:wrap/nowrap/wrap-reverse;
```



#### 6.复合写法

```css
flex-flow:flex-direction  flex-wrap;
```





### 加在子项身上的属性

#### *flex属性 

```css
flex:flex-basis flex-shrink flex-grow;

flex-basis: 子项的宽度(auto)  基础宽度属性 

flex-shrink:子项占据弹性父盒子的溢出空间的比例 （子项宽度和>父盒子宽度的时候）  默认值为:1

flex-grow: 子项占据弹性父盒子的剩余空间的比例 （子项宽度和<父盒子宽度的时候）默认值:0


flex:auto 1 0;默认值

99%情况 剩余空间  flex:auto  1 n; ===> flex:n;


```



#### order排序属性

设置各自的排列顺序

```css
order:n;
```

#### 子项自己在交叉轴的排列方式

```css
align-self:flex-start上对齐/flex-end下对齐 /center居中/baseline基线对齐/stretch延伸，占满;
```



### 单独记忆:(了解)   多行去用

#### 所有子项在交叉轴的对齐方式

```css
align-content:flex-start 左对齐/flex-end右对齐 /center居中/space-around两端间距等于中间的一半/space-between两端对齐中间间距等分/space-evenly间距等分;
```





## LESS语言

介绍一下你自己:  我是css的升级  我不是为了取代css  我是为了扩展css语言  我是动态语言 具有编程语言特性的语言  我比css好在 我可以计算，可以预定义一些你今后要用的值  ，嵌套，传参，----》

好处:编码速度会提高,维护相对容易   主旨： less  is more



新建 .less ---> 浏览器不认识.less --->编译(.less--->.css)--->浏览器认识啦！



### 编译方式:

#### Koala 考拉 

缺点：弹框 提示错误 

#### EasyLess

缺点：设置一下.css文件路径   稍微有点卡  重新导入



### 1. 变量

  方便的去保存和获取数据  --->其实就是一个名字保存一个值  这个名字就叫变量

```css
@变量名:变量值;
@w:1000px;
@maincolor:skyblue;

使用:
.box {
    width:@w;
    height:200*2px;
    background-color:@maincolor;
}
```



### 2.类混入

```css

级别1:
.a {
    width:200px;
    height:200px;
    bgc:red;
    .br;
}
.b {
    .a;
    bgc:blue;
    opacity:0.8;
    .br;
}

定义一个圆角边框类

.br {
    border-radius:50%;
}
```

```css
级别2：
.br(@a) {
    border-radius:@a;
}


.b {
    .a;
    bgc:blue;
    opacity:0.8;
    .br(10px);
}
```

```css
级别3:
.br(@a:50%) { //@a:50% 默认值 调用.br()不传递参数相当于使用默认值
    border-radius:@a;
}


.b {
    .a;
    bgc:blue;
    opacity:0.8;
    .br();//采用的默认值 50%
}
.c {
    .br(3px);//3px 
}
```

**例子：**

```css
定义盒子阴影类 
.bs(@h,@v,@blur,@size,@color) {
   // box-shadow:@h @v @blur @size @color;
      box-shadow:@arguments;//实际参数列表 代表上面的5个实参
}

.box {
    .bs(0px ,0px ,10px,0px,red);
}


.bs(@str,@color) {
 
      box-shadow:@arguments;
}
// @str: 0px 0px 10px 0px
    
.bs(0px 0px 10px 0px,red)

```











