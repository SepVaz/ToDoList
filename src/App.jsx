
import React, {useState} from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (name) => {
    setTodos((prev) => [...prev, {id: Math.floor(Math.random() * 1000), name }]);
  };


  const handleRemove = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index)) 
  };
 
  return (<>

      <main>
        <TodoInput onSubmit={addTodo}></TodoInput>
        {todos.map((todo, index) => (
          <Todo 
          key={todo.id} 
          name={todo.name} 
          onRemove={() => handleRemove(index)} />
        ))}

      </main>
     
    </>)
}

export default App
