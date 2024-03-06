
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WelcomePage from '../WelcomePage'
import TodoPage from './components/TodoPage'


function App() {
  return (
  <BrowserRouter>
  <>
  <Routes>
    <Route exact path="/" element={<WelcomePage/>}/>
    <Route exact path="/todo" element={<TodoPage/>}/>
  </Routes>
  </>
  </BrowserRouter>
 
    )
}

export default App
