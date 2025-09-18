import React from 'react'
import logo from '../../assets/images/Logo-Core 1.svg'

export default function Logo() {
  return (
    // Change <a> to be Link to route /home later
    <a>
        <img src={logo} alt='logotype'/>
    </a>
  )
}
