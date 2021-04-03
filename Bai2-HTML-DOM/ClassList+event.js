var box2=document.querySelector(".box2");
//add
//contains   // kiểm tra xem có k
//remove
//toggle  
console.log(box2.classList);  // trả về một mảng
console.log(box2.classList[0]);  // truy suất phần tử
console.log(box2.classList.length);  // trả về độ dài
console.log(box2.classList.value);   // trả về chuỗi class
box2.classList.add("red", "blue");

console.log(box2.classList.contains("red"));
// setTimeout(()=>{
//     box2.classList.remove("red");

// }, 3000);
// console.log(Object.prototype);


//even
var even=document.querySelector(".box2 h1");
even.onclick=function(e)
{
    console.log(Math.random()*10);
    console.log(e.target);
}

// listEvent
var evenlist=document.querySelectorAll(".box h1");
for(let i=0;i<evenlist.length;i++)
{
    evenlist[i].onclick=(e)=>{
        console.log(evenlist[i].innerText);
        console.log(e.target.innerText);
        console.log(e);

    }
}

//check form
var inputText=document.querySelector("input[type='text']");
var inputCheck=document.querySelector("input[type='checkbox']");
var inputSelect=document.querySelector("select");


console.log(inputText);
// inputText.oninput=(e)=>{
//     console.log(e.target.value);
// }
// inputText.onkeydown=(e)=>{
//     console.log(e.target.value);
// }
// inputText.onkeyup=(e)=>{
//     console.log(e.which);  //hiển thị mã phím
//     switch(e.which)
//     {
//         case 27:
//             console.log("exit");
//             break;
//     }
// }
inputCheck.onchange=(e)=>{
    console.log(e.target.checked);
    
}
inputSelect.onchange=(e)=>{
    console.log(e.target.value);
}
