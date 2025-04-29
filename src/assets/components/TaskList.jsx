import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList (props) {

    const [lista,setLista] = props.tareas;


    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {lista.map((elemento,index)=> (<li key={index}>
                    <TaskItem tarea = {elemento}></TaskItem>
                    <button>Realizada</button>
                    <button>Eliminar</button>
                    </li>))}
            </ul>

        </div>
    );
}

export default TaskList;