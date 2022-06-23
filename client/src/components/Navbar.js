import React from 'react'
import './Navbar.css'



function Navbar() {
  return (
    <nav>
      <div class="navbar">
        <div class="navbar-item">Home</div>
        <div class="navbar-item">About</div>
        <div class="navbar-item"><img src="http://localhost:8080/images/logo.png" width="75" height="75" /></div>
        <div class="navbar-item">Portfolio</div>
        <div class="navbar-item">Services</div>
      </div>
    </nav>

  )
}

export default Navbar