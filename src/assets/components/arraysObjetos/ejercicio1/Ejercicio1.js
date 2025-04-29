import { productos } from "../array";

console.log("Ejercicio1");

productos.forEach(element => {
    console.log("Producto: "+element.descripcion+"- Precio: $"+element.precio);
});

