import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'
import NavLinks from '../NavLinks/NavLinks'

export default function Header() {
  return (
    <header>
        <Logo />
        <NavLinks />
    </header>
  )
}
