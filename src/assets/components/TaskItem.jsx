import { useState } from "react";
import TaskList from "./TaskList";
import '../css/TaskInput.css';


function TaskItem (props) {

    const[elemento,setElemento] = useState(props.tarea);
    const[lista,setLista] = props.listaTareas;

    const eliminar = () => {
        console.log(elemento.id)
        const listaEliminada = lista.filter(t => t.id !== elemento.id);
        console.log(listaEliminada);
        setLista(listaEliminada);
        console.log("Tarea Eliminada")
    }

    const cambioEstado = (estado) => {
        if(estado == "realizada") {
            return "pendiente"
        }
        else {
            return "realizada"
        }
    }

    const realizar = (evento) => {
        const elementoNuevo = {
            id:elemento.id,
            descripcion: elemento.descripcion,
            alumno: elemento.alumno,
            estado: cambioEstado(elemento.estado)
        };
        setElemento(elementoNuevo);
        console.log("Tarea Realizada")
    }

    return (
        <div className="task-input-container">
            <h3>{elemento.descripcion}</h3>
            <h3>{elemento.alumno}</h3>
            <h3>Estado: {elemento.estado}</h3>
            <button onClick={realizar}>Realizada</button>
            <button onClick={eliminar}>Eliminar</button>
            
        </div>
    );
}

export default TaskItem;