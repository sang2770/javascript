var myString=  "  Hoc js";
// length
console.log(myString.length);
// Find index  + Tim chuoi Trả về vị trí bắt đầu chuỗi
console.log(myString.indexOf("Hoc", 3));
// Cut String
console.log(myString.slice(1, 2));
console.log(myString.slice( -2, -1));
// replace
console.log(myString.replace("js", "Sangdzz"));
// upper case+ lower case
console.log(myString.toLowerCase());
//  Xoa khoang trang dau cuoi
console.log(myString.trim());
// chuyen chuoi thanh mang
var language="js, c, python";
console.log(language.split(", "));
// lay phan tu
console.log(language.charAt(1));
console.log(language[1]);

// Mang
var MyString=["Sang", "Xuân", null, undefined, function(){}];
console.log(MyString);
// Kiem tra
console.log(Array.isArray(MyString));
console.log(MyString[1]);

// tostring
console.log(typeof MyString.toString());
// join ==tostring
console.log(MyString.join('-'));
// pop   +xoa phan tu cuoi mang
console.log(MyString.pop());  // trả về phần tử xóa
console.log(MyString);
// push  +them mot hoac nhieu ohan tu cuoi mang

console.log(MyString.push("ok1", "ok2"));  //trả so luong phan tu trong mang
console.log(MyString);
// Xoa phan tu dau mang  +Shift  
console.log(MyString.shift());
console.log(MyString);
// them mot hoặc nhiều phần tử của mang
console.log(MyString.unshift("dart"));
console.log(MyString);
//  xoa phan tu cua mang 
MyString.splice(1, 3); // vi tri bat dau xoa + so phan su xoa
console.log(MyString);
// chèn
MyString.splice(1, 0, "ok");
console.log(MyString);
// concat  +noi mang
var MyString1=["Thanh Xuan"];
console.log(MyString.concat(MyString1));
//  cat mang
console.log(MyString.slice(1, 2));  //vtri dau +cuoi
// copy mang
console.log(MyString.slice(0));


// Hàm
function ok()
{
    console.log("ok");
    function ok1(){
        console.log("ok1");
    }
    ok1();
}
ok();

// logic 
/*{
    NaN, null, false, "",undefined, 0
}*/
var result= "a" && "b" && "c" && NaN;  // lấy gtri cuối cùng nếu k nằm trong 6 tk trên nếu gặp một trong 6 tk sẽ lấy luôn

if(!result)
{
    console.log("Lọt vào r");
}
var result1="a" || "b";   // lấy tk đầu tiên khác 6 tk bên trên ngược lại với &&
console.log(result1);
var result2=null||undefined;   // lấy tk đầu tiên khác 6 tk bên trên ngược lại với &&
console.log(result2);