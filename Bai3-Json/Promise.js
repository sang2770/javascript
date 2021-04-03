//promise dùng để giải quyết sự bất đồng bộ trong js 
// có 3 giai đoạn : pendding (chò), fufiled(Thành công), rejected(thất bại)
//giải quyết callback Hell
// bất đồng bộ
// setTimeout(()=>{
//     console.log(1);
// }, 1000);
// console.log(2);

// var Mypromise=new Promise((resolve, reject)=>{
//     resolve("sang");
//     console.log(typeof resolve);
// })

// Mypromise
//     .then(function(value)
//     {
//         return new Promise((resolve)=>{
//             console.log(value);
//             setTimeout(resolve("xuan"),3000);
        
//         })
//         // return 1;
//     })
//     .then((value)=>{
//         console.log(value);
//     })

// function sleep(ms)
// {
//     return new Promise((resolve)=>{
//         setTimeout(resolve, ms); 
//     });
// }

// sleep(1000)
//     .then(()=>{
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(()=>{
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(()=>{
//         console.log(3);
//         // return sleep(1000);
//     })


// var promise1=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve([1,2]);
//     },1000);
// })
// var promise2=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve([5,2])
//     },3000);
// })
// var result=Promise.all([promise1, promise2])
//     .then(
//         (result)=>{
//             result1=result[0];
//             result2=result[1];
//             console.log(result1.concat(result2));
//         }
//     )
// promise1
//     .then(
//         function(resolve)
//         {
//             console.log(resolve);
//         }
//     )


// bắt lỗi
// var testPromise=new Promise((resolve, reject)=>{
//     reject("co loi")
// })
// testPromise
//     .then(()=>{
//         console.log(1);
//     })
//     .catch(
//         (value)=>{
//             console.log(value);
//         }
//     )

// example
// user
var User=[
    {
        id:1, 
        name:"sang"
    },
    {
        id:2, 
        name:"Mai"
    },
    {
        id:3, 
        name:"Hoang"
    },
    {
        id:4, 
        name:"Nam"
    }
]
var comments=[
    {
        id:1, 
        user_id:2,
        content:"Ok",
    },
    {
        id:2, 
        user_id:3,
        content:"Ok babe ",
    },
    {
        id:3, 
        user_id:1,
        content:"babe cute",
    }
]

var promise=new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(comments)
    }, 1000);
})


promise
    .then((result)=>{
        var userId=result.map((item, index)=>{
            return item.user_id;
        })
        return new Promise((resolve, reject)=>{
            resolve(userId);
        })
    })
    // .then((result)=>{
    //     console.log(result);
    //     var userList=User.filter((item, index)=>{
    //         return result.includes(item.id)
    //     })
    //     console.log(userList);
    // })
    .then((result)=>{
        console.log(result);
        return new Promise((resolve, reject)=>{
            var test= result.map((item, index)=>{
                // for (const z of User) {
                //     if(z.id==item)
                //     {
                //         return z;
                //     }
                // }
                return User.findIndex(function(item1, index){
                    return item1.id==item;
                })
            })
            resolve(test);
        })
    })
    .then((result)=>{
        var test= result.map((item, index)=>{
            return User[item];
        })
        console.log(test);
    })