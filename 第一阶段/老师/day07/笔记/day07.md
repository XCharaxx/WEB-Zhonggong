# day07

## 微信滑动门技术

什么？特殊背景图技术（特点：背景图颜色单一，对称的，阴影，边框..）

原理： 是一张宽度大小固定的图片铺到宽度不确定的盒子里  ，需要父子关系的两个盒子 ，内部盒子（子元素span）铺图片的右上角位置(backgrpund-position:100% 0%)，外侧盒子（父元素a）铺图片的左上角位置(backgrpund-position:0% 0%)

```css

 <style>
        * {
            padding: 0;
            margin: 0;
        }
        .container {
            width: 100%;
            height: 800px;
            background: url(./image/3S9sFMD.jpg) repeat-x ;
        }
        .nav {
            width: 100%;
            height: 74px;
        }
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
            color: #fff;
        }
        .clearfix::after {
            content: '';
            display: block;
            clear: both;
        }
        .nav ul {
            padding-left: 200px;
        }
        .nav li {
            float: left;
           
            margin-top: 18px;
            margin-left: 20px;
        
        }
        .nav li a {
            display: inline-block;
            padding-left: 20px;
           
           
            line-height: 33px;
            height: 33px;
        }
        .nav li a span {
            display: inline-block;
            padding-right: 20px;
          
            line-height: 33px;
            height: 33px;
        }
        .first a {
            background-image: url(./image/lTcb_ve.png);
            background-position: 0% 0%;
        }
        .first a span {
            background-image: url(./image/lTcb_ve.png);
            background-position: 100% 0%;

        }
        .nav li:hover a {
            background-image: url(./image/lTcb_ve.png);
            background-position: 0% 0%;

        }
        .nav li:hover a span {
            background-image: url(./image/lTcb_ve.png);
            background-position: 100% 0%;
        }
    </style>

</head>
<body>
    <div class="container">
        <div class="nav">
            <ul class="clearfix">
                <!-- a铺背景图的左侧 bgp:0% 0%  span铺背景图的右侧 bgp:100% 0% -->
               <li class="first"><a href=""><span>帮助</span></a></li>
               <li><a href=""><span>帮助与反馈</span></a></li>
               <li><a href=""><span>帮助与</span></a></li>
               <li><a href=""><span>帮助与反</span></a></li>
               <li><a href=""><span>帮助与反</span></a></li>
               <li><a href=""><span>帮助与反馈台</span></a></li>
            </ul>

        </div>
    </div>
```

## PS基础操作

### 标尺设置  

ctrl+R 或者视图--》标尺   鼠标放上去右键切换单位为像素   

#### 标尺工具

按shift拉出  水平线 和垂直线 

按shift+alt可以测量角度



#### 吸管工具 

标尺那   点住吸取颜色即可



#### 文字工具

T 

编辑---》首选项---》单位与标尺 ----》文字单位设置为px



#### 抓手工具 

快捷键 空格



#### 选择工具

快捷键 V    

作用：选择图层 ，拖拽图层



#### 切片工具

  1.切刀 选择区域  文件---》导出---》存储为web所用格式   选择切片改类型

背景透明选png    颜色单一选gif   普通图片选 jpg

2. 基于参考线的切片  拉参考线选中图片 选择切片  点基于参考线的切片   

   文件---》导出---》存储为web所用格式  按shift多选切片--->选择切片改类型 ---》存储

3. cutterman 