# day13

动画： 过渡， 变形， 关键帧动画



## 过渡

从一个状态到另外一个状态 （两个状态的连接  最初，最终）的变化  ，并且时间的持续

```css
transition: 要过渡的属性  持续时间s/ms  运动的曲线  延时的时间s/ms;

transition: width  2s  linear 0s;


 transition: all 1s linear 2s;

 transition:width  2s linear 0s ,height 1s linear 0s ,background-color .5s linear 0s ; 
```

**运动的曲线**

linear 匀速    ease 默认值 放缓   ease-in 由慢到快    ease-in-out 由慢到快再到慢

1. 哪个属性发生变化就给哪个加   加在:hover :active里 在你鼠标拿开的时候是没有过渡时间 瞬间回到最初状态  加在元素里  此时鼠标离开  还是会有过渡状态 

==过渡只能具有具体计算值的属性 不能过渡display,visibility==





## 变形 transform

2d,3d 变形 ----》 平移  ，旋转，缩放，倾斜

### 2d平移

```css
transform:translate(x,y);
x,y  px px; transform:translate(300px,300px);
     %   %  transform:translate(20%,50%) 20%水平向右平移了自身宽度的20%  50% 垂直向下平移了自身高度的50% 
```

#### 盒子居中问题

```css
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);

优点： 不需要知道盒子具体的宽高值（auto）  缺点：兼容性差 ie10+ 
```

### 2d旋转

```css
transform:rotate(ndeg); +ndeg 顺时针  -ndeg 逆时针 
```

#### 变形中心(2d,3d)

设置变形中心  

```css
transform-orgin: x y;
npx mpx,n% m%, right bottom left top center;  默认变形中心 center center 
```



### 2d倾斜

```css
transform:skew(xdeg,ydeg);
x: -mdeg 在x轴正方向有倾斜 倾斜度数为mdeg  mdeg 在x轴负方向有倾斜 倾斜度数为mdeg  
y: -mdeg 在y轴正方向有倾斜 倾斜度数为mdeg  mdeg 在y轴负方向有倾斜 倾斜度数为mdeg  
```

### 2d缩放

```css
transform:scale(w,h);  w,h=0 消失 w,h=1原始样式  w,h>1放大  w,h<1缩小

transform:scale(0.5);宽度和高度一起缩小为原来的一半
transform:scale(0.5，0.3);
```

#### 显示小字体

浏览器能显示最小12px   就是想显示10px --->缩放    10px/16px



## 3d变形

3d坐标系  左手坐标系（指尖所指所指为正方向）

#### 3d平移

```css
transform:translate3d(x,y,z); z轴 +z 沿着z的正方向  -z沿着z的负方向 
px px px % % %

transform:translateX(xpx);
transform:translateY(ypx);
transform:translateZ(zpx);
```

### 景深属性perspective

perspective: 代表眼睛到变形物体的距离   默认为0px  一般设置到变形元素的父盒子身上

==事件触发的情况下 用此属性去呈现近大远小的效果 3d效果==

```css
perspective: 1000px;
```





#### 3d旋转

```css
transform:rotate3d(x,y,z,ndeg)
x: 在x轴有没有旋转 旋转度数ndeg  0 没有旋转 其他值 是有旋转
y: 在y轴有没有旋转 旋转度数ndeg  0 没有旋转 其他值 是有旋转
z:在z轴有没有旋转  旋转度数ndeg  0 没有旋转 其他值 是有旋转

transform:rotate3d(1,0,0,45deg) 绕x轴旋转45度
transform:rotate3d(0,1,0,45deg) 绕y轴旋转45度
transform:rotate3d(0,0,1,45deg) 绕z轴旋转45度(2d旋转)
transform:rotate3d(1,1,0,45deg) 绕x轴和y轴所组成的面对角线旋转45度
transform:rotate3d(100,100,0,45deg) 绕x轴和y轴所组成的面对角线旋转45度(正方形)

transform:rotate3d(100,400,0,45deg) 绕x轴和y轴所组成的面对角线旋转45度(长方形)

transform:rotate3d(1,1,1,45deg) 绕x轴和y轴和z轴所组成的体对角线旋转45度
```

### 保留3d效果的属性

```css
 保留3d效果 保留他走到100px处这个位置的效果 不要回到最初效果 
             
 transform-style:flat 2d回到最初状态 不保留/preserve-3d保留3d效果

  一般也是跟景深一样 设置到父盒子身上
```

==用在没有过渡的时候！==



## 关键帧动画

关键帧：几个状态  n个状态 1-2-3-n（0% ----100%） 都伴随着时间的流逝 ；

1-2-3-4-5  1   0%  2 25%  3 50%  4 75%   5  100%  

#### 定义动画

```css
@keyframes 动画名称 {
    //写动画执行的关键序列  % 
    0% {
        
        width:200px;
        height:200px;
        bgc:red;
        
    }
    30% {
        bgc:green;
        
    }
    ......
    100% {
        height:200px;   
        width:500px;
    }
}
```



#### 使用动画

```css
animation:动画的名称 持续的时间 [ 运动的曲线 ] [ 延时的时间 ]  [执行次数] [往返运动]  [执行的状态] [动画最后一帧的状态];

动画的名称animation-name:动画名称;

持续的时间 animation-duration:ns;

运动的曲线 animation-timing-function: ease/ease-in/linear匀速/ease-in-out /ease-out;

延时的时间 animation-delay:ns(0s);

执行次数 animation-iteration-count:1(默认)/2/infinite无限次
往返运动 animation-direction:alternate反向（奇数次 最初---》最终  偶数次 最终--->最初）/normal正常（最初---》最终）
执行的状态  animation-play-state: running播放/paused暂停

动画最后一帧的状态 animation-fill-mode:forwards保留最后一帧的状态/backwards回到第一帧的状态;



```



