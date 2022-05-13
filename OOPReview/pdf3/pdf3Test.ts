import{ Mobile}from "../pdf2"
import{ MobileLibrary}from "./pdf3"

let xiaomi = new Mobile("Xiaomi", "Mi9T Pro", "Xiaomi", "128GB", "Rojo", true, 3, 300);
let iPhone = new Mobile("iPhone", "14", "Apple", "256GB", "Negro", true, 3, 1500);
let nokia = new Mobile("Nokia", "Nuevo", "Nokia", "64GB", "Azul", true, 2, 200);
let samsung = new Mobile("Samsung", "Nuevo", "Samsung", "256GB", "Blanco", true, 5, 1400);

let arN:Mobile[] = [];
arN.push(xiaomi, iPhone, nokia, samsung);

let libreria = new MobileLibrary("Libería 1", "Primero", arN,);

//libreria.totalPriceCalculation()
libreria.printLibrary()
