let json = '{"title":"沙尘暴"，"type":"百年一遇"}';
function jsonToBase64(obj) {
    let buf = Buffer.from(obj);
    return buf.toString('base64');
}

console.log(jsonToBase64(json));


let base = "eyJ0aXRsZSIgOiAi5rKZ5bCY5pq0IiwidHlwZSIgOiAi55m+5bm05LiA6YGHIn0=";
// 将base64格式转化为JSON封装一个函数
function base64ToJson(obj) {
    let string = Buffer.from(obj, 'base64');
    return string.toString();
}
console.log(base64ToJson(base));