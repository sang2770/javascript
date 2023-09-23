// let animals={
//     eats:true
// }

// let dog={
//     run:true,
//     __proto__:animals
// }
// console.log(animals);
// console.log(animals.__proto__===Object.prototype);

// console.log(dog);
// console.log(Object.prototype);
// function Rabbit(name){
//     this.name=name;
// }
// // Rabbit.prototype={
// //     color:"black"
// // }
// console.log(Rabbit.prototype);

// console.log(Rabbit.prototype);
// let rabbit=new Rabbit("White");   // rabbit.__proto__==animals;
// console.log(rabbit);
// Rabbit.prototype=animals;
// // rabbit.__proto__=animals;
// console.log(rabbit);
// // Chúng ta có thể sử dụng thuộc tính để tạo một đối tượng mới bằng cách sử dụng cùng một constructor với đối tượng hiện có.constructor
// let Rabbit_child= new rabbit.constructor("2");
// console.log(Rabbit_child);


function Person(name) {
    this.name = name;
  }
  
Person.prototype.sayHello = function() {
    console.log('Hello, ' + this.name);
};
  
function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
}
  
Student.prototype = Person.prototype;
  
const jane = new Student('Jane', 'A');
jane.sayHello(); // Outputs: Hello, Jane
  
