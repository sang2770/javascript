//  quyen truy cap ben trong va ben ngoai
// primate
//+ có thể thêm _ hoặc # vào cú pháp trước thuộc tính cần bảo vệ

//public
class Coffee{
    waterAmount=0;
    constructor(power){
        this.power=power;
        console.log(`Created a coffee-machine, power : ${power}`);

    }
}

var coffee=new Coffee(100);
// change waterAmount
coffee.waterAmount=100;
console.log(coffee.waterAmount);

// su dung _
class Coffee_pri{
    _waterAmount=0;
    //set va get de cho phep thay doi nhung co kiem soat dau vao
    set waterAmount(value){
        if(value<0)
        {
            value=0;
        }
        this._waterAmount=value;
    }
    get waterAmount()
    {
        return this._waterAmount;
    }
    constructor(power){
        this._power=power;
        console.log(`Created a coffee-machine, power : ${power}`);
    }
}

var coffee_pri=new Coffee_pri(100);
coffee_pri.waterAmount=-10;  // da bi kiem soat
console.log(coffee_pri.waterAmount);

// su dung #  duoc ho tro
class Coffee_pri_1{
    #waterAmount=0;
    constructor(power){
        this.power=power;
        console.log(`Created a coffee-machine, power : ${power}`);
    }
    #fixWaterAmount(value) {
        if (value < 0) return 0;
        return value;
      }
    setWaterAmount(value){
        this.#waterAmount=this.#fixWaterAmount(value);
    }
    get WaterAmount(){
        return this.#waterAmount;
    }

}
var coffee_pri_1=new Coffee_pri_1(100);
coffee_pri_1.setWaterAmount(100);
console.log(coffee_pri_1.WaterAmount);