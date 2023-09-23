// getter
const myCar={
    color:"blue",
    make:"Toyata",
    getColor:function(){
        return this.color;
    },
    setColor:function(newColor){
        this.color=newColor;
    }
}
console.log('color',myCar.color);
const a= myCar.getColor();
console.log('color', a);
//setter
    myCar.color="red"
    console.log(myCar);
// setkey
const myDog={
    dcolor:"blue",
    dmake:"Sang",
    get color(){
        return this.dcolor
    },
    set color(newColor){
        this.dcolor=newColor;
    }
}
console.log(myDog.color);
myDog.color="red"
console.log(myDog.color);

// defineproperties
const myCat={
    dcolor:"blue",
    dmake:"Sang",
}
Object.defineProperty(myCat, "color", {
    get:function(){
        return this.dcolor
    },
    set : function(newColor){
        this.dcolor=newColor;
    }
})
console.log(Object.getOwnPropertyDescriptor(myCat, "color"));
console.log(myCat.color);

myCat.color = 'yellow';
console.log('color:', myCat.color );
