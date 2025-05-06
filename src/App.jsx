import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './assets/components/Producto'
import Tareas from './assets/components/Tareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="contenedor-principal">
      <h1>Programacion Visual - TP3</h1>
      <Producto></Producto>
      <Tareas></Tareas>
    </div>
  );
}

export default App
