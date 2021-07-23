import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, updateForm] = useState({text: "", category: 'Code'})

  function handleChange(event) {
    const name = event.target.name
    const updatedObj = {
      ...formData,
      [name]: event.target.value
    }
    updateForm(updatedObj)
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      const newTask = {...formData}
      onTaskFormSubmit(newTask)
    }}
      className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categories.map(category => {
            if(category != "All") {
              return <option value={category} key={category}>{category}</option>
            }
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
