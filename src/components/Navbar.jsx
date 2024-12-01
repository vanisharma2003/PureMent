import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar_div'>
     <h1 className="pacifico-regular">Pure<span>Ment</span></h1>
     <div className='navbar_list'>
      <ul>
        <li className='pacifico-regular'>Home</li>
        <li className='pacifico-regular'>Our Story</li>
        <li className='pacifico-regular'>Menu</li>
        <li className='pacifico-regular'>Contact US</li>
      </ul>
     </div>
    </div>

    </>
  )
}

export default Navbar
