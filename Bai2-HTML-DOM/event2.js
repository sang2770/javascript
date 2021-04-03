var a=document.querySelector("a[name='ok']");
console.log(a);
a.onclick=(e)=>{
    console.log(e.target.href);
    if(!e.target.href.startsWith("gg1.com")){
        e.preventDefault();  // ngăn chặn hành vi mặc định
    }
}
// ngăn chặn hành vi nổi bọt
var button=document.querySelector("button");
button.onclick=(e)=>{
    e.stopPopagation();
    console.log('button');
}