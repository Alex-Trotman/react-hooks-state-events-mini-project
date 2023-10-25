import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask}) {

  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task key={task.text} category={task.category} text={task.text} handleDelete={() => deleteTask(task.text)}/>
        );
      })}
    </div>
  );
}

export default TaskList;
