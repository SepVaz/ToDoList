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
      
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Add something"
          value={todoName}
          onChange={handleInputChange} 
          required/>

          <button type="submit">+</button>

        </form>
    </div>
  )
}

export default TodoInput