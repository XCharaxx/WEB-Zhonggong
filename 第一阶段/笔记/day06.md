# day06

布局核心： 盒模型（间距）   浮动 （并排）   定位  （覆盖+ 特殊位置）

## 定位类型position

#### 静态定位

```css
position:static; 默认值
```

静态定位不能使盒子位置变化 不适合布局

 作用：解决低版本浏览器兼容问题 

#### 相对定位

```css
position:relative;
```

1. 1. 能不能使盒子发生位置变化 yes

​         2. 参考对象：自身初始位置

​         3. 脱离不脱离标准流 不脱离标准（保留原来位置 ）

​         4. 是否适合布局：不适合布局（压盖，特殊位置）因为会留空白

​        **作用：1. 微调元素的位置（相当于外边距）  2.辅助绝对定位(子绝父相)** 

#### 绝对定位

```css
position:absolute;
```

1. 能不能使盒子发生位置变化 yes

2. 参考对象：body和浏览器可视窗口（看盒子随着滚动条动不动  不动---》浏览器  动---》body）

​       ==最终确定： 以body做参考(左上以body参考 右下以浏览器窗口做参考)==

3. 是否适合布局：非常适合布局 （压盖）不仅脱离标准流 还脱离文本流 



#### 固定定位

```css
position:fixed;
```

1.  能不能使盒子发生位置变化 yes

2. 参考对象： 浏览器可视窗口--->不随滚动条滚动而滚动

3. 脱离不脱离标准流 脱离标准流

4. 是否适合布局：适合 有限制的布局：不随滚动条滚动而滚动的布局

#### 定位实现盒子的水平和垂直居中

##### 方法1：

```css
div {
    position:absolute/fixed;
    //向右走父盒子宽度的一半
    left:50%;
     //向下走父盒子高度的一半
    top:50%;
    //向上走自身高度的一半
    margin-top:-h/2;
     //向左走自身宽度的一半
    margin-left:-w/2;
    //要求这个盒子必须有明确可以计算的宽度 ，高度
    width:wpx;
    height:hpx;
}
```

##### 方法2：

```css
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin:auto;
            width: 50px;
            height: 50px;
            background-color: yellow;
```



==两个方法都是有前提的：要求这个盒子必须有明确可以计算的宽度 ，高度!!!!==

## 定位坐标值



```css
left:定位元素左侧边界距离参考对象左侧边界的值
top:定位元素上侧边界距离参考对象上侧边界的值
right:定位元素右侧边界距离参考对象右侧边界的值
bottom:定位元素下侧边界距离参考对象下侧边界的值


(left ,top )  or (right ,top) or (left ,bottom) or (right,bottom
一个坐标即可确定盒子位置
```

![](media/定位值分析.png)



定位使用： 1.明确定位类型    2.定位坐标值 







### 层级属性（相对，绝对，固定）

```css
z-index: 设置定位盒子的显示顺序 值越大 越向上展示（越在屏幕前的显示）默认值是0 

标准流盒子的层级属性 z-index:0;
          /* 被标准流盒子压盖的时候 */
            z-index: -1; 
```





#### 总结：

| 定位类型 | 是否发生位置变化 | 参考对象                      | 适合布局             | 是否脱离标准         |
| -------- | ---------------- | ----------------------------- | -------------------- | -------------------- |
| static   | no               | 无                            | 不适合               | 无                   |
| relative | yes              | 自身初始位置                  | 不适合               | no(因为保留原来位置) |
| absolute | yes              | 初始body,子绝父相（父级元素） | 非常适合             | 是（不占据界面位置） |
| fixed    | yes              | 浏览器窗口                    | 适合（不滚动的盒子） | 脱离                 |



### 脱标的定位属性对于元素类型的影响

行内+定位（absolute+fixed）---->不区分类型 私有密闭的区域 （BFC盒子） 什么属性都可以设置

行内块+定位（absolute+fixed）---->不区分类型 私有密闭的区域 （BFC盒子） 什么属性都可以设置

块类型+定位（absolute+fixed）---->不区分类型 私有密闭的区域 （BFC盒子） 什么属性都可以设置





## 显示和隐藏

#### 第一种：

```css
display:block显示/none隐藏
```

不保留原来位置（在HTML结构树直接移除掉） ==不频繁切换显示和隐藏==

#### 第二种：

```css
visibility:visible显示/hidden隐藏
```

保留原来位置（在HTML结构树上还是有的  透明度为0）==频繁切换显示和隐藏==

## 盒子溢出处理

```css
overflow:hidden/visible/auto/scroll;
            /* overflow: visible;默认值 */
            /* 隐藏掉 */
            /* overflow: hidden; */
            /* 溢出不溢出 都显示滚动条 但是溢出显示滑块+滚动条 */
            /* overflow: scroll; */
            /* 溢出 显示滚动条 不溢出 不显示滚动条 */
            /* overflow: auto; */
            overflow-y: auto;
            overflow-x: hidden;
```





## 圆角边框属性

```css
border-radius:10px; 四个角都是10px弧度
border-radius:10px 20px; 左上和右下角10px  右上和左下20px
border-radius:10px 20px 30px 左上10px  右上和左下 20px 右下30px
border-radius:10px 20px 30px 40px;顺时针 

border-radius:50% 圆，椭圆;

border-radius:10px 20px 30px 40px/40px 30px 20px 10px;
                    水平切线长度/垂直切线的长度

```

