 // 这是一个JSON  
let json = '{"title" : "沙尘暴","type" : "百年一遇"}';


// 我们想要将json转化为base64的格式
// 将JSON准化为Buffer
// let buf = Buffer.from(json);
// let base64 = buf.toString('base64');
// console.log(base64);

// 将json转化为base64的格式  封装函数
function jsonToBase64(obj){
    let buf = Buffer.from(obj);
    return buf.toString('base64');
}

console.log(jsonToBase64(json));


let base = "eyJ0aXRsZSIgOiAi5rKZ5bCY5pq0IiwidHlwZSIgOiAi55m+5bm05LiA6YGHIn0=";
// 将base64格式转化为JSON封装一个函数
function base64ToJson(obj){
    let string = Buffer.from(obj,'base64');
    return string.toString();
}
console.log(base64ToJson(base));