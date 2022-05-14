export class Punto{
    private x:number
    private y:number

    constructor(x:number, y:number){
        this.x = x
        this.y = y
    }
    public getX():number{
        return this.x
    }
    public getY():number{
        return this.y
    }
    public setX(x:number){
        this.x = x
    }
    public setY(y:number){
        this.y = y
    }

    toString():string{
        return "(" + this.x + "," + this.y + ")"
    }
    distanciaAlOrigen():number{
        
        return Math.sqrt((Math.pow(this.x, 2))+(Math.pow(this.y, 2)))
    }
    calcularDistancia(otroPunto:Punto):number{
        return Math.sqrt((Math.pow(otroPunto.x-this.x, 2))+(Math.pow(otroPunto.y-this.y, 2)))
    }
    calcularCuadrante():number{
        let cuadrante:number = 0;

        return (this.x == 0 && this.y == 0) ? cuadrante = 0: (this.x > 0 && this.y > 0) ? cuadrante = 1:
        (this.x < 0 && this.y > 0) ? cuadrante = 2: (this.x < 0 && this.y < 0) ? cuadrante = 3: cuadrante = 4
    }
    calcularMasCercano(puntos:Punto[]):Punto{
        let punto:Punto = new Punto(0,0);
        let cercano:number = this.calcularDistancia(puntos[0]);
        let cerca:number = 0;
        punto = puntos[0];
        for(let i = 1; i < puntos.length; i++){
            cerca = this.calcularDistancia(puntos[i]);
           if(cerca < cercano){
            cerca = cercano
            punto = puntos[i]
           }
        }
        return punto
    }
}

export class Triangulo{
    private v1:Punto
    private v2:Punto
    private v3:Punto

    constructor(v1:Punto, v2:Punto, v3:Punto){
        this.v1 = v1
        this.v2 = v2
        this.v3 = v3
    }
    
    calcularLongitudLados():number[]{
        let longitud:number[] = []

        longitud.push(this.v1.calcularDistancia(this.v2), this.v2.calcularDistancia(this.v3), this.v3.calcularDistancia(this.v1));

        return longitud
    }

}