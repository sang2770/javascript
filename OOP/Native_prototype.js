console.log(Object.getPrototypeOf(Array));
// nguyen mau goc
let dog={
    name:"lucky"
}
console.log(dog);
let cat=new Object();
console.log(cat);

console.log(dog.__proto__===Object.prototype);
console.log(dog.toString===Object.prototype.toString);

// array [funtion,..]

let arr=[1,3,5];
console.log(arr.__proto__===Array.prototype);
console.log(arr.__proto__.__proto__==Object.prototype);
// cac method trung nhau giua cac cap thi lay cap gan nhat
console.log(arr.__proto__.toString ===arr.toString);  
console.log(arr.__proto__.__proto__.toString===arr.toString); // toString cua Object


//function
function f() {}

console.log(f.__proto__ == Function.prototype); 
console.log(f.__proto__.__proto__ == Object.prototype);

//primitive
let a="sang";
console.log(a.__proto__===String.prototype);

// change native prototype [khong nen]
String.prototype.show=function(){
    return this+"sang";
}
console.log("Boom!".show());
console.log(Array.prototype.join);
//Polyfilling
if(!String.prototype.repeat){
    String.prototype.repeat=function(n){
        return new Array(n+1).join(this)
    }
}
console.log("La".repeat(3));

// Borrowing vay muon

let obj={
    0:"Hello",
    1:"world",
    length:2
}
obj.join=Array.prototype.join;
console.log(obj.join(","));
console.log(Array.prototype);
console.log(Object.prototype);