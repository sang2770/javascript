// var / let & const   Scrope, hosting
// const/ var & let 
//funtion-scrope  // pham vi trong mot ham
function myFn() {
    var foo = 'peekaboo!'; // ca let va const
    
    console.log(foo); // 'peekaboo!'
  }

 console.log(foo); // ReferenceError: foo is not defined
//block-scrope   //pham vi trong mot khoi code {}

if (true) {
    var foo = 'peekaboo!';
    let bar = 'i see u';
    const baz = 'baby blue!';
  
    console.log(foo); // 'peekaboo!';
    console.log(bar); // 'i see u';
    console.log(baz); // 'baby blue!';
  }
  
console.log(foo); // 'peekaboo!';
console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined

// Scrope  var bien toan cuc dung ca trong va ngoai block
    // var+ let :truy cap dc ben trong block

{
    var a= 4;
    let b=10;
    {
        console.log(a+b);
    }
    
}
console.log(a);
// hosting
    c=10;
    var c;
    console.log(c);

const d=10;
// d=11;
// console.log(d);  // loi

//var +let co the duoc gan lai gtri con const thi k


// code thuan  :var 
//babel : let const

