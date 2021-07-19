let promise=new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("done"), 1000);
})
// hai doi so
promise.then(
    result=>console.log(result),  // successful
    err => console.log(err)   // errr
)
// luu y khi chi muon thanh cong thi cos the co 1 doi duy nhat

// loadScript
function loadScript(src){
    return new Promise((resolve, reject)=>{
        let script=document.createElement("script");
        script.src=src;
        script.onload= ()=>resolve(script);
        script.onerror= ()=> reject(new Error(`Script load err ${src}`))
        document.head.append(script);
        
    })
}

let load=loadScript("./Test.js");
load
    .then(
    script=>console.log(`${script.src} loaded`),
    err=>{console.log(`ERR: ${err.message}`);
    })

