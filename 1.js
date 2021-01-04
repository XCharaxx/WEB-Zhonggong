var oIn1 = document.getElementsByTagName("input"),
    oTbody = document.getElementsByTagName("table")[0].tBodies[0],
    oThead = document.getElementsByTagName("table")[0].tHead,
    oButs = document.getElementsByTagName("button"),
    oIn2 = oTbody.getElementsByTagName("input"),
    oIn3 = oThead.getElementsByTagName("input")[0];



//点击全选
oIn3.onclick = function () {
    for (var i = oIn2.length - 1; i >= 0; i--) {
        oIn3.checked == true ? oIn2[i].checked = true : oIn2[i].checked = false;
    }
}

//点击添加个人信息
oButs[0].onclick = function () {
    //点击清除复选框勾选
    for (var i = oIn2.length - 1; i >= 0; i--) {
        oIn2[i].checked = false;
    }
    oIn3.checked = false;
    if (oIn1[0].value == "" && oIn1[3].value == "") {
        alert("请输入您的个人信息")
    } else {
        //创建tr
        var tr = document.createElement("tr");
        //创建td添加input
        var td = document.createElement("td");
        td.innerHTML = "<input type= 'checkbox'>";
        tr.appendChild(td);
        //创建td添加input
        var td = document.createElement("td");
        td.innerHTML = oIn1[0].value;
        tr.appendChild(td);
        //创建td添加性别
        var td = document.createElement("td");
        var sex = oIn1[1].checked == true ? "男" : "女";
        td.innerHTML = sex;
        tr.appendChild(td);
        //创建td添加年龄
        var td = document.createElement("td");
        td.innerHTML = oIn1[3].value;
        tr.appendChild(td);
        //给表格添加数据
        oTbody.appendChild(tr);
        oIn1[0].value = "";
        oIn1[3].value = "";
    }


}
//给tbody下的input添加点击事件
for (var i = oIn2.length - 1; i >= 0; i--) {
    oIn2[i].onclick = function () {
        var arr = [];
        for (var j = oIn2.length - 1; j >= 0; j--) {
            arr[j] = oIn2[j].checked;
            var a = arr.every(function (value, index, array) {
                return value == true;
            });
        }
        if (a == true) {
            oIn3.checked = true;
        } else {
            oIn3.checked = false;
        }
    }

}


//点击删除
oButs[1].onclick = function () {
    for (var i = oIn2.length - 1; i >= 0; i--) {
        if (oIn2[i].checked == true) {
            oIn2[i].parentNode.parentNode.remove();
        }

    }
    oIn3.checked = false;
}




