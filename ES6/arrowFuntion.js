// funtion
var test=(log)=>{
    console.log(log);
    // console.log(arguments); // k co
}
var sum=function(a,b){
    return a+b;
}
//==
var test1=(a,b)=> a+b;
// return obj
var test2=(a,b)=>({
    name:a, 
    id:b
})
// luu i : k the tao constructor
console.log(test.__proto__);
test("sang")
// traditional function
let Res={
    num:0
}
let add= function(a, b, c){
    console.log(this);
    return this.num+a+b+c
}
    add()
    // call
    console.log(add.call(Res, 1, 2, 3));
    // apply: Đối số truyền vào là 1 mảng
    console.log(add.apply(Res, [1,2,3]));
    //bind 
    let result=add.bind(Res);
    console.log(result(1,2,3));
// arrow function
// this mac dinh la window
window.sum=1000;
let add_arrow=(a, b, c)=>{
    console.log(this);
    return this.sum+a+b+c
}
    add_arrow()
    // call
    console.log(add_arrow.call(Res, 1, 2, 3));
    // apply
    console.log(add_arrow.apply(Res, [1,2,3]));
    //bind 
    result=add_arrow.bind(Res);
    console.log(result(1,2,3));
//object 
    // khong nen dung arrow function cho viec khoi tao ham cho doi tuong
    let obj={
        name:"sang",
        getname:function(){
            console.log(this);
            // setTimeout(()=>{   // ham khoi tao trong object nen gia dinh la cua doi tuong
            //     this.name+="dz";
            //     console.log(this.name);
            // }, 1000)
            let a=function(){
                console.log(this.name+"sangdzai");
            }
            console.log(a.prototype);
            a();
            return this.name
        }
    }
    function check(){
        let a=()=>{
            console.log(this.name+"sangdzai");
        }
        console.log(a.prototype);
        a();
    }
    check()
    console.log(obj.getname());