(function () {
    //锚点现身
    var oFixtip = document.querySelector(".fix-tips");
    window.onscroll = function () {
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;



        if (sTop <= (oFixtip.clientHeight + 600)) {
            oFixtip.style.display = "none";
        } else {
            oFixtip.style.display = "block";
        }
    }

})();





(function () {
    var oAllclass = document.getElementById("AllClass");
    var oAllul = oAllclass.getElementsByTagName("ul")[0];
    var oSortli = document.getElementsByClassName("li-s");
    ujiuye.ajax({
        "url": "http://edu.xqb.ink/api/courses",
        "type": "get",
        "success": function (res) {
            var data = res.data;
            var arr = [];
            var R = Math.random();
            console.log(data);
            for (var i = 0; i < data.length; i++){
                for (var j = 0; j < data[i].course_list.length; j++){
                    arr.push(data[i].course_list[j]);
                }
            }
            console.log(arr);
            for (var i = 0; i < arr.length; i++){
                oAllul.innerHTML += arr[i].id < 10 ? "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span> " + "<em>免费</em>" + "</span></div></a></li>":"<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span>&yen; " +(arr[i].id * 66).toFixed(2) +"</span></div></a></li>";
            }
            oSortli[0].style.backgroundColor = "white";
            oSortli[0].style.color = "tomato";


            oSortli[0].onclick = function () {
                for (var i = 0; i < 4; i++){
                    oSortli[i].style.backgroundColor = "#f8f8f8";
                    oSortli[i].style.color = "#333";
                    oSortli[i].className = "li-s";
                    oSortli[3].tag = true;
                }
                oSortli[0].style.backgroundColor = "white";
                oSortli[0].style.color = "tomato";
                arr = [];
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].course_list.length; j++) {
                       
                        arr.push(data[i].course_list[j]);
                    }
                }
                oAllul.innerHTML = "";
                for (var i = 0; i < arr.length; i++) {
                    oAllul.innerHTML += arr[i].id < 10 ? "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span> " + "<em>免费</em>" + "</span></div></a></li>" : "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span>&yen; " + (arr[i].id * 66).toFixed(2) + "</span></div></a></li>";                }
            }
           
            oSortli[1].onclick = function () {
                oAllul.innerHTML = "";
                for (var i = 0; i < 4; i++) {
                    oSortli[i].style.backgroundColor = "#f8f8f8";
                    oSortli[i].style.color = "#333";
                    oSortli[i].className = "li-s";
                    oSortli[3].tag = true;
                }
                oSortli[1].style.backgroundColor = "white";
                oSortli[1].style.color = "tomato";
                oSortli[1].className = "li-s li-t2";
                arr.sort(function (a,b) {
                    return R * (b.id * parseInt(b.hours)) - R * (a.id * parseInt(a.hours));
                });
                for (var i = 0; i < arr.length; i++) {
                    oAllul.innerHTML += arr[i].id < 10 ? "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span> " + "<em>免费</em>" + "</span></div></a></li>" : "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span>&yen; " + (arr[i].id * 66).toFixed(2) + "</span></div></a></li>";                }
            }


            oSortli[2].onclick = function () {
                oAllul.innerHTML = "";
                for (var i = 0; i < 4; i++) {
                    oSortli[i].style.backgroundColor = "#f8f8f8";
                    oSortli[i].style.color = "#333";
                    oSortli[i].className = "li-s";
                    oSortli[3].tag = true;
                }
                oSortli[2].style.backgroundColor = "white";
                oSortli[2].style.color = "tomato";
                oSortli[2].className = "li-s li-t3";
                arr.sort(function (a, b) {
                    return parseInt(b.hours)- parseInt(a.hours);
                });
                for (var i = 0; i < arr.length; i++) {
                    oAllul.innerHTML += arr[i].id < 10 ? "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span> " + "<em>免费</em>" + "</span></div></a></li>" : "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span>&yen; " + (arr[i].id * 66).toFixed(2) + "</span></div></a></li>";                }
            }
            oSortli[3].tag = true;
            oSortli[3].onclick = function () {
                oAllul.innerHTML = "";
                for (var i = 0; i < 4; i++) {
                    oSortli[i].style.backgroundColor = "#f8f8f8";
                    oSortli[i].style.color = "#333";
                    oSortli[i].className = "li-s";
                }
                oSortli[3].style.backgroundColor = "white";
                oSortli[3].style.color = "tomato";
                // oSortli[3].className = "li-s li-t4";
                if (this.tag == true) {
                     arr.sort(function (a, b) {
                    return b.id - a.id;
                     });
                    oSortli[3].className = "li-s li-t4";
                    this.tag = false;
                } else {
                    arr.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    oSortli[3].className = "li-s li-t5";
                    this.tag = true;
                }
               
                for (var i = 0; i < arr.length; i++) {
                    oAllul.innerHTML += arr[i].id < 10 ? "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span> " + "<em>免费</em>" + "</span></div></a></li>" : "<li><a href='./show.html'><img src='" + arr[i].courseimg + "'><p>" + arr[i].coursename + "</p><div>共有<span>" + Math.floor(R * (arr[i].id * parseInt(arr[i].hours) * 9)) + "</span>人在学<i>|</i><span>&yen; " + (arr[i].id * 66).toFixed(2) + "</span></div></a></li>";                }
            } 
              
        }
    });
})();
