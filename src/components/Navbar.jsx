import React from 'react'
import './components.css'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <header>
    <img src={logo} alt="" />
    <nav>
      <a href="/">Startups</a>
      <a href="/">Contact</a>
      <button>Work with us!</button>
    </nav>
  </header>
  )
}

export default Navbar