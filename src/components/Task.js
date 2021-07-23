import React from "react";

function Task({category, text, removeFunction}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => removeFunction(text)}>X</button>
      
    </div>
  );
}

export default Task;
