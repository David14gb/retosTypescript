//Reto 7

function verdadero(verdad:string[]):boolean{
    let ver:boolean=true

        let i = 0;
        while (i < verdad.length) {
            if(verdad[i][0]!=="M"){
            ver=false
            i =verdad[i].length
            }
            i++;
        }
    return ver
}

console.log(verdadero(["Maria", "arioM", "Marta","Mariano", "Marciano"]));

