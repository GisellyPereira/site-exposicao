import React from 'react'
import Menu from '../menus/Menu'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './Logo'
import imgDony from '../../image/donys-3.png'
import AnimatedNumber from './AnimatedNumber';


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
    <div className='text-img'>
      <div className='text-palestra'>
        <h1>PALESTRA</h1>
        <h1>CONFIRMADA!</h1>
        <p>Não perca a oportunidade única de aprender com o <span className='p-span'>Dony De Nuccio</span>, um profissional de renome 
          na área <span className='p-span'>financeira</span> e <span className='p-span'>empresarial</span>, durante sua palestra. 
          Garanta seu lugar agora mesmo e aproveite essa chance de networking!</p>

         <Link className='btnLin' to="/ingresso">Adquira o seu ingresso</Link>
      </div>
      <div className='imagens'>
        <img src={imgDony} alt='Dony' className='imgDony'/>
      </div>
      
    </div>
        
     
    </div>
  )
}

export default Header;