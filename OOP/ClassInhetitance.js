//  kế thừa
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");

class Rabbit extends Animal{
    //overriding constructor
    constructor(name, earLength) {
        super(name); // nếu k có sẽ lỗi
        this.earLength = earLength;
      }
    
    hide(){
        console.log(`${this.name} hides!`);
    }
    // overriding method
    stop()
    {
        super.stop();
        this.hide();
    }
    run(ad)
    {
      console.log(ad);
    }
}
Rabbit.prototype = {};
let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.eat);
console.log(Rabbit.prototype); // { constructor: f Rabbit(), __proto__: { constructor: f } }
console.log(rabbit.prototype); // undefined
console.log(rabbit.__proto__); // { constructor: f Rabbit(), __proto__: { constructor: f } }
console.log(rabbit.run(5)); // undefined.


console.log([].__proto__);
rabbit.run(5);
rabbit.hide();
rabbit.stop()
rabbit.run(1000);
console.log(rabbit.earLength);
console.log(Array.prototype.concat.call([1,2,3],[4,5,6]));