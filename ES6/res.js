//rest
function logger(...param)  {
    return param
  }

  console.log(logger(1,2,4,5,6,7));


  //spread
  // ... bo ngoacc{}, [];
  var arr1=[1,2,4,5];
  var arr2=["1", "3", 5];
  var arr3=[...arr1, ...arr2];
  console.log(arr3);


  var ob1={
      name:"sang",
      title:"name"
  }
  var ob2={
    name:"name",
    title:"ok"
}
  var on3={
      ...ob1,
      ...ob2
  }
console.log(on3);

var arr10=[1,2,5,6,7,8];
function showarr(a, b, ...res)
{
    console.log(res);
}
showarr(...arr10);