# day12  

css3 就是css第3个版本   增加了一些选择器，布局，动画，背景，新盒模型，私有前缀;

## 选择器

#### 表单选择器

##### :focus   聚焦选择器  选择的是当下被聚焦的表单元素

```css
input:focus {}
```

##### :checked 勾选 选择的是当下被勾选的复选框或单选框

```css
input:checked {}
```

##### :disabled  选择的是当前被禁用的元素

##### :enabled 选择的是当前没有被禁用的元素

##### ::placeholder  选择的是文本框里提示的文字 

**案例：修改单选框和复选框的默认样式**

![](media/表单选择器.png)

基本思路：自己写一个小圆圈盖在radio上面 拿负外边距移动上去 原本的radio透明度变为0 



#### 属性选择器[ ]

attr 属性名   value 属性值

==属性选择器的权重值相当于一个类 10==

.a    [class*="sp"] {  color:red; } ===> 10+10

.a   .b { color:yellow}



```css
1.[attr] {}
匹配的是拥有attr属性的元素 
[class] {}  [index] {}  [id]{} [controls] {}

2.[attr="value"]{}
匹配的是有attr属性的并且值为value 
[id="li4"] {}

3.[attr^="value"]{}
匹配的是有attr属性 并且值以value开头的 
[class^="s_"] {}

4.[attr*="value"] 
匹配的是有attr属性 并且值包含value的 

5.[attr$="value"]
匹配的是有attr属性 并且值以value结尾的元素 


```

用在 ==1. 挑选字体图标上  2. 用在挑选表单元素上  3. 用在挑选精灵图元素上 ----》全局挑选== 



#### 结构伪类选择器

##### child 类型

```css
E:first-child {} 匹配的是： E的父元素的第一个孩子 这个元素必须得是E类型 否则挑选失败

E:nth-child(n) {} n=0,1,2,...递增规律  
    E:nth-child(n){}  E的父元素的所有子元素
    E:nth-child(2n){}  E的父元素的所有偶数个子元素 E:nth-child(even){} even偶数
    E:nth-child(2n+1){}  E的父元素的所有奇数个子元素 E:nth-child(odd){} odd奇数

E:last-child{}匹配的是E的父元素 最后一个子元素  这个元素必须得是E类型 否则挑选失败

E:nth-last-child(n){} 匹配的是E的父元素 倒数第n个子元素  这个元素必须得是E类型 否则挑选失败


 
```

==适合于结构简单 单一ul>li...==

##### type类型

```css
E:first-of-type {} 匹配的是： E的父元素里面类型为E的子元素的第一个 

E:nth-of-type(n) {} n=0,1,2,...递增规律  
    E:nth-of-type(n){}  E的父元素的所有类型为E子元素
    E:nth-of-type(2n){}  E的父元素的所有偶数个类型为E子元素 
    E:nth-of-type(2n+1){}  E的父元素的所有奇数个类型为E子元素

E:last-of-type{}匹配的是E的父元素 最后一个类型为E的子元素  
E:nth-last-of-type(n){} 匹配的是E的父元素 倒数第n个类型为E子元素  
```

==适合用于结构复杂的时候==





#### 其他选择器（文本）

```css
1. ::first-letter {}  第一个字符，首字符

2. ::first-line  第一行 

3. ::selection 鼠标选中文本时文本的样式 
   p::selection {      
            color: red;
            background-color: yellow;
    }

4. :not(){} 非，除了，没有，不是 
   div.box  :not(p) {}匹配的是div.box里面的除了p类型的其他子元素

5. :root {} 根元素 后期定义css变量 

6. :target {} 匹配的是当前被激活的锚点 
7. :empty {} 匹配的是空元素（内部没有内容的元素）
```



## css3私有前缀

-webkit-border-radius:50%;

-ms-border-radius:50%;

-o-border-radius:50%;

-moz-border-radius:50%; //私有属性

border-radius:50%;//标准属性

