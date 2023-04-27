import React from 'react';
import logo from '../.././image/marca-com-data.png';
import './Header.css';

const Logo = () => {
  return (
    <div className='div-logo'>
      <img className='logo' src={logo} alt="logo" />
    </div>
  )
}

export default Logo
