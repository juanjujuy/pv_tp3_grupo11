import { useState } from "react";
import TaskItem from "./TaskItem";

import '../css/TaskInput.css';

function TaskList (props) {

    const [lista,setLista] = props.tareas;


    return (
        <div className="task-input-container">
            <h3>Lista de Tareas</h3>
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