var box2=document.querySelector(".box2");
console.log(typeof box2);
console.log([box2]);

//CSS style
// tra cứu cách viết các thuộc tính css +js
console.log(box2.style);
// box2.style.width="100px";
// box2.style.height="100px";
// box2.style.backgroundColor="red";

// Cach viet gộp
//CSS inline
Object.assign(box2.style, {
    width:"200px",
    height:"100px",
    backgroundColor:'green'
})
console.log(box2.style.backgroundColor);
