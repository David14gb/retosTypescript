//Reto 1

function signoZodiaco(fecha:number, mes:string):string {
    let signo:string ="";
    if((fecha >= 22 && mes == "Noviembre")||(fecha <= 21 && mes == "Diciembre")){
        signo = "Sagitario";
    } else if((fecha >= 22 && mes == "Diciembre")||(fecha <= 20 && mes == "Enero")){
        signo = "Capricornio";
    } else if((fecha >= 21 && mes == "Enero")||(fecha <= 19 && mes == "Febrero")){
        signo = "Acuario";
    } else if((fecha >= 20 && mes == "Febrero")||(fecha <= 20 && mes == "Marzo")){
        signo = "Piscis";
    }else if((fecha >= 21 && mes == "Marzo")||(fecha <= 20 && mes == "Abril")){
        signo = "Aries";
    }else if((fecha >= 21 && mes == "Abril")||(fecha <= 20 && mes == "Mayo")){
        signo = "Tauro";
    }else if((fecha >= 21 && mes == "Mayo")||(fecha <= 20 && mes == "Junio")){
        signo = "Geminis";
    }else if((fecha >= 21 && mes == "Junio")||(fecha <= 20 && mes == "Julio")){
        signo = "Cancer";
    }else if((fecha >= 21 && mes == "Julio")||(fecha <= 21 && mes == "Agosto")){
        signo = "Leo";
    }else if((fecha >= 22 && mes == "Agosto")||(fecha <= 20 && mes == "Septiembre")){
        signo = "Virgo";
    }else if((fecha >= 21 && mes == "Septiembre")||(fecha <= 20 && mes == "Octubre")){
        signo = "Libra";
    }else if((fecha >= 21 && mes == "Octubre")||(fecha <= 21 && mes == "Noviembre")){
        signo = "Escorpio";
    }
    return signo;
}

console.log(signoZodiaco(14,"Junio"));

//Reto 2

function continentes(pais:string):void{
    let continente:string = "";
    if((pais == "España")||(pais == "Portugal")||(pais == "Francia")||(pais == "Italia")||(pais == "Bélgica")){
        continente = "Europa"
        console.log(continente);  
    }else if((pais == "India")||(pais == "Dubai")||(pais == "China")||(pais == "Filipinas")||(pais == "Corea")){
        continente = "Asia"
        console.log(continente);
    }else if((pais == "Estados Unidos")||(pais == "Argentina")||(pais == "Uruguay")||(pais == "Mexico")||(pais == "Brasil")){
        continente = "América"
        console.log(continente);
    }else if((pais == "Marruecos")||(pais == "Argelia")||(pais == "Camerún")||(pais == "Ghana")||(pais == "Egipto")){
        continente = "África"
        console.log(continente);
    }else if((pais == "Australia")||(pais == "Fiyi")||(pais == "Papúa Nueva Guinea")||(pais == "Tonga")||(pais == "Samoa")){
        continente = "Oceanía"
        console.log(continente);
    }else{
        console.log("No está dentro de los países seleccionados. Sigue probando");
        
    }             
}

continentes("España");