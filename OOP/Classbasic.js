// syntax
class User{
    constructor(name)
    {
        this.name=name;
    }

    sayHi(){
        console.log(this.name)
    }
    get getname(){
        return this.name;
    }
    set setname(value)
    {
        this.name=value
    }
    // Computed name[]
    ['say'+'Hii'](){
        console.log("Computed Name");
    }
    // Fields
    work="IT"
}

let user=new User("John");
user.sayHi();
// Class thực chất là function
console.log(typeof User);
console.log(User=== User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));

console.log(user.getname);
user.setname="SangSS";
console.log(user.name);
user.sayHii()
console.log(user.work);

