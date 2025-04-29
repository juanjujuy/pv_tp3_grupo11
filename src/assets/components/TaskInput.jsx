import { useState } from "react";
import TaskItem from "./TaskItem";

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

}

    return(
        <div>
            <h3>Nueva Tarea</h3>
            <form onSubmit={agregarTarea}>
            <label>Ingrese la nueva Tarea</label>
            <input type="text" value={nuevo} onChange={guardarNombre}/>
            <button type="submit">Agregar</button>
            </form>
            <TaskItem tarea={lista[lista.length-1]}></TaskItem>
        </div>
    );
}

export default TaskInput;