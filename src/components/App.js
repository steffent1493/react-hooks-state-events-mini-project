import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [currentTasks, setCurrentTasks] =useState(tasks)
  const [categoryState, setCategoryState] =useState("All")

function removeFunction(text) {
  const newTaskListArray = currentTasks.filter(task => task.text !== text)
  const newCurrentTaskListArray = tasks.filter(task => task.text !== text)
  setTasks(newTaskListArray)
  setCurrentTasks(newCurrentTaskListArray)
}

function filterCategory(chosenCategory) {
  const newTaskListArray = tasks.filter(task => {
    if(chosenCategory === "All") {
      return true
    } else { 
      return chosenCategory === task.category}
  })
  setCategoryState(chosenCategory)
  setCurrentTasks(newTaskListArray)
}

function onTaskFormSubmit(task) {
  const newTaskListArray = [...tasks, task]
  setTasks(newTaskListArray)

  if(categoryState === task.category || categoryState === "All") {
    const newCurrentTaskListArray = [...currentTasks, task]
    setCurrentTasks(newCurrentTaskListArray)
  }
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryState={categoryState} filterCategory={filterCategory} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={currentTasks} removeFunction={removeFunction}/>
    </div>
  );
}

export default App;
