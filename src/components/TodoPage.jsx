import React, { useState} from 'react'
import { useLocation } from 'react-router-dom';
import TodoInput from './TodoInput';
import Todo from './Todo';

function TodoPage() {

const location = useLocation()
const {name} = location.state

      const [todos, setTodos] = useState([])

  const addTodo = (name) => {
    setTodos((prev) => [...prev, {id: Math.floor(Math.random() * 1000), name }]);
  };


  const handleRemove = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index)) 
  };


  return (
    
    
        <main>
        <h1>Welcome, {name}!</h1>

        <TodoInput onSubmit={addTodo}></TodoInput>
        {todos.map((todo, index) => (
          <Todo 
          key={todo.id} 
          name={todo.name} 
          onRemove={() => handleRemove(index)} />
        ))}

      </main>
  
  )
}

export default TodoPage