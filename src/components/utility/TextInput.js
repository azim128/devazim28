import React from 'react'
import '../style/textInput.css'

const TextInput = (props) => {
  const {type, placeholder, icon}=props
  return (
    <div className="textInput my-2">
        <input type={type} placeholder={placeholder} />
        <span className="material-icons-outlined"> {icon} </span>
        
    </div>
  )
}

export default TextInput