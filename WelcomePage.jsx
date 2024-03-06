import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const [name, setName] = useState("")
    const navigate = useNavigate();


    const handleLogin = () => {
        navigate("/todo", {state: {name}})
    };


  return (
    <main>
        <div className="welcome">
        <h1>Welcome!</h1>
        <form action="">
        <input type="text"
        placeholder="Enter your name"
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
        </form>
        </div>
    </main>
  )
}

export default WelcomePage