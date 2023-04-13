import React from 'react'
import './Footer.css'
import logoFooter from '../../image/MARCA_PUJANTE-09.png'

const Footer = () => {
  return (
    <div className='div-footer'>
        <p>Promovido por</p>
        <img className='logo-footer' src={logoFooter} alt='logo-footer' />
    </div>
  )
}

export default Footer