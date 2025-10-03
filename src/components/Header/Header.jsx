import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'
import NavLinks from '../NavLinks/NavLinks'
import Hamburger from '../Hamburger/Hamburger'
import UserMenu from '../Pages/UserMenu'

export default function Header() {
  return (
    <header>
        <Logo />
        <div className='navlinks'><NavLinks /></div>
        <div className='hamburger'><Hamburger /></div>
         <div className='usermenu'><UserMenu /></div>
        
    </header>
  )
}
