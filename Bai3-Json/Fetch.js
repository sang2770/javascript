var MyApi='http://localhost:3000/source';

fetch(MyApi)
    .then((response)=>{   // response là một promise
        return response.json();
        // JSON.parse  :
    })
    .then((post)=>{
        console.log(post);
        var list=post.map((item, index)=>{
            return `<li> ${item.id}
                        ${item.title}
                    </li>`
        })
        console.log(post);
        console.log(typeof list);
        list.join("+");
        document.getElementById("posts").innerHTML=list;
    })
    
var id='["2", "3", "sang"]'
console.log(JSON.parse(id));

//JSON  Server
    // -CRUD:
        //-Create: tạo mới ->   POST
        //-Read: Lấy dữ liệu -> GET
        //-Update: Chỉnh sửa ->PUT/PATCH
        //-Delete:xóa

