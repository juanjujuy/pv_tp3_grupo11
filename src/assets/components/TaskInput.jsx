import { useState } from "react";
import TaskItem from "./TaskItem";

import '../css/TaskInput.css';

function TaskInput (props) {

const [lista,setLista] = props.tareas;
const [nuevo,setNuevo] = useState ("");

const guardarNombre = (event) => {
    setNuevo(event.target.value);
}

const agregarTarea = (event) => {
    event.preventDefault();
    setLista([...lista, nuevo]);
    console.log(nuevo);
    setNuevo("");

}

    return(
        <div className="task-input-container">
            <h2>Nueva Tarea</h2>
            <form onSubmit={agregarTarea}>
            <label>Ingrese la nueva Tarea</label>
            <input type="text" value={nuevo} onChange={guardarNombre}/>
            <button type="submit">Agregar</button>
            </form>
            <h2>Ultima Tarea Agregada</h2>
            <TaskItem tarea={lista[lista.length-1]}></TaskItem>
        </div>
    );
}

export default TaskInput;