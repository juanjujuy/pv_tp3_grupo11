import { useState } from "react";

import '../css/TaskInput.css';

function TaskInput (props) {

const [lista,setLista] = props.tareas;
const [nuevo,setNuevo] = useState ("");
const [alumno,setAlumno] = useState("");

let contador=lista.length-1;

const guardarAlumno = (event) => {
    setAlumno(event.target.value);
}

const guardarNombre = (event) => {
    setNuevo(event.target.value);
}

const crearTarea = (descripcionTarea, alumno) => {
    contador++;
    return {
        id: contador,
        descripcion: descripcionTarea,
        alumno: alumno,
        estado: "pendiente"};
}

const agregarTarea = (event) => {
    event.preventDefault();
    const nuevaTarea = crearTarea(nuevo,alumno);
    setLista([...lista, nuevaTarea]);
    console.log(nuevaTarea.descripcion);
    setAlumno("");
    setNuevo("");
    console.log(nuevaTarea);

}

    return(
        <div className="task-input-container">
            <h2>Nueva Tarea</h2>
            <form onSubmit={agregarTarea}>
            <label>Ingrese la nueva Tarea</label>
            <input type="text" value={nuevo} onChange={guardarNombre}/>
            <label>Alumno Designado a la Tarea</label>
            <input type="text" value={alumno} onChange={guardarAlumno} />
            <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default TaskInput;