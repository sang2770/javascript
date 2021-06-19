var cat={
    name:"Caty",
    age:12,
    getname:function(){
        return this.name;
    }
};
console.log(typeof cat.getname);
var test=cat.getname.bind(cat);
console.log(typeof test);
function Gname() {
    console.log(arguments);
    console.log(this)
    return this.name+this.age;
    
}
var a=cat.getname.bind(cat);
var b=Gname;
b();

// bind
    // ràng buộc một object với một hàm 
    // Hàm sử dụng this
