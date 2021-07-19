// method static and properties static la thuoc tinh va phuong thuc cua class chu k phai cua rieng doi tuong nao
class User{
    static id=1
    constructor(name) {
        this.name=name
    }
    static isUser()
    {
        return this===User;
    }
}

console.log(User.id);
console.log(User.isUser());

const user=new User("Sang");
console.log(user.__proto__==User.prototype);
console.log(User.prototype);
console.log(user.prototype);  // undefined
// ke thua ap dung ca cho static
class Rabbit extends User{
    constructor(name, arm){
        super(name);
        this.arm=arm;
    }
}

const a1=new Rabbit("Is", 4);
console.log(a1.id + " "+ a1.name +" "+a1.isUser);
console.log(Rabbit.id + " "+ a1.name +" "+Rabbit.isUser());

console.log(a1);
class Test{}
console.log(a1.__proto__);
console.log(Test.prototype.__proto__==Object.prototype);