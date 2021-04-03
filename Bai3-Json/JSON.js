//JSON là định dạng dữ liệu js
// var json="1";
//string
// var json='"Sang"';
//null
// var json="null";
//array
// var json='["sang",1]';
//object
var json=`{
    "id":1,
    "name":"sang"
}`;

// console.log(document.querySelector(".fd"));

console.log(JSON.parse(json));

// Chuyen tu JSON sang biến thông thường
// var test=1;
// var test='nam';
// var test=[1, 3, 5,6];
var test={
    id:1,
    name:"sang"
}
console.log(JSON.stringify(test));
export const err="errr";
export const war="waring";
export var mess="mess";
console.log(mess);
export default ()=>{
    return "ok";
};

