// 1. for
// 2.for/in  +chỉ số
// 3for/of   +Gần giống foreach
//4 while
//5 do_while
var My={
    name: 'Sang',
    age:18,
    address:"hanoi, Vn"
};
var MYobject=[
    {
        name: 'Sang',
        age:18,
        address:"hanoi, Vn"
    },
    {
        name: 'Namw',
        age:19,
        address:" Vn"
    }
]
console.log(MYobject[0]);
for(var key in MYobject)
{
    console.log(MYobject[key].name);
}
var MyNumber=[
    1,2,3,4,5,6,7
];
for (const key in MyNumber) {
    console.log(MyNumber[key]);
}
for (const key in MyNumber) {
   console.log(MyNumber[key]);
}
var myString ="Sang Nguyen Van";
for (const key in myString) {
    console.log(myString[key]);
}
// console.log(myString[2]);
for (const iterator of MyNumber) {
    console.log(iterator);
}
// Voi object
for (const iterator of Object.keys(My)) {   //Lap qua key
    console.log(iterator);
}
for (const iterator of Object.values(My)) {   //Lap qua value
    console.log(iterator);
}

// Ma tran
var matrix=[
    [1,2],
    [3,5],
    [4,6]
]
for(var i=0;i<matrix.length;i++)
{
    for (let j = 0; j < matrix[i].length; j++) {
        document.write(matrix[i][j]+" ");
    }
    document.write("");
}
