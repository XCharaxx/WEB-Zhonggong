(function () {
    //锚点现身
    var oFixtip = document.querySelector(".fix-tips");
    window.onscroll = function () {
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;
       


        if (sTop <= (oFixtip.clientHeight + 500)) {
            oFixtip.style.display = "none";
        } else {
            oFixtip.style.display = "block";
        }
    }
    


    //头像
    var oHeadnav = document.getElementsByClassName("head-nav")[0];
    var oLozhu = oHeadnav.getElementsByClassName("lozhu")[0];
    var oLoginhead = oHeadnav.getElementsByClassName("login-head")[0];
    var oQuit = oLoginhead.getElementsByClassName("Q")[0];
    
    oQuit.onclick = function () {
        localStorage.isLogin = false;
    }
    
  if (localStorage.isLogin == "true") {
        oLozhu.style.display = "none";
        oLoginhead.style.display = "block";
  } else if (localStorage.isLogin == "false"){
        oLozhu.style.display = "block";
        oLoginhead.style.display = "none";
    }
})();