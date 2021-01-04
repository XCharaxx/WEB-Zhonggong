# day06 定时器

## 1.定时器

### 1.1 定时器的分类

- setTimeout：延迟定时器
  - 使用场景：广告弹窗
  - 语法：setTimeout(函数,时间ms)   延迟某个时间执行函数一次
- setInterval：间歇执行定时器
  - 使用场景:轮播图，倒计时，抽奖
  - 语法：setInterval(函数，时间)  间隔某个时间就执行函数一次

### 1.2 定时器使用

setTimeout

~~~js
<div>广告</div>
<script>
     var oDiv = document.getElementsByTagName("div")[0];
//延迟定时器：setTimeout(函数,时间ms) 1000ms--1s

//广告显示5秒消失
/* setTimeout(function(){
            oDiv.style.display = "none";
        },5000);  *///等待5秒执行函数

setTimeout(hide,5000);
function hide(){
    oDiv.style.display = "none";
}

</script>
~~~

setInterval

~~~js
//隔2秒换一张图片
var oImg = document.getElementsByTagName("img")[0];
var n = 1;
//1.隔2000切换一次图片
setInterval(function(){
    n++;
    if(n>5){n=1}
    oImg.src = "image/"+n+".jpg";//1 2 3 4 5
},1000);
~~~

### 1.3停止定时器

setInterval：定时器但凡已开启就不会主动停止 

停止定时器：clearInterval(intervalId);/clearTimeout(id)

intervalId:开启定时器的时候，会返回一个能够唯一标识当前定时器的id

~~~js
//2.倒计时5-0
var n = 5;
var timer = setInterval(function(){
    n--;
    //到0停止
    if(n<=0){
        n = 0;
        //停止定时器
        clearInterval(timer)
    }
    oS.innerText = n;
},1000);
console.log(timer); //1
~~~

## 2.运动函数封装

### 2.1 div运动

实现思路

- 点击button

- 开启定时器，时间为30(30运动会比较连贯)

- 运动div ：标签.style.left = 当前值+10

- 计算运动值 ： 当前值+10

- 500停止定时器

  ~~~js
  //2.点击按钮，运动div 往前
  oBtn[0].onclick = function(){
     var timer = setInterval(function(){
          //4.计算运动值  在当前位置的基础上+10
          var l = parseInt(getStyle(oDiv,"left"))+10
  
          //5.停止定时器 >= 500
          if(l>=1000){
              l = 1000;
              clearInterval(timer);
          }
          //3.移动div
          oDiv.style.left = l+"px";
  
      },30);
  }
  ~~~

### 2.2 来回

问题：点击往前，又往回，抽搐

原因：定时器可以叠加，开启了两个定时器(+\-)

解决：如果定时器添加在能够频繁被触发的地方，在开启下一个定时器之前，会先清除掉之前的定时器

~~~js
var timer;
//2.点击按钮，运动div 往前
oBtn[0].onclick = function(){
    clearInterval(timer);
    timer = setInterval(function(){
        //4.计算运动值  在当前位置的基础上+10
        var l = parseInt(getStyle(oDiv,"left"))+10

        //5.停止定时器 >= 500
        if(l>=1000){
            l = 1000;
            clearInterval(timer);
        }
        //3.移动div
        oDiv.style.left = l+"px";

    },30);
}
~~~

### 2.3 封装

封装过程

- 实现功能

- 声明一个函数，把主要代码放进去

- 找可变值做参数，代入到函数中

- 调用调试

  ~~~js
  //运动元素elem,属性attr,步长step，目标值target
  function running(elem,attr,step,target) {
      clearInterval(timer);
      timer = setInterval(function () {
          //4.计算运动值  在当前位置的基础上+10
          var l = parseInt(getStyle(elem, attr)) + step
  
          //5.停止定时器 >= 500
          /*  if (l >= target && step>0) { //往前
                      l = target;
                      clearInterval(timer);
                  }
                  if (l <= target && step<0) {//往后
                      l = target;
                      clearInterval(timer);
                  } */
          //往前到目标值停止，往后到目标值也停止
          if((l >= target && step>0) || (l<= target && step<0)){
              l = target;
              clearInterval(timer);
          }
  
          //3.移动div
          elem.style[attr] = l + "px";
  
      }, 30);
  }
  ~~~

  