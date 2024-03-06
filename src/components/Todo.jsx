import React from 'react'
import binImage from "../assets/bin.svg"

function Todo({name, onRemove}) {


  return (
    <div className="todo">
      
    <span>{name}</span> 
      <button className="remove-btn" onClick={onRemove}>
        <img src={binImage}  alt="Remove" width="10" height="15" /></button>
    </div>
    
  )
}

export default Todo