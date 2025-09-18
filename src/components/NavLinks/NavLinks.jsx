import React from 'react'
import { Links, NavLink } from 'react-router-dom'
import './navLinks.css'

export default function NavLinks() {
  return (
    <nav className='nav-box'>
        <NavLink to={"/"} className='nav-links'>Startsida</NavLink>
        <NavLink to={"/booking"} className='nav-links'>Boka Pass</NavLink>
    </nav>
  )
}
