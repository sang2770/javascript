// no including toolbars/scrolbars
let w=window.innerWidth; 
let h=window.innerHeight;
console.log("inner:",w, h);
//including toolbars/scrollbars
w=window.outerWidth; 
h=window.outerHeight;

console.log("outer",w, h);
localStorage.setItem("Sang", "CNTT1");  // save pairs in a web brower
console.log(localStorage.getItem("Sang"));
// window object  contain document
