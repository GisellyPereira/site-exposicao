import React from 'react'
import './style.css'
import Menu from './menus/Menu.js';
import ButtonsPrincipais from './buttonsPrincipais/ButtonsPrincipais.js';
import Footer from './footer/Footer.js';
import Logo from './Logo';


const index = () => {
  return (
    <div className='tudo'>
      <Logo />
      <Menu />
      <ButtonsPrincipais />
      <Footer />
      
    </div>
  )
}

export default index;