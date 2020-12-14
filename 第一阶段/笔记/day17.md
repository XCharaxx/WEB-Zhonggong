# day17

 flexible.js 自适应库

## flexible.js 的使用方式

 github地址：[https://github.com/amfe/lib-flexible](https://link.jianshu.com?t=https://github.com/amfe/lib-flexible)
 官方文档地址：[https://github.com/amfe/article/issues/17](https://link.jianshu.com?t=https://github.com/amfe/article/issues/17)

```
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```





## 移动端兼容性处理

##### 1.不让 Android 手机识别邮箱

```
<meta content="email=no" name="format-detection" />
```

##### 2.禁止 iOS 识别长串数字为电话

```
<meta content="telephone=no" name="format-detection" />
```

##### 3禁止 iOS 弹出各种操作窗口

```
-webkit-touch-callout:none
```

##### 4.禁止ios和android用户选中文字

```
-webkit-user-select:none
```

##### 5.在ios和andriod中,audio元素和video元素在无法自动播放

应对方案：触屏即播

```
$('html').one('touchstart',function(){
    audio.play()
})
```

##### 6.ios下取消input在输入的时候英文首字母的默认大写

```
<input autocapitalize="off"  />
```

##### 7.阻止旋转屏幕时自动调整字体大小

```
* {-webkit-text-size-adjust:none;}
```

##### 9 Input 的placeholder会出现文本位置偏上的情况

input 的placeholder会出现文本位置偏上的情况：PC端设置line-height等于height能够对齐，而移动端仍然是偏上，解决是设置line-height：normal

##### 10. calc的兼容性处理

CSS3中的calc变量在iOS6浏览器中必须加-webkit-前缀，目前的FF浏览器已经无需-moz-前缀。
Android浏览器目前仍然不支持calc，所以要在之前增加一个保守尺寸：

```
div { 
    width: 95%; //保守尺寸
    width: -webkit-calc(100% - 50px); //ios6
    width: calc(100% - 50px); 
}
```

##### 11 在移动端修改难看的点击的高亮效果，iOS和安卓下都有效：

 

```
* {-webkit-tap-highlight-color:rgba(0,0,0,0);}
```

不过这个方法在现在的安卓浏览器下，只能去掉那个橙色的背景色，点击产生的高亮边框还是没有去掉，有待解决！