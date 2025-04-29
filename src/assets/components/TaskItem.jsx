import { useState } from "react";

function TaskItem (props) {
    return (
        <div className="taskitem">
            <h3>{props.tarea}</h3><br />
        </div>
    );
}

export default TaskItem;