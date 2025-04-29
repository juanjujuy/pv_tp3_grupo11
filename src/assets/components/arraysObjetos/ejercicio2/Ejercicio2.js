import { productos } from '../array.js';

console.log("Ejercicio 2");

const productosFiltrados = productos.filter(p => p.precio > 20000);
console.log("Productos con precio mayor a $20000:");
productosFiltrados.forEach(p => {
    console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
});
