//Reto 3

function impar(numero:number):void {
    let numerosImpares:number = 0;
    for(let i = 0; i <= numero; i++){
        if(i % 2 !==0){
            numerosImpares = i
            console.log(numerosImpares);
        }
    }
}

impar(9);

//Reto 4

function revertido(array:string[]):string[]{
    let revertir:string[]=[];
    for(let i = array.length - 1; i >= 0; i--){
        revertir.push(array[i])
    }
    return revertir
}

console.log(revertido(["Hola", "Qué tal", "Hola", "Gracias"]));

//Reto 5

function arcoiris(color:string[]):void{

    for(let i=0; i < color.length; i++){
        if((color[i] == "Rojo")||(color[i] == "Naranja")||(color[i] == "Amarillo")||(color[i] == "Verde")||
        (color[i] == "Cian")||(color[i] == "Azul")||(color[i] == "Violeta")){
            console.log(color[i] + " pertenece al arcoiris");
        }else{
            console.log(color[i]+ " no pertenece al arcoiris");
        }
    }
}

arcoiris(["Azul", "Rojo", "Gris", "Negro", "Blanco"])

//Reto 6

function par(numeros:number[]):string{
    
    for(let i = 0; i < numeros.length; i++){

        return i%2==0 ? "Existe uno o más números que son par": "No existe uno o más números que son par"
    }
    
}

console.log(par([2,3,1,5,9,11,13,15]));

//Reto 8

function suma(todo:string[]):number{
    let total:number = 0;
    for(let i = 0; i < todo.length; i++){
        total +=todo[i].length
    }
    return total
}

console.log(suma(["Hola", "Que", "Tal", "Gracias", "Bien"]));

//Reto 9

function numEsPar(todo:string[]):void {
    let total:number = 0;
    for(let i = 0; i < todo.length; i++){
        total +=todo[i].length
    }
    if(total%2==0){
        console.log("El número es par");  
    }
}

function numEsImpar(todo:string[]):void {
    let total:number = 0;
    for(let i = 0; i < todo.length; i++){
        total +=todo[i].length
    }
    if(total%2!==0){
        console.log("El número es impar");  
    }
}

numEsPar(["Casa", "Coche", "Ciudad", "Cesta"]);
numEsImpar(["Casa", "Coche", "Ciudad", "Cesta"]);
numEsPar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
numEsImpar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
numEsPar(["Venezuela", "Veneno", "Voltaje"]);
numEsImpar(["Venezuela", "Veneno", "Voltaje"]);