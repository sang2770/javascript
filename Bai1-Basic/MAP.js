var sinhvien=new Map();
var list=["sang", "nam", "xuan", "mai"];

list.forEach((item,index)=>{
    sinhvien[item]=index;
})
console.log(sinhvien);
console.log(sinhvien.get(0));