## day04 this与自定义属性

## 1.回顾

- document.write和innerHTML的区别？
  - 共同点：都可以识别标签，都可以改变body标签的内容
  - 区别：
    - innerHTML会覆盖
    - document.write：写入的时候文档已经加载完成，会重绘文档--  覆盖之前的内容。写入的时候文档没有加载完，不会覆盖原有的内容

- for循环：可以让特定代码执行指定的次数

  语法：for(初始化循环变量;循环条件;更新循环变量){  循环体  }

## 2.循环

### 2.1 for循环嵌套

- 图形

  ~~~js
  //外循环控制行
  for(var i = 1;i<=9;i++){
      //内循环控制列
      for(var j = 1;j<=i;j++){
          document.write(j+" * " + i +" = "+i*j+"&nbsp;&nbsp;&nbsp;");
      } 
      document.write("<br>");
  }
  ~~~

- 操作标签

  ~~~~js
   //二维数组
  var arr = [
      ["我和我的家乡","八佰"],
      ["一人之下","大鱼海棠","秦时明月","柯南"],
      ["喜羊羊","熊出没","猪猪侠","巴拉巴拉小魔仙","海绵宝宝"]
  ];
  
  var oUl = document.getElementsByTagName("ul");
  
  //外循环控制父元素，内循环控制子元素
  for(var i = 0;i<oUl.length;i++){
      var array = arr[i];
      //内循环控制子元素,根据数据生成对应个的li
      for(var j = 0;j<array.length;j++){
          oUl[i].innerHTML += "<li>"+array[j]+"</li>";
      }
  }
  ~~~~

### 2.2 while、do-while

for循环的不同写法

~~~js
//for:打印1-10
var i = 1;
for(;i<=10;){
    console.log("for"+i);
    i++;
}
~~~

while

~~~js

//while
//1.初始化循环变量
var j = 1;
while(j>10){//循环条件
    //循环体
    console.log("while"+j);
    //更新循环变量
    j++;
}
~~~

do-while

~~~js
//do-while
//1.初始化循环变量
var k = 1;
do{
    //循环体
    console.log("dowhile"+k);
    k++;
}while(k>10);
~~~



### 2.3 跳出循环

 break：结束循环

continue：跳出本次循环

~~~js
 var arr = [
     {"name":"小夏","c":101},
     {"name":"老夏","c":80},
     {"name":"小唐","c":30},
     {"name":"小芳","c":80},
     {"name":"过来一下","c":40}
 ]
 //遍历数组，找到第一个人不及格的人，循环结束
 for(var i = 0;i<arr.length;i++){
     if(arr[i].c < 60){
         break; //结束循环,后面所有的操作都不会再执行
     }
     console.log(arr[i]);
 }

//1.遍历数组，跳过所有不及格的人
for(var i = 0;i<arr.length;i++){
    if(arr[i].c < 60){
        continue;//跳出本次循环，本次循环后面的代码不执行，直接进行下一次循环
    }
    console.log(arr[i]);
}
~~~

### 2.4 for-in

~~~js
var obj = {
    "name":"羊振疼",
    "age":5,
    "sex":"男",
    "height":180
}
//1.循环对象
console.log(obj.length);//对象没有length，不能使用for循环进行遍历
~~~

对象没有length，不能使用for循环进行遍历，js专门提供了一个遍历对象的方法for-in

语法：for（变量 in 循环对象）{}