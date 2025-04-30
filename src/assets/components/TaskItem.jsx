import { useState } from "react";

import '../css/TaskInput.css';

function TaskItem (props) {
    return (
        <div className="task-input-container">
            <h3>{props.tarea}</h3><br />
        </div>
    );
}

export default TaskItem;