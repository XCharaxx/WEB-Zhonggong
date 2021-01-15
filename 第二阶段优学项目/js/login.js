(function () {
    


    var oLofinform = document.querySelector(".login-form");
    var oSpan = document.querySelectorAll(".sp");
    var oIns = oLofinform.getElementsByTagName("input"); 
     

    // oIns[0].onblur = function () {
    //     if (oIns[0].value.trim() == "") {
    //         oSpan[0].innerHTML = "请输入手机号!";
    //         oSpan[0].style.color = "#ff3829";
    //         return false;
    //     }
    //     var reg = /^1[3-9]\d{9}$/;
    //     if (reg.exec(oIns[0].value)) {
    //         oSpan[0].innerHTML = "账号格式正确";
    //         oSpan[0].style.color = "#008000";

    //     } else {
    //         oSpan[0].innerHTML = "账号格式错误";
    //         oSpan[0].style.color = "#ff3829";
             
    //     }
    // }

    // oIns[1].onblur = function () {
    //     if (oIns[1].value.trim() == "") {
    //         oSpan[1].innerHTML = "请输入密码!";
    //         oSpan[1].style.color = "#ff3829";
    //         return false;
    //     }
    //     var reg = /(?=.*[a-zA-Z].*)(?=.*[0-9].*)^[a-zA-Z0-9]{5,10}$/;
    //     if (reg.exec(oIns[1].value)) {
    //         oSpan[1].innerHTML = "密码格式正确";
    //         oSpan[1].style.color = "#008000";
    //         oSpan[1].innerHTML = "必须字母和数字的组合 5--10";
    //     } else {
    //         oSpan[1].innerHTML = "密码格式错误";
    //         oSpan[1].style.color = "#ff3829";
    //         oSpan[1].innerHTML = "必须字母和数字的组合 5--10";
    //     }
    // }
    
    oIns[2].onclick = function () {
      
        if (oIns[0].value.trim() == "") {
            oSpan[0].innerHTML = "请输入用户名!";
            oSpan[0].style.color = "#ff3829";
            return false;
        }
        if (oIns[1].value.trim() == "") {
            oSpan[1].innerHTML = "请输入密码!";
            oSpan[1].style.color = "#ff3829";
            return false;
        }
        // var reg1 = /(?=.*[a-zA-Z].*)(?=.*[0-9].*)^[a-zA-Z][a-zA-Z0-9]{4,10}$/;
        // var reg2 = /(?=.*[a-zA-Z].*)(?=.*[0-9].*)^[a-zA-Z0-9]{6,12}$/;
        // if ((!reg1.exec(oIns[0].value))||(!reg2.exec(oIns[1].value))) {
        //     oSpan[0].innerHTML = "账号或密码格式错误";
        //     oSpan[2].innerHTML = "字母开头,必须字母和数字的组合 6--12字母开头";
        //     oSpan[0].style.color = "#ff3829";
        //     oSpan[2].style.color = "#ff3829";
        //     oIns[1].value = "";
        //     return false;
        // }
        // else if (oIns[0].value != localStorage.usr || oIns[1].value != localStorage.pwd) {
        //     oSpan[0].innerHTML = "账号或密码错误";
        //     oSpan[1].innerHTML = "必须字母和数字的组合 5--10";
        //     oSpan[0].style.color = "#ff3829";
        //     oSpan[1].style.color = "#ff3829";
        //     oIns[1].value = "";
        //     return false; 
        // }
        else {
            ujiuye.ajax({
                "url": "http://edu.xqb.ink/api/loginact",
                "type": "post",
                "data": "usr=" + oIns[0].value + "&pwd=" + oIns[1].value,
                "success": function (res) {
                    console.log(res);
                    if (res.code == 500) {
                        oSpan[0].innerHTML = res.msg.substr(0,7);
                        
                        oSpan[0].style.color = "#ff3829";
                        oSpan[2].innerHTML = res.msg;
                        oSpan[2].style.color = "#ff3829";
                        oIns[1].value = "";
                        
                    }
                    if (res.code == 200) {
                        localStorage.isLogin = true;
                        // location.href = "../index.html";
                        history.back();
                    }
                }
            });
            return false;
        }
    }
     


  

})();