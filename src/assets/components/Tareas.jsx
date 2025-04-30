import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

import '../css/TaskInput.css';

function Tareas () {

    const [lista,setLista] = useState(["Crear Repositorio en GitHub",
        "Agregar Colaboradores",
        "Crear Rama de Trabajo",
        "Hacer Commits con Avanzes"]);
    
    return(
        <div className="task-input-container">
            <TaskList tareas = {[lista,setLista]}></TaskList>
            <TaskInput tareas={[lista,setLista]}></TaskInput>
        </div>
    );
}

export default Tareas;