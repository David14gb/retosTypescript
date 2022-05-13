import{ Mobile}from "./pdf2"

let nokia3219 = new Mobile("Nokia","3210","Nokia", "No tiene", "Azul", false, 0, 10);
let iPhone3G  = new Mobile("iPhone", "3G", "Apple", "8GB", "Negro", false, 1, 100);
let samsungGalaxy10 = new Mobile("Samsung", "Galaxy 10", "Samsung", "512GB", "Blanco", true, 4, 485);

nokia3219.printAll();
iPhone3G.printAll();
samsungGalaxy10.printAll();

nokia3219.setIs5G(true);
nokia3219.setCameraNumber(4);

nokia3219.printAll();
nokia3219.printCarac();

let ar: Mobile[] = []
ar.push(nokia3219, iPhone3G, samsungGalaxy10);
for(let i = 0; i < ar.length; i++){
    ar[i].printCarac();
    
}

