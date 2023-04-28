import React from 'react'
import './Footer.css'
import logoFooter from '../../image/MARCA_PUJANTE_Prancheta 1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='all-footer'>
      <div className='div-footer'>
        <p>Promovido por</p>
        <img className='logo-footer' src={logoFooter} alt='logo-footer' />
    </div>
    <div>
      <p className='p-footer'>© 2023 - Todos os direitos reservados</p>
    </div>
    <div className='div-btnLin-footer'>
      <Link className='btnLin-footer' to="/ingresso">Adquira o seu ingresso</Link>
    </div>
    </div>
    
  )
}

export default Footer