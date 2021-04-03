// let + var+ const
{
    const c=20;
    let a=10;
    var b=11;
    {
        b=10;
        a=14;
        // c=15;
        console.log(" Var Trong block "+b);
        console.log("Let trong blok "+a);
        console.log("Const trong blok "+c);
    }
    
}
console.log(b);


//class 
// Tao doi tuong sinh vien
class Student{
    constructor(name, id, Class, age)
    {
        this.name=name;
        this.id=id;
        this.Class=Class;
        this.age=age;
    }
    // getter
    getName(){
        return this.name
    }
    setName(name)
    {
        this.name=name;
    }
}

console.log(Student);
var  a1=new Student("sang", "1", "CNTT1", 18);
console.table(a1);
a1.setName("xuan");
console.log(a1.getName());

// destructuring
var arr1=[1, 3, 5, 6, "sang"];
// Lay phan tu
var [a, b, ... res]=arr1;
console.log(a, b, res);
console.log(typeof res);
console.log(res[0]);

var Teach={
    name:"Sang",
    id:1
}
console.log(Teach);
var {name:NameTeach, id}=Teach;
console.log(NameTeach);

//Dat key tu bien
var SDT="12344-123";
var Gt="Nam";
var name_Student="Sang";
var Student_two={
    SDT,
    Gt,
    name_Student,
}
console.log(Student_two)

//rest  //spead
var arr2=[1,2,4,5,7];
var arr3=[1,4,5,7,8,9];
var ob={name:"Sang", id:1}
var arr4=[...arr2, ...arr3, {...ob}];
console.log(arr4);