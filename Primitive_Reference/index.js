// primitive : kieu du lieu nguyen thuy: undefined, boolean, number, string, bigint
// gán biến này cho biến kia thì hai biến độc lập
let a=1;
let b=a;

console.log(a, b);
b=2;
console.log(a, b);
const change=(value)=>{
    value=12
    console.log(value)

    //value và a khac nhau
}
change(a);
console.log(a, b);
// reference
// kieu tham chieu object, array, funtion -> object
// tham chieu thi cùng tham chiếu đến một địa chỉ ô nhớ
let car1=["BMW", "AUDI"]
let car2=car1; // du lieu cua car1 chia se cho car2

car2[1]="MES"
console.log(car1, car2);  

const person1={name:"Nguyen Van Sang", age:25}
const person2=person1
console.log(Object.is(person2, person1))  // vung nho cung nhau
console.log(person1, person2)
person2.age=26;
console.log(person1, person2)
person2.name="Pham thanh Xuan";
console.log(person1, person2)
// shallow copy object
// const+object chi co the thay doi thuoc tinh ben trong object
const person3={name:"Sang", skill:{coding:"Xuan"}};
const person4=person3;  // hai tk cung tro den mot dia chi o nho
const person5=Object.assign({}, person3)
// const person5={...person3}
console.log(Object.is(person5, person3))  // vung nho khac nhau
person4.name="Xuan"
person5.skill.coding="XuanPham"


person4.skill={coding:"XuanSang"};
console.log(person3, person4, person5)

//example
let person_1 = { name: "Du Thanh Duoc", skill: { coding: "Javascript" } };
let person_2 = { ...person_1 };
console.log(Object.is(person_1.skill, person_2.skill))

// console.log(person_1, person_2);

person_2.skill={coding:"html"}; // ban dau thi hai tk cung vung nho nhung khi gan gti khac thi khac vung nho
console.log(Object.is(person_1.skill, person_2.skill))
console.log(person_1, person_2);


