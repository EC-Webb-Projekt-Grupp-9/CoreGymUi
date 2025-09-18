import React from 'react'
import logo from '../../assets/images/Logo-Core 1.svg'
import './logo.css'
import { Link } from 'react-router'

export default function Logo() {
  return (    
    <Link className='header-logo-container' to={"/"}>
        <img className='header-logo' src={logo} alt='logotype'/>
    </Link>
  )
}
