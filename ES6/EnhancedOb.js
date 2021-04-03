// dinh nghia key, value ob
// dinh nghia method
// dinh nghia key cho ob duoi dang ob
var name="js";
var price=1000;
var course={
    name,
    price,
    getname()
    {
        return name;
    }
}
console.log(course);
var NameJS="name";
var PriceJS="price";
var coursejs={
    [NameJS]:"Js",
    [PriceJS]:1000
}

console.log(coursejs);