import React from "react";

function Producto(){
    const productosIniciales = [
        { descripcion: "Auriculares Inalámbricos", precio: 49990.50 },
        { descripcion: "Mouse Óptico", precio: 15500 },
        { descripcion: "Monitor 24 Pulgadas", precio: 120000.99 },
        { descripcion: "Webcam HD", precio: 24800.75 },
        { descripcion: "Impresora Multifunción", precio: 85000 },
        { descripcion: "Cable HDMI", precio: 10900 }
    ];

     // 1 - Mostrar en consola cada producto
  console.log("Ejercicio 1 - Mostrar productos con forEach:");
  productosIniciales.forEach(p => {
    console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
  });

  // 2 - Crear un nuevo array con productos con precio mayor a $20
  console.log("Ejercicio 2");
  const productosFiltrados = productosIniciales.filter(p => p.precio > 20000);
  console.log("2 - Productos con precio mayor a $20000:");
  console.log(productosFiltrados);

  
  // 3 - Crear un array con precios con IVA incluido (21%)
  console.log("Ejercicio 3");
  const productosConIVA = productosIniciales.map(p => ({
    descripcion: p.descripcion,
    precio: (p.precio * 1.21).toFixed(2)
    }));
  console.log("\n3 - Productos con IVA incluido:");
  console.log(productosConIVA);

  // 4 - Ordenar el array original por precio de menor a mayor (creando una copia para no modificar el original para la visualización inicial)
  console.log("Ejercicio 4");
  const productosOrdenados = [...productosIniciales].sort((a, b) => a.precio - b.precio);
  console.log("\n4 - Array original ordenado por precio:");
  console.log(productosOrdenados);

   // 5 - Agregar un nuevo producto
   console.log("Ejercicio 5");
    const nuevoProducto = { descripcion: "Parlante Bluetooth", precio: 59000.90 };
    const productosConNuevo = [...productosIniciales, nuevoProducto];
  console.log("\n5 - Array con nuevo producto agregado:");
  console.log(productosConNuevo);

  // 6 - Eliminar el producto con el precio más bajo
  console.log("Ejercicio 6");
  let productosParaEliminar = [...productosIniciales];
  if (productosParaEliminar.length > 0) {
    productosParaEliminar.sort((a, b) => a.precio - b.precio);
    const precioMinimo = productosParaEliminar[0].precio;
    productosParaEliminar = productosParaEliminar.filter(p => p.precio > precioMinimo);
    console.log("\n6 - Array después de eliminar el producto con el precio más bajo:");
    console.log(productosParaEliminar);
  } else {
    console.log("\n6 - El array de productos está vacío.");
  }

  return (
    <div>
      <h2>Lista de Productos Inicial</h2>
      <ul>
        {productosIniciales.map((producto, index) => (
          <li key={index}>
            Producto: {producto.descripcion} - Precio: ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Productos con Precio Mayor a $20</h2>
      <ul>
        {productosFiltrados.map((producto, index) => (
          <li key={`mayor20-${index}`}>
            Producto: {producto.descripcion} - Precio: ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Productos con IVA (21%) Incluido</h2>
      <ul>
        {productosConIVA.map((producto, index) => (
          <li key={`conIVA-${index}`}>
            Producto: {producto.descripcion} - Precio con IVA: ${producto.precio}
          </li>
        ))}
      </ul>

      <h2>Productos Ordenados por Precio (Menor a Mayor)</h2>
      <ul>
        {productosOrdenados.map((producto, index) => (
          <li key={`ordenado-${index}`}>
            Producto: {producto.descripcion} - Precio: ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Productos con Nuevo Producto Agregado</h2>
      <ul>
        {productosConNuevo.map((producto, index) => (
          <li key={`conNuevo-${index}`}>
            Producto: {producto.descripcion} - Precio: ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Productos Después de Eliminar el de Menor Precio</h2>
      <ul>
        {productosParaEliminar.map((producto, index) => (
          <li key={`sinMinimo-${index}`}>
            Producto: {producto.descripcion} - Precio: ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );


}

export default Producto;