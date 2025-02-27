import React, { useState } from 'react'

function TodoInput({onSubmit}) {
const [todoName, setTodoName] = useState("")

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const capitalizedInput = capitalizeFirstLetter(inputValue);
    setTodoName(capitalizedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const capitalizedTodo = capitalizeFirstLetter(todoName);
    onSubmit(capitalizedTodo);
    setTodoName("");
  };

  return (
    <div className="welcome">
      
        <form onSubmit={handleSubmit} className="form">
          <input 
          type="text" 
          placeholder="What needs to be done?"
          id="form"
          value={todoName}
          onChange={handleInputChange} 
          required/>

          <button type="submit" className="add-btn">+</button>

        </form>
    </div>
  )
}

export default TodoInput