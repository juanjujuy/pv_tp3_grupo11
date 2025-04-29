import { productos } from '../array.js'

console.log("Ejercicio1");

productos.forEach(element => {
    console.log("Producto: "+element.descripcion+"- Precio: $"+element.precio);
});

