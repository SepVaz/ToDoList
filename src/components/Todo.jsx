import React, { useState} from 'react'
import binImage from "../assets/bin.svg"

function Todo({name, onRemove}) {
const [done, setDone] = useState(false);

const handleToggleDone = () => {
  setDone(!done)
}

  return (
    <div className={"todo" + (done ? "done" : "")} >
    
    <span onClick={handleToggleDone}>{name}</span> 

      <button className="remove-btn" onClick={onRemove}>
        <img src={binImage}  alt="Remove" width="10" height="15" /></button>
    </div>
    
  )
}

export default Todo