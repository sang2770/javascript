var courses=[
    {
        id:1,
        name:"js",
        coin:250
    },
    {
        id:2,
        name:"html",
        coin:230
    },
    {
        id:3,
        name:"css",
        coin:0
    },
    {
        id:4,
        name:"React",
        coin:250
    },
    {
        id:5,
        name:"Native",
        coin:12
    }
]
//Duyệt mảng
courses.forEach(function(course, index){
    console.log(course, index);
});
//validate  
// kiem tra dieu kien cua mang trả về boolean
var free=courses.every(function(course, index){   //kiem tra tat ca
    return course.coin==0;
})
console.log(free);
var free1=courses.some(function(course, index){   //kiem tra mot so
    return course.coin==0;  
})
console.log(free1);
//tim kiem
//find  trả về 1 phần tử thỏa mãn
var nameClass=courses.find(function(course, index){
    return course.name=="js";
})
console.log(nameClass);
//fillter
var nameClass=courses.filter(function(course, index){
    return course.coin==250;
})
console.log(nameClass);
//   test
var MyArrays=[2,3,4,5,9,3,2];
// Kiem tra dieu kien 
var result1=MyArrays.every(function(MyArray, index){
    return MyArray>=2;
})
console.log(result1);
MyArrays.forEach(function(My){
    console.log(`${My} `);
})


var result0=MyArrays.findIndex(element => element ==2)
console.log(result0);


var result2=MyArrays.find(function(My, index){
    return My==11;
})
console.log((typeof result2)=='undefined');


var result3=MyArrays.filter(function(My, index){
    return My==2;
})
console.log(result3);
// console.log(result3.length==0);


//Map

var resultMap=courses.map(function(Mymap, index){
    return {
        id:2,
        name:`khoa hoc:${Mymap.name}`,
        coin:230,
        title:"Moi ban hoc nhe"
    }
})
console.log(resultMap);
console.log(courses);

//reduce
// tinh tong coin 
var i=0;
var res=courses.reduce(function(total, course, presentIndex){
    console.table({
        id:i++,
        res:total
    })
    return total+course.coin;
}, 0);  // gtri khoi tao k bat buoc
console.log(res);

// var resultmap=courses.map(function(Mymap, index){
//     return Mymap.name=="js";
// })
// console.log(resultmap);

// VD1: Flat -Lam phang mang
var testArray=[1];
testArray.concat(1);
console.log(testArray);
var depthArray=[1,2,[3,4], 5, 6, [7, 8, 9]];
var flatArray=depthArray.reduce(function(flat,item ){
    console.log(typeof item);
    console.log(`${flat}`);
    return flat.concat(item);
}, [])
//VD2 : gộp các tối tượng thành một mảng
var topic=[
    {
        title:"FrondEnd",
        courses:[
            {
                name:"js"
            },
            {
                name:"html"
            }
        ]

    }, 
    {
        title:"BackEnd",
        courses:[
            {
                name:"React"
            },
            {
                name:"Node"
            }
        ]
    }
]
var listtopic=topic.reduce(function(array, item){
    return array.concat(item.courses);
}, [])
console.log(listtopic);