var heading=document.querySelector(".box h1.heading");
console.log(heading.innerText);
console.log("content:"+ heading.textContent);
//setter
heading.innerText+="<i>babe</i>";
heading.innerText+=`<i>babe</i>`;

//getter
console.log(heading.innerText);

//textinner : nội dung bên trong thẻ khi nhìn trên trình duyệt  
//context  :nội dung nằm trong môt element 

//innerHTML, outerHTML
var box2=document.querySelector(".box2");
box2.innerHTML="<h1 title='heading'>Heading</h1>";

console.log(box2.innerHTML);
console.log(box2.outerHTML);

// box2.outerHTML="ok";
