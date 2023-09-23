let cat={
    name:"dog",
    animals:"4",
    child:[1,2,4]
}
//Defaault flags :true
console.log('cat', cat);

console.log('=====Kiểm tra flags thuộc tính =====');

let descriptions=Object.getOwnPropertyDescriptor(cat, "name");// show name and flags
console.log('descriptions', descriptions);
// console.log(JSON.stringify(descriptions))
// change flags
// non-writable  - khong the ghi de
    Object.defineProperty(cat, "name",{
        writable:false
    })
    console.log(Object.getOwnPropertyDescriptor(cat, "name"));
    cat.name="cat";  // khong the gi de
    console.log(cat)
// non-emumable  // bo qua thuoc tinh trong vong lap
    for(let i of cat.child)
    {
        console.log(i)
    }
    Object.defineProperty(cat,"child",{
        enumerable:false
    })
    console.log(Object.getOwnPropertyDescriptor(cat, "child"))
    for(let i in cat)
    {
        console.log(i)
    }
// non-configurable  // khong the xoa
    // delete cat.name;
    // console.log(cat);
    Object.defineProperty(cat, "name", {
        configurable:false
    });
    delete cat.name;
    console.log(cat);
// gop
    Object.defineProperties(cat, {
        name:{writable:false},
        animals:{value:4, writable:false}
    })
    cat.name="doggg";
    console.log(cat);
// moi mot thuoc tinh  deu co mot flag de quy dinh 