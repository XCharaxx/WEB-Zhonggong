(function () {
    //课程介绍与课程安排
 
    var oShmeli = document.querySelectorAll(".show-menu ul li"); 
    var oSxuan = document.querySelectorAll(".show-xuan");
    oShmeli[0].style.color = "#0770ff";
    oShmeli[0].style.borderBottom = "2px solid #0770ff";
    oSxuan[0].style.display = "block";
    for (var i = 0; i < oShmeli.length; i++){
        oShmeli[i].index = i;
        oShmeli[i].onclick = function () {
            for (var j = 0; j < oSxuan.length; j++){
                oShmeli[j].style.color = "#333";
                oShmeli[j].style.borderBottom = "none";
                oSxuan[j].style.display = "none";
            }
            oSxuan[this.index].style.display = "block";
            oShmeli[this.index].style.color = "#0770ff";
            oShmeli[this.index].style.borderBottom = "2px solid #0770ff";
        }
    }
    
    //开始学习
    var oStart = document.getElementsByClassName("start");
    
    for (var i = 0; i < oStart.length; i++){
        oStart[i].onclick = function () {
            //没有登录
            if (localStorage.isLogin == undefined || localStorage.isLogin == "false") {
                alert("请登录");
                location.href = "./login.html";
                //清除事件默认行为
                return false;
            } 
            //已登录
               
        }
    }

//  固定栏
    
   
    
    var oXiang = document.getElementById("xiangx");
    var oZX = document.getElementsByClassName("zx")[0];
    var oZxspan = document.getElementsByClassName("zxspan")[0];
  

    var zzz = oXiang.offsetTop;
    window.onscroll = function () {
        var sTopp = document.documentElement.scrollTop || document.body.scrollTop;
      
        if (sTopp <= zzz) {
            oXiang.style.position = "";
            oZX.style.display = "none";
            oZxspan.style.display = "none";
        } else {
           oZX.style.display = "block";
            oZxspan.style.display = "block";
            oXiang.style.position = "fixed";
            oXiang.style.top = "0";

            // oXiang.style.backgroundColor = "#fff";
            // oXiang.style.zIndex = "100";
            // oXiang.style.width = "100%";
        }
       
    }
})();



