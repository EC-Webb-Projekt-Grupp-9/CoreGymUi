import React from 'react'
import logo from '../../assets/images/Logo-Core 1.svg'
import './logo.css'

export default function Logo() {
  return (
    // Change <a> to be Link to route /home later
    <a className='header-logo-container'>
        <img className='header-logo' src={logo} alt='logotype'/>
    </a>
  )
}
