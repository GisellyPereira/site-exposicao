import React from 'react'
import Menu from '../menus/Menu'

import './Header.css'
import Logo from './Logo'

import AnimatedNumber from './AnimatedNumber';
import TextoMainDesk from '../TextoMainDesk/TextoMainDesk';
import TextoMainMob from '../TextoMainMob/TextoMainMob';


const Header = () => {
  return (
    <div className='page-01'>
    <div className='div-logo-number'>
         <Logo /> 
         <div className='div-extimas-num'>
          <p className='extimas'>Estimativas:</p>
           <div className='numbers'>
            <div className='num-p'>
              <span className='span-numero'>
                  <p>+</p>
                  <AnimatedNumber value={70} />
              </span>
                  <p>Expositores</p>
            </div>
            
            <div className='num-p'>
              <span className='span-numero'>
                  <p>+</p>
                  <AnimatedNumber value={3500} />
              </span>
                  <p>Visitantes</p>
            </div>
            <div className='num-p'>
              <span className='span-numero'>
                  <p>+</p>
                  <AnimatedNumber value={90000000} />
              </span>
                  <p>Em negócios</p>
            </div>  
         </div>
         </div>
        
    </div>

    <div>
        <Menu />
    </div>
        <TextoMainDesk className="txtDesk" />
        <TextoMainMob className="txtMob" />
    </div>
  )
}

export default Header;