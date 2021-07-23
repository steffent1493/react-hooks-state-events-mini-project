import React from "react";
import Task from "./Task"

function TaskList({tasks, removeFunction}) {
  
 
  return (
    <div className="tasks">
      {tasks.map(task => {
          return <Task key={task.text} text={task.text} category={task.category} removeFunction={removeFunction} />
      })}
    </div>
    
  );
}

export default TaskList;
