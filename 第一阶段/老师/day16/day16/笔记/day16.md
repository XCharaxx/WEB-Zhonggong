# day16

## 视口布局

vw,vh  视口单位  相对单位    所有设备的视口100vw ,100vh

100vw : viewport  width 视口宽度，浏览器可视区域的宽度

100vh : viewport  height 视口高度，浏览器可视区域的高度



750px   100vw   1vw = 7.5px;    

375px   100vw    1vw = 3.75px  



**以设计稿为准:**

假设还是750px设计稿  750px=100vw    1px=0.13333vw;   

预设字体基础值 100px   1rem = 100px  = 13.33333vw;

```css
html {
    font-size:13.33333vw;
}
```



