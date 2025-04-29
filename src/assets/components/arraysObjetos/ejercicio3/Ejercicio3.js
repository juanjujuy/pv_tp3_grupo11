import { productos } from '../array.js';

console.log("Ejercicio 3");

const productosConIVA = productos.map(p => ({
    descripcion: p.descripcion,
    precio: (p.precio * 1.21).toFixed(2)
}));

console.log("Productos con IVA incluido (21%):");
productosConIVA.forEach(p => {
    console.log(`Producto: ${p.descripcion} - Precio con IVA: $${p.precio}`);
});
