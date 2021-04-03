//setter
var box=document.querySelector(".box");
box.id="box_1";   // ràng buộc hợp lệ: thuộc tính phải phù hợp với element
console.log(box.id);
document.querySelector(".box a").href="gg.com";
box.querySelector("h1.heading").setAttribute("id", "Headding_1");  // Không ràng buộc 

//getter
console.log(box.querySelector("h1").getAttribute("class"));

box.setAttribute("name", "box");
console.log(box.getAttribute("name"));