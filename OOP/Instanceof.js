class Rabbit{}
var rabbit=new Rabbit();
// check an object of Rabbit class ?
console.log(rabbit instanceof Rabbit);
// funtion
function Rabbit_F(){}
console.log(new Rabbit_F() instanceof Rabbit_F);

var arr=[1,2,4];
console.log(arr instanceof Array);
console.log(arr instanceof Object);

//instanceof kiem tra nguyen mau 

//check
// typeof
// {}.tostring
console.log({}.toString.call(window));


class  Animal{
    
}
class Dog extends Animal{}

var fdog=new Dog();
console.log(fdog instanceof Dog.__proto__);


