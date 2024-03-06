import React, { useState } from 'react'

function TodoInput({onSubmit}) {
const [todoName, setTodoName] = useState("")

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const capitalizedTodo = capitalizeFirstLetter(todoName);
    onSubmit(capitalizedTodo);
    setTodoName("");
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Add something"
          value={todoName}
          onChange={e => setTodoName(e.target.value)} required/>

          <button type="submit">+</button>

        </form>
    </div>
  )
}

export default TodoInput