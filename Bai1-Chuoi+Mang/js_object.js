// object
var Sinhvien={
    name:"Nguyen van sang",
    class:"CNTT1-K60",
    address:"Ha Noi"
}
console.log(Sinhvien.name);
Sinhvien["Age"]=18;
console.log(Sinhvien.Age);
Sinhvien["Show"]=function(){
    var inf="";
    console.log(Sinhvien);
}
Sinhvien.Show();
console.log(Sinhvien);
// object constuctor
function User(firstName, lastName, avatar)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;
    this.getname=function ()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
var author=new User("sang", "Nguyen", "Av");
var user=new User("Xuan", "Pham", "Avd");
author.title="Sep";
user.comment="ok";
console.log(author);
console.log(user);
console.log(user.getname());
//class
class Monhoc{
    constructor(last, first){
        this.last=last;
        this.first=first;
    }
}
var  a1=new Monhoc("toan", "hoc");
console.log(a1);
// object protopyte  -them thuoc tinh va phuong thuc ben ngoai ham tao
User.prototype.Lop = "Cntt1";
User.prototype.getClass = function(){
    return this.Lop;
};

console.log(author.Lop);
console.log(author.getClass());
