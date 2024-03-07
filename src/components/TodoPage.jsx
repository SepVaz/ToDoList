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


  const handleRemove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) 
  };


  return (
    
    
        <main>
            <div className="welcome"> 
        <h1>Welcome, {name}!</h1>

        <TodoInput onSubmit={addTodo}></TodoInput>
        {todos.map((todo) => (
          <Todo 
          key={todo.id} 
          id={todo.id}
          name={todo.name} 
          onRemove={() => handleRemove(todo.id)} />
        ))}
        </div>

      </main>
  
  )
}

export default TodoPage