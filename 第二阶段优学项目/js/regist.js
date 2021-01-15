(function () {
    //1.获取元素
    var oIns = document.querySelectorAll(".login-form input");
    var oEms = document.querySelectorAll(".login-form .sp");
    var oI = document.querySelector(".login-form i");

    var jiance = [
        {
            "test": "/^[a-zA-Z]\\w{3,9}$/.test(oIns[0].value)", //正则验证
            "nullMess": "请输入账号！", //为空的时候提示
            "errMess": "账号格式不正确！", //错误的时候提示
        },
        {
            "test": "/^\\w{6,12}$/.test(oIns[1].value)", //正则验证
            "nullMess": "请输入密码!", //为空的时候提示
            "errMess": "密码应该为6-12位之间！", //错误的时候提示
        },
        {
            "test": "oIns[1].value == oIns[2].value", //正则验证
            "nullMess": "请再次输入密码！", //为空的时候提示
            "errMess": "两次密码不一致！", //错误的时候提示
        },
        {
            "test": "oIns[3].value == oI.innerText", //正则验证
            "nullMess": "请输入验证码！", //为空的时候提示
            "errMess": "验证码不正确！", //错误的时候提示
        }

    ];

    //2.失去焦点的时候的验证
    for (var i = 0; i < oIns.length - 1; i++) {
        oIns[i].index = i;
        oIns[i].onblur = function () {
            //1.如果没有输入内容，显示请输入
            if (this.value == "") {
                oEms[this.index].innerHTML = jiance[this.index].nullMess;
                oEms[this.index].className = "mes1";
            } else if (eval(jiance[this.index].test)) {
                oEms[this.index].innerHTML = "";
                oEms[this.index].className = "a";
            } else {
                oEms[this.index].innerHTML = jiance[this.index].errMess;
                oEms[this.index].className = "mes2";
            }
        }
    }


    //3.提交的时候
    oIns[4].onclick = function () {
        //1.先查看是否有输入
        for (var i = 0; i < oIns.length - 1; i++) {
            if (oIns[i].value == "") {
                oEms[i].innerHTML = jiance[i].nullMess;
                oEms[i].className = "mes1";
            }
        }

        //2.所有输入都正确的时候
        for (var i = 0; i < oEms.length; i++) {
            //只要有一个不是mes3,不能提交
            if (oEms[i].className != "mes3") {
                console.log("不能提交");
                return false; //函数中只要遇到return，直接结束函数的运行
            }
        }

        console.log("可以提交");
        //3.提交给后台
        ujiuye.ajax                                                 ({
            "url": "http://edu.xqb.ink/api/registers",
            "type": "post",
            "data": "usr=" + oIns[0].value + "&pwd=" + oIns[1].value,
            "success": function (res) {
                if (res.code == 200) {
                    alert("注册成功，开始跳转到登录页面");
                    location.href = "../index.html"
                } else {
                    alert("账号已注册，请重新注册");
                    for (var i = 0; i < oIns.length - 1; i++) { 
                        oIns[i].value = "";
                    }
                }
            }
        })




        return false; //阻止表单提交
    }
})()