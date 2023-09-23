// kế thừa
// tất cả các object con kế thừa từ Object và các thuộc tính của Object không thể liệt kê mà chỉ có thể tham chiếu đến
var animal={
    arm:4,   // chia se,
    jumps:null,
    color:{
        colors:"red" // chia se
    },
    walk:()=>{
        console.log("I am an animals");
    }
}
var rabbit={
    jumps:true
}
rabbit.__proto__=animal; // ke thua 
console.log('=====Object inherit=====');

console.log('abbit', rabbit);
console.log('abbit.arm', rabbit.arm);  // tham chieu vao animal lay arm
console.log('Object.is(rabbit.color, animal.color)', Object.is(rabbit.color, animal.color));

var Mouse = {
    Big:4,
    __proto__:rabbit
}
Mouse.walk()
console.log(Mouse.arm);

Mouse.arm=6;  // k tac động lên nguyên mẫu mà chỉ tác động lên đối tượng, nguyên mẫu chỉ có thể đọc
console.log(animal);

//this khong bi ảnh hưởng đến nguyên mẫu
let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
let admin = {
    __proto__: user,
    isAdmin: true
  };
console.log(admin.fullName); // John Smith (*)
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected
// for..in Loop
  console.log(Object.keys(rabbit));  // chỉ trả về key của nó
  for (const key in rabbit) {  // trả về cả key của những đối tượng cha
      console.log(key);
      if(rabbit.hasOwnProperty(key))  // trả vể key của nó
      console.log("its+ "+ key);
  }
let sang={
    beautiful:true
}
console.log(sang);


// Practice
console.log(rabbit.jumps);
console.log(animal.jumps);
delete(rabbit.jumps)
console.log(rabbit.jumps);  // lấy jumps của animals
console.log(animal.jumps);

delete(animal.jumps)
// undefined vì không có property nào tồn tại
console.log(rabbit.jumps); 
console.log(animal.jumps); //