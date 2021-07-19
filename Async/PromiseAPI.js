// *xử lí promise song song cho đến khi tất cả cùng kết thúc
    // Promise.all tra về một promise và tham số truyền vào dưới dạng mảng
    //! Promise sẽ được trả về theo đúng thứ tự từ trên xuống dưới dù cho thời gian có lâu hơn
    //! Nếu một Promise trả về reject thì Promise.all lập tức trả về err đó

    Promise.all([
        new Promise(resolve=> setTimeout(()=>resolve(1),3000)),
        new Promise((resolve, reject)=> setTimeout(()=>reject("err"),2000)),
        new Promise(resolve=> setTimeout(()=>resolve(3),1000)),
    ]).then(result=> console.log(result))
    .catch(err=> console.log(err))

        //TODO Trick:load APIs
    var urls=[
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://api.github.com/users/jeresig'
    ]
    var requests=urls.map(url=>fetch(url));
    Promise.all(requests)
        .then(result=> result.forEach((item, index)=>{
            console.log(`${item.url} : ${item.status}: ${index}`);
        }))
        .catch(err=>console.log(err))
// * Giải quyết tất cả Promise dù có bị lỗi sẽ trả về đầy đủ kết quả
    //Promise.allSettled
    var urls_s=[
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://no-such-url'
    ]
    Promise.allSettled(urls_s.map(url=>fetch(url)))
    .then(results=>{
        results.forEach((result, index)=>{
            if(result.status=="fulfilled"){
                console.log(`${urls_s[index]} :value ${result.value.status}`);
            }
            if(result.status=="rejected"){
                console.log(`${urls_s[index]} :reason ${result.reason}`);
            }
            // console.log(result.status);
        })
    })
    //TODO: Nếu trình duyệt k hỗ trợ Promise.settled thì dùng Polyfill
    if(!Promise.allSettled)
    {
        const rejectHandle=reason=>({status:"rejected", reason});
        const resolveHandle= value=>({status:"fullilled", value});
        Promise.allSettled=(promises)=>{
            const convertPromise=promise.map(
                (p)=>{
                    Promise.resolve(p).then(resolveHandle, rejectHandle)
                }
            )
            return Promise.all(convertPromise);
        }
    }
// * Trả về Promise nào có kết quả nhanh nhất
    Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 5000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).then(value=>console.log("race:"+value)); 
// * Tra  về Promise có kết quả nhanh nhất và k lỗi . Nếu tất cả đều lỗi thì trả về một Object lưu err
    Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).then(result=>console.log("any"+result));
    //!All ERR
    Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
        new Promise((resolve, reject) => setTimeout(() =>reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 3000))
    ]).catch(result=>{
        console.log("any"+result)
        console.log(result.errors[0]);
        console.log(result.errors[1]);
        console.log(result.errors[2]);

    })
//TODO Promise.resolve/reject

    