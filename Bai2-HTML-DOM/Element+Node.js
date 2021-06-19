let btn=document.createElement("button"); // tao
btn.innerHTML="CLick";  // set text
document.body.appendChild(btn); // them vao documnent

let textnode=document.createTextNode("Ok");

btn.appendChild(textnode);