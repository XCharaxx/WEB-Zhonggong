## 复习

1、字体样式

text-align:center 文字水平居中

line-height:盒子高度; 垂直居中

color : red; 文本颜色

font-size : 30px;  字体大小

2、阴影

box-shadow: 水平 垂直 模糊度 颜色;
box-shadow: 0px 0px 10px red;

3、透明颜色

rgba(0,0,0,0.5)
rgba(255,255,255,0.5)
rgba(255,0,0,0.5)

4、左浮动
float:left;

5、外边距

margin:50px auto;  盒子水平居中
margin-top
margin-bottom
margin-left
margin-right

6、过渡动画

transtion:属性名  时间  匀速  延迟时间;

transition:1s;  // 默认属性名 all 
transition:width 1s linear, height 2s linear;

7、变形原点

transform-origin:水平(left/center/right/50px/-50px)  垂直(top/center/bottom/50px/-50px);

8、选择器

```
    <!-- 类选择器 -->
    .box{ width:100px;height:100px;  }
    .red{ background-color:red;  }
    .yellow{ background-color:yellow;}

    <div class="box red"></div>
    <div class="box yellow"></div>


    <!-- 后代选择器 -->
    .box .item{  ... }

    <div class="box">
        <div class="item"></div>
    </div>

     <div class="item"></div>


     <!-- 状态伪类选择器 -->

     .box:hover{
         ...
     }   

     .outer:hover .box{
         ...
     }


     .item{      }
     .item:nth-child(1){

     }
     .item:nth-child(2){

     }
     ...
    
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
```

- 图片

```
    .pic{ ... }
    img{ ... }
    <img src="图片地址" class="pic">
```



## 3d旋转
```
transform:
    rotateX(deg) 绕X轴旋转，正值顺时针，负值逆时针
    rotateY(deg) 绕Y轴旋转，正值顺时针，负值逆时针
    rotateZ(deg) 绕Z轴旋转，正值顺时针，负值逆时针
    rotate3D(x-d,y-d,z-d,deg) 绕x,y,z轴同时旋转，d表示转动的方向 （0表示不转，1表示顺时针，-1表示逆时针）,deg是共同转动的角度
```

## 视距
- 视距是指观察者与视图的距离，设置视距的目的是让3d变形的元素呈现立体效果

```
    body{
        perspective:1000px;   /*  600-2000 */
    }
```