| 浏览器  | 内核         | 私有前缀 |
| ------- | ------------ | -------- |
| Chrome  | Webkit       | -webkit- |
| Safari  | Webkit       | -webkit- |
| Firefox | Gecko        | -moz-    |
| IE      | Trident      | -ms-     |
| Opera   | Presto-Blink | -o-      |

==作用： 为了让低版本浏览器支持当时还未被纳入标准的css属性==

弹性盒，盒子阴影，文字阴影，文字转换，动画,新增的背景属性....





## 新盒模型

传统盒模型：  W = width + padding-left + padding-right +border-left +border-right +margin-left +margin-right;---->==外扩型==  ----》溢出---》需要内减计算



新盒模型： W = width (content-width+padding+border)--->内减型   所以不需要内减 

```css
div {
    box-sizing: border-box新 /content-box传统盒模型(默认值)
}
```



## css3新增的背景属性

##### 多背景属性

```css
background-image:url(./a.jpg),url(./b.jpg),url(./c.jpg)....;a在最上面 b在中间  c在最下面
background-repeat:no-repeat;
background-position:0px 0px,100% 0% ,0% 100%;
background-size:40px 100px,50px 100px,45px 50px;
```

##### 背景初始放置区域

```css
background-orgin: border-box边框起始的位置/content-box内容初始位置/padding-box内边距初始的位置
```

##### 背景裁剪区域

```css
background-clip:border-box溢出边框外侧的切掉/content-box溢出内容外侧的切掉/padding-box溢出内边距外侧的切掉;
```

##### 背景尺寸属性

```css
background-size: wpx hpx / w% h% /cover /contain;

cover:铺满背景盒子 但是不保证内容完整显示 (以最长边 )
contain:保证内容完整显示 但是会铺不满 留白(以最短边 )
```

##### 背景渐变属性

给一个盒子添加背景渐变颜色 ---》background-image:

##### 线性渐变 

![](media/渐变方向环.png)

```css
background-image:linear-gradient(方向,颜色1 停止位置,颜色2 停止位置....);

方向:度数  0deg 从下到上  180deg 上---》下  从左到右90deg  
```

##### 文本渐变

```css
 background-image: linear-gradient(90deg,#30d28e,#7abd2c);
       
            color: transparent;
               /* 未标准  webkit私有属性 */
            -webkit-background-clip:text
            /* 除文字剪裁 */
```





##### 径向渐变

```css
background-image:radial-gradient(形状  大小  中心位置 , 颜色1 停止位置, 颜色2 停止位置,....);

形状： circle圆（正，长---》圆）/ellipse椭圆（正---》圆，长---》椭圆）

大小 ：最近角 closest-corner   最远角 farthest-corner 最近边 closest-side 最远边farthest-side

中心位置 at xpx ypx / at x% y% 


```





## css3新增的盒子阴影

##### 盒子阴影

```css
box-shadow: h-shadow  v-shadow blur size color [inset];

h-shadow水平阴影 -px  水平左侧  +px水平右侧  

 v-shadow 垂直阴影  -px 垂直上侧 +px垂直下侧
 blur 模糊距离 px
 size 阴影四个方向的尺寸大小px

color 阴影的颜色
[inset] 写就是盒子内侧阴影 不写就是外侧阴影


```





##### 文字阴影

```css
text-shadow: h-shadow  v-shadow blur  color ;

h-shadow水平阴影 -px  水平左侧  +px水平右侧  

 v-shadow 垂直阴影  -px 垂直上侧 +px垂直下侧
 blur 模糊距离 px

color 阴影的颜色

  /* 右下 , 左上 */
  text-shadow: 10px  10px 20px  red ,-10px -10px 20px gold;

```

**凹凸 文字**

![](media/auto.png)

```css
au:  text-shadow: 1px  1px 1px  #fff ,-1px -1px 1px  #000; 
tu:   text-shadow:1px  1px 1px  #000 ,-1px -1px 1px  #fff; 
```





