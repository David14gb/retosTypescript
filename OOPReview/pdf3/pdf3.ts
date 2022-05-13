import{ Mobile}from "../pdf2"

export class MobileLibrary{
    private name:string
    private location:string
    private mobiles:Mobile[]
    private totalPrice:number

    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name = name
        this.location = location
        this.mobiles = mobiles
    }
    public getName():string{
        return this.name
    }
    public getLocation():string{
        return this.location
    }
    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public getTotalPrice():number{
        return this.totalPrice
    }
    public setName(name:string){
        this.name = name
    }
    public setLocation(location:string){
        this.location = location
    }
    public setMobiles(mobiles:Mobile[]){
        this.mobiles = mobiles
    }
    public setTotalPrice(totalPrice:number){
        this.totalPrice = totalPrice
    }
    totalPriceCalculation(){
        let precio:number = 0;
        for(let i = 0; i < this.mobiles.length; i++){
            precio += this.mobiles[i].getPrice()
        }
        
        return "La suma de los precios es " + precio
    }
}
