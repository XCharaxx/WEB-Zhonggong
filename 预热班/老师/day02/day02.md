## 复习

```

    <head>
        ...
        <style>
        
            .box1{
                width:100px;
                height:100px;
                background-color:red;
                <!-- 圆角 -->
                border-radius:10px;
                border-radius:10px 20px;
                border-radius:10px 20px 30px;
                border-radius:10px 20px 30px 40px;
                border-top-left-radius:10px;
                border-top-right-radius:10px;
                border-bottom-left-radius:10px;
                border-bottom-right-radius:10px;

                border-radius:50%;
                <!-- 旋转 -->
                transform:rotate(45deg);


            }
        
        </style>
    </head>


    <div class="box1"></div>
    <div class="box2"></div>
```


- 定位：

```

    .big{
        ...
        position:relative;

    }
    .small{
        ...
        position:absolute;
        left:100px;  / right:100px;
        top:100px;  / bottom:100px;
    }
    .xs{
        ...
        position:absolute;
        ...
    }

    <div class="big">
        <div class="small">
            <div class="xs"></div>
        </div>
    </div>

```

## ps基本操作

- 1、设置单位

    菜单栏 -- 编辑 -- 首选项 -- 单位与标尺  -- 像素

- 2、缩放工具

    按住alt + 鼠标滚轮 （向上放大，向下缩小）

- 3、抓手工具 （移动画布）
    
    按住空格键 + 鼠标左键拖拽

- 4、量尺寸

    矩形选框工具或者标尺工具

- 5、取颜色

    吸管工具


## 溢出隐藏

```
 .big{
    overflow: hidden;
 }  
```


## 关键帧动画

### 1、定义关键帧（动画节点）

```
    @keyframes ani-name{
        0%{

        }
        ...
        50%{

        }
        ...
        100%{

        }
    }


```

### 2、调动动画
```
    * 轮流反向无限次运行的动画
    animation: change-width 2s linear 1s infinite alternate;
    animation:动画名称  动画时间  运动速度曲线  延迟时间 动画次数 轮流反向运动;
        动画名称 : @keyframes后面的名称
        动画时间 : 1s / 1000ms
        运动速度曲线: linear 匀速
        延迟时间: 1s/1000ms
        动画次数: 1/n/infinite(无限次)
        轮流反向运动: alternate

    * 运行一次停在终点位置的动画
    animation:动画名称  动画时间 ... forwards;

```

## 变形-缩放
- 缩放是指元素本身以及内部的所有子元素同时缩放
```

    transform: scale(2);  放大到2倍
    transform:scale(1,0.5);
    transform: scale(x-n,y-n);  分别设置水平和垂直的缩放比例 , n表示缩放的倍数，>1放大 ，<1 缩小

```

## 水平居中
```
    margin:100px auto;

```

## 定位层级

- z-index属性用来调整定位元素的层级
- 默认值都为0 ，数值越大层级越高
- 数值相同，标签的顺序越靠后，层级越高
- 没有定位的标签不可以设置 z-index 属性


## 边框

```
    border: 5px solid black;
```