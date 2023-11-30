import React from 'react'
import DarkMode from '../Main/darkMode'

const Navbar = () => {
    function handleClick() {
        document.body.classList.toggle("dark")
    }
  return (
    <div>
        <button  onClick={handleClick}>+</button>
        <DarkMode/>
    </div>
  )
}

export default Navbar