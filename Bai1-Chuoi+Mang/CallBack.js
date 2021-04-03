function Myfuntion(alam)
{
    alam(123);
}

//callback
var test=function(item)
{
    console.log(item);
}
Myfuntion(test);

//Định nghĩa lại hàm map array
var TestArray=[1,2,4,9,3,2];
Array.prototype.map1=function(callback){
    var length=this.length, out=[];
    for (var i=0;i<length;i++) {
        var result = callback(this[i], i);
        console.log(result);
        out.push(result);
    }
    return out;
}
function Lietke(item, index){
    return `${item} - ${index};`
}
var resultTest=TestArray.map1(Lietke);
console.log(resultTest.join(" "));

//Find
Array.prototype.Find1=function(callback)
{
    for (var i in this) {
       console.log(this.hasOwnProperty(i));
        if(callback(this[i],i)==true && this.hasOwnProperty(i))
            return this[i];
    }
}
function find(item){
    return item==4;
}
var resultFind=TestArray.Find1(find);
console.log(resultFind);

// filter
Array.prototype.Filter=function(callBack)
{
    var out=[];
    for(var i in this)  // duyet qua cả propety
    {
        if(callBack(this[i]) && this.hasOwnProperty(i))
        {
            out.push(this[i]);
        }
    }
    return out;
}
var fillResult=TestArray.Filter(function(item, index){
    return item==4;
})
console.log(fillResult);
// Cách hiển thị thuộc tính và phương thức
console.log(Array.prototype);


//some
Array.prototype.Some1=function(callBack)
{
    for (const key in this) {
        if (Object.hasOwnProperty.call(this, key)) {
            if(callBack(this[key], key))
            return true;
        }
    }
    return false;
}
var SomeResult=TestArray.Some1(function(item, index, array)
{
    return item>1;
})
console.log(SomeResult);


//reduce
Array.prototype.Reduce1=function(callBack, value)
{
    var res=value;
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            console.log(res);
            res=callBack(res, this[key], key);
        }
    }
    return res;
}
var resultReduce=TestArray.Reduce1(function(total,item, index)
{
    return total+item;
},0)
console.log(resultReduce);