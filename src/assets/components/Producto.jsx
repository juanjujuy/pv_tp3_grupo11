import React, { useState } from 'react';
import '../css/producto.css';

function Producto() {
 
  const [productos, setProductos] = useState([ 
    { descripcion: "Auriculares Inalámbricos", precio: 49990.5 },
    { descripcion: "Mouse Óptico", precio: 15500 },
    { descripcion: "Monitor 24 Pulgadas", precio: 120000.99 },
    { descripcion: "Webcam HD", precio: 24800.75 },
    { descripcion: "Impresora Multifunción", precio: 85000 },
    { descripcion: "Cable HDMI", precio: 10900 },]);
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [ivaAgregado, setIvaAgregado] = useState(false);

  const agregarProducto = () => {
    if (descripcion && precio) {
      const nuevoProducto = { descripcion, precio: parseFloat(precio) };
      const nuevosProductos = [...productos, nuevoProducto];
      setProductos(nuevosProductos);
      setProductosOriginales(nuevosProductos); // Actualiza originales
      setDescripcion('');
      setPrecio('');
      setIvaAgregado(false); // Reiniciar IVA si se agrega producto nuevo
    } else {
      alert("Completa la descripción y el precio");
    }
  };

  const mostrarProductos = () => {
    productos.forEach(p => {
      console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
    });
  };

  const ordenarProductos = () => {
    const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(ordenados);
    setProductosOriginales(ordenados);
  };

  const eliminarMasBarato = () => {
    if (productos.length === 0) return;
    const menorPrecio = Math.min(...productos.map(p => p.precio));
    const filtrados = productos.filter(p => p.precio !== menorPrecio);
    setProductos(filtrados);
    setProductosOriginales(filtrados);
  };

  const filtrarProductos = () => {
    const filtrados = productos.filter(p => p.precio > 20000);
    setProductos(filtrados);
    setProductosOriginales(filtrados);
  };

  const agregarIVA = () => {
    if (!ivaAgregado) {
      const conIVA = productos.map(p => ({
        ...p,
        precio: parseFloat((p.precio * 1.21).toFixed(2))
      }));
      setProductos(conIVA);
      setIvaAgregado(true);
    } else {
      // Restauracion a precios originales
      setProductos(productosOriginales);
      setIvaAgregado(false);
    }
  };

  /** 
   * //el array con los productos definidos
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

  // 2 - Crear un nuevo array con productos con precio mayor a $20.000
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

  // 4 - Ordenar el array original por precio de menor a mayor
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
  **/

  return (
    <div className="producto-wrapper">
      <h2 className="producto-titulo">Gestión de Productos</h2>

      <div className="producto-formulario">
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button onClick={agregarProducto}>Agregar</button>
      </div>

      <div className="producto-botones">
        <button onClick={filtrarProductos}>Filtrar '&gt;' $20.000</button>
        <button onClick={agregarIVA}>
          {ivaAgregado ? 'Quitar IVA' : 'Agregar IVA'}
        </button>
        <button onClick={ordenarProductos}>Ordenar</button>
        <button onClick={eliminarMasBarato}>Eliminar Menor Precio</button>
      </div>

      <ul className="producto-lista">
        {productos.map((p, index) => (
          <li key={index} className="producto-item">
            <span>{p.descripcion}</span>
            <span>${p.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Producto;

