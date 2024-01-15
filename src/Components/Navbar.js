import React from 'react';
import '../assets/css/Navbar.css';
import Logo from '../assets/img/logo.jpg';

function Navbar() {
  return (
    <div className='nav'>
        <div className='container'>
            <div className='Nav-logo animate-pulse opacity-75'>
            <img src={Logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Navbar