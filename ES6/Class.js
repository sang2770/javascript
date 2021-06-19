function course(name, price)
{
    this.name= name;
    this.price=price;
}
var js=new course("js", "18$");
console.log(js);

class course1{
    constructor(name, price)
    {
        this.name=name;
        this.price=price;
    }
    getname(){
        return this.name;
    }
}
var html=new course1("sang", "dzai");
console.log(html.getname);
// export default html;