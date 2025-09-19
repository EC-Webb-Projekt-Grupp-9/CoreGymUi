import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'
import NavLinks from '../NavLinks/NavLinks'
import Hamburger from '../Hamburger/Hamburger'

export default function Header() {
  return (
    <header>
        <Logo />
        <div className='navlinks'><NavLinks /></div>
        <div className='hamburger'><Hamburger /></div>
        
    </header>
  )
}
