import React from 'react'
import './Footer.css'
import logoFooter from '../../image/MARCA_PUJANTE_Prancheta 1.png'


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
    
    </div>
    
  )
}

export default Footer