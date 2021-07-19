new Promise((resolve, reject)=>{
    // tu dong hieu la reject
    throw new Error("ERRR")  
    // reject(new Error("ERRR"))
})
.then(result=> new Promise((resolve, reject)=>{
    reject("result");
}))
.catch(err=>console.log(err))
