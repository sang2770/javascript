// các method thay thế vc sử dụng __proto__

//1. Tạo Object trống kế thừa một Object
let animal={
    eats:true
}

console.log(animal);
let rabbit = Object.create(animal);
rabbit.ok="ok"
console.log(rabbit);
console.log(Object.keys(rabbit));

console.log(rabbit.eats);
// thêm một tham số desciptions có format giống cách viết của FlagProperties.
let dog = Object.create(animal, {
    run:{value:true}
})
console.log(dog.run);
//2. lấy ra đối tượng cha
console.log(Object.getPrototypeOf(rabbit));
//3. thay đối prototype
Object.setPrototypeOf(rabbit, {});
console.log(rabbit.eats);


rabbit["__proto__"]="Some Value";
console.log(rabbit["__proto__"]); // Object no Some Value

let test = Object.create(null);
test["__proto__"]="Some Value";
console.log(test["__proto__"]);
// sao chép đối tượng
let animal2=Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal))
console.log(animal2);

let rabbit2={
    eat:true,
    __proto__:animal2
}

for (const key in rabbit2) {
    console.log(key);
}
