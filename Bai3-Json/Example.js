

    
    // đọc dữ liệu
    var MyAPI="http://localhost:3000/source";
    //Start
    
    function GetCourse(callBack)
    {
        fetch(MyAPI)
        .then((response)=>{
            return response.json();
         })
         .then(callBack)
               
    }
    function Start()
    {
        GetCourse(RenderCourse);
        handleCreateForm()    ;
    }
    Start();
    function createCourse(data){
        var options={
            method:"POST", 
            // cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        }
        fetch(MyAPI, options)
            .then((response)=>{
                return response.json();
            })
            .then(()=>{})
    
    } 

    // xoa
    function deleteCourse(data)
    {
        var options={
            method:"DELETE", 
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        fetch(MyAPI+'/'+data, options)
            .then((response)=>{
                return response.json();
            })
            // .then(RenderCourse)
            .then(()=>{
                var remove=document.querySelector(".id"+data);
                alert(remove);
                remove.remove()
            })
    } 
// Update 
function updateIf(data, id)
{
    var options={
        method:"PUT", 
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(data)
    }
    fetch(MyAPI+'/'+id, options)
        .then((response)=>{
            return response.json();
        })
        .then(()=>{})

}
function UpdateCourse(data)
{
    
            var name=document.querySelector("input[name='name']").value;
            var title=document.querySelector("input[name='title']").value;
            // console.log(name);
            var formData={
                name:name,
                title:title
            }
            updateIf(formData, data);
}
function RenderCourse(course){
        var list=document.querySelector(".list");
        var htmls=course.map((item, index)=>{
            return `<li id="id${item.id}">
                        <h4>${item.name}</h4>
                        <h5>${item.title}</h5>
                        <button onclick="deleteCourse(${item.id})">Xoa</button>
                        <button onclick="UpdateCourse(${item.id})">Update</button>
                        </li>`;
        })
        list.innerHTML=htmls.join('');
    }

// Thêm dữ liệu
    function handleCreateForm()
    {
        var create=document.querySelector("#create");
        create.onclick=()=>{
            var name=document.querySelector("input[name='name']").value;
            var title=document.querySelector("input[name='title']").value;
            // console.log(name);
            
            var formData={
                name:name,
                title:title
            }
            createCourse(formData)
        }
    }
    
    function Start()
    {
        
        GetCourse(RenderCourse);
        handleCreateForm()    ;
    }
    Start();

    

    
    
    
    
    
   
    



