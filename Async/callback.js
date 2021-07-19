function loadScript(src, callBack){
    let script=document.createElement("script");
    script.src=src;
    document.head.append(script);
    script.onload= ()=> callBack();
}
//  goi bien a khi script load xong
loadScript("./Test.js",()=>console.log(a));
var b=1;
function run(callback)
{
    setTimeout(()=>{
        b++;
        callback();
    }, 2000);
}
run(()=>console.log(b));

