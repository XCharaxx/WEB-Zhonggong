# day11

1. 语义化标签

2. 解决语义化兼容性问题

3. 表单控件类型 

4. 表单控件属性

5. 音视频标签

6. css3新增选择器

   ## 新增语义化布局标签

   header.footer,nav ,aside, article>section, figure （推荐在移动端使用）

   

   ie8及其以下不支持语义化布局标签  ---》 1. 不要在PC端用这些标记   2. 解决兼容性问题 

   

   **解决兼容性问题 **

   ie8- 不认识标记   那我们让它认识即可 

   1. 手动去创建这些标记  

   ```javascript
   document.createElement("标记名字");//默认是行内类型
    header,footer ,nav,article,section,figure {
               display: block;
        }
   ```

   2. 用插件 html5shiv.js  (上面写的js代码一样)

      ```javascript
        <!--[if lte IE 8]>
          <script src="../资料/html5shiv.js"></script>
         <![endif]-->
      ```

      

   ## h5新增表单控件类型

   ##### 手机号类型：

   ```html
   <input type="tel">
   1. 用于打开移动端的数字(拨号)键盘
   2. 没有提供验证
   ```

   ![](media/tel.png)

   

   

   ##### 邮箱类型

   ```html
   input type:email 
   
   1.用于移动端的邮箱键盘
   2. 提供简单的邮箱的验证  前面@后面 如果不是这样的格式 阻断提交
   ```

   ![](media/email.png)

   

   ![](media/iosEMAIL.png)

##### 网址类型

```html
input type="url" 
1. 打开移动端的网址键盘
2.提供了基础验证 文件传输协议http,https....
```

![](media/url.png)

##### 数值类型

```html
input type="number" 
1.打开数字键盘 

```

![](media/number.png)

##### 颜色类型

```html
input type="color" 提供一个色盘

```

##### 标尺类型

```html
input type="range" 区间类型数值
```

![](media/range.png)

![](media/range美化.png)

##### 日期类型

```html
<input type="week" > 周
<input type="month">月份
<input type="time">时分
<input type="date">年月日
<input type="datetime"> 年月日时分 Safari可以识别  Chrome不能识别（文本框）
<input type="datetime-local"> 本地时间
```

##### 搜索类型

```html
<inut type="search">  
    加了关闭按钮  用户输入错误 可以直接点击X清除输入内容
```

##### 下拉列表

旧： select>option  新： input + datalist>option

```html
   <!-- 必须要配合一个输入框 (list属性 = "id值") -->
            <input type="text" list="collage">
            <datalist id="collage" name="userCollage">
                <option value="体育学院">
                <option value="音乐学院">
                <option value="舞蹈学院">
                <option value="化工学院">
                <option value="物联网学院">
                <option value="机电学院" >
            </datalist>
```



## 新增表单控件属性

下拉列表  size ,selected   单选框，复选框 checked   minlength,maxlength ,placeholder

**1. 自动聚焦autofocus**

**2. 自动提示属性  autocomplete="on/off"**

on 是开启自动提示功能  off关闭自动提示功能(默认值)

**前提： 1. 表单元素必须要有name  2.完成一次有效提交**

##### 3. 禁用属性disabled

##### 4.未禁用属性 enabled

##### 5.max 最大值

**6.min最小值**

**7.step步长**

##### 8.readonly 只读属性

**9.必填项 required**

**10. pattern 字符串模式验证属性**

```html
<input type="tel"  pattern="^1[3,5,8,9,6,7][0-9]{9}$">
```



## 音视频标签

h5 video  audio

#### 音频标签

```css
  <!-- 
        1. src 音频资源的地址
        2. controls 播放控件 
        3. autoplay自动播放 你需要设置 
        4. preload 预加载属性 
        5. muted 静音属性
     -->
    <audio src="../资料/周杰伦 - 东风破.mp3" controls autoplay muted></audio>
```

三种格式:mp3  wav  ogg

```css
  <audio  controls autoplay muted>
        <!-- 资源标记 source -->

        <source src="../资料/周杰伦 - 东风破.mp3">
        <source src="../资料/周杰伦 - 东风破.wav">
        <source src="../资料/周杰伦 - 东风破.ogg">

        您的浏览器不支持播放此音频
    
      
    </audio>
```



## 视频标签

```css
 <!-- 1.src 资源路径
          2. autoplay 自动播放
          3.controls播放控件
          4. preload 预加载
          5.muted 静音
          6. poster="" 第一帧图片 
    -->
    <video controls poster="./image/pic.png">
        <source src="src=" https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4">
        <source src="src=" https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.webm">
        <source src="src=" https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.ogg">
            您的浏览器不支持此视频播放

    </video>
```







