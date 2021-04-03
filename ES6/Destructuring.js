var array=["js", "html", "ok"];
var [a, b, c]=array;
var [d, ...res]=array
console.log(a+b+c);
console.log(a,res);

var course={
    name:"Js", 
    price:1000,
    img:'image',
    child:{
        name:"react"
    }
}
var {name:parrentName, price, image, child:{name}}=course;
console.log(parrentName);
var {name, ...ob}=course;
console.log(ob);

function show({name, price, ...res})
{
    console.log(name, price);
}

show(course);