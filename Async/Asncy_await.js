//! async syntax
//TODO truoc funtion để khai báo và nó trả về một promise conf nếu là value thì nó hiểu là resolved promise

    async function f(){
        return 1;
    }
    f().then(result=>console.log(result))
//!await sử dụng bên trong một async 
//TODO : ý nghĩa là đợi cho một cái j đó chạy xong
    async function test(){
        var promise =new Promise((resolve, reject)=>{
            setTimeout(()=>resolve("done"), 3000)
        })
        // console.log(Promise.resolve() instanceof Promise);  //!trả về promise
        return await promise;
        // console.log(result);
    }
    test().then(result=>console.log(result));
    // syntax error in top-level code
    // let response = await fetch('/article/promise-chaining/user.json');//?err
//! err handing
    async function err(){
        try {
            let promise=await fetch("http://so")
            // let user=await promise.json();
        } catch (error) {
            console.log(error);
        }
    }
    err();
    //*no try...catch
    async function err_1(){
        return promise=await fetch("http://so");
    }
    err_1().catch(result=>console.log(result))