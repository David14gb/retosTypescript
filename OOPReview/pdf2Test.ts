import{ Mobile}from "./pdf2"

let nokia3219 = new Mobile("Nokia","3210","Nokia", "No tiene", "Azul", false, 0, 10);
let iPhone3G  = new Mobile("iPhone", "3G", "Apple", "8GB", "Negro", false, 1, 100);
let samsungGalaxy10 = new Mobile("Samsung", "Galaxy 10", "Samsung", "512GB", "Blanco", true, 4, 485);

console.log(nokia3219);
nokia3219.printAll();
console.log(iPhone3G);
iPhone3G.printAll();
console.log(samsungGalaxy10);
samsungGalaxy10.printAll();
// nokia3219.is5G = true
// nokia3219.cameraNumber = 4
nokia3219.printAll();
nokia3219.printCarac();
iPhone3G.printCarac();
samsungGalaxy10.printCarac();
