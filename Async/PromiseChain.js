// then khong tra ve promise

new Promise((resolve, reject)=>{
    setTimeout(resolve(1), 1000);
}).then(result=>{
    console.log(result);
    // setTimeout(()=>{
    //     result*5;
    //     console.log("ok");
    // }, 5000);
    // return result;
    return result*4
}).then(result=>{
    console.log(result);
    return result*2;
})
//then tra ve promise 
new Promise((resolve, reject)=> {

    setTimeout(() => resolve(1), 1000);
  
  }).then((result)=> {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then((result)=> { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then((result)=> {
  
    console.log(result); // 4
  
  });