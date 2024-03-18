import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const [name, setName] = useState("")
    const navigate = useNavigate();


    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

      const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const capitalizedInput = capitalizeFirstLetter(inputValue);
        setName(capitalizedInput);
    }
    
      const handleLogin = (e) => {
        e.preventDefault();
        const capitalizedName = capitalizeFirstLetter(name);
        navigate('/todo', { state: { name: capitalizedName } });
      }

  return (
    
    <main>
        <div className="welcome">
        <h1>Welcome!</h1>
        <form>
        <input type="text"
        placeholder="Enter your name"
        value={name} 
        onChange={handleInputChange}
        required
        />

        <button onClick={handleLogin} className="login-btn">Login</button>
        </form>
        </div> 
    </main>
    
  )
}

export default WelcomePage