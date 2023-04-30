import React from 'react'
import imgDony from '../../image/dony-brilho.png'
import { Link } from 'react-router-dom'
import './TextoMainMob.css'
import logoF from '../../image/MARCA_PUJANTE-09.png'
import AnimatedNumber from '../Header/AnimatedNumber.js';


const TextoMainMob = () => {
  return (
    <div className='Mobile'>
    <div className='desc-evento'>
      <p className='desc-evento-p'>O 
      <span className='desc-evento-span'>MAIOR EVENTO DA CONSTRUÇÃO CIVIL </span>
      REALIZADO EM <span className='desc-evento-span'>SÃO LUÍS</span></p>
    </div>
    <fieldset className='div-extimas-num-mob'>
          <legend className='extimas-mob'>ESTIMATIVA</legend>
           <div className='numbers-mob'>
            <div className='num-p-mob'>
              <span className='span-numero-mob'>
                  <p>+</p>
                  <AnimatedNumber value={70} />
              </span>
                  <p className='class-desc'>Expositores</p>
            </div>
            
            <div className='num-p-mob'>
              <span className='span-numero-mob'>
                  <p>+</p>
                  <AnimatedNumber value={3500} />
              </span>
                  <p className='class-desc'>Visitantes</p>
            </div>
            <div className='num-p-mob'>
              <span className='span-numero-mob'>
                  <p>+</p>
                  <AnimatedNumber value={90000000} />
              </span>
                  <p className='class-desc'>Em negócios</p>
            </div>  
         </div>
         </fieldset>
    <div className='text-img-mob'>
    
    <div className='text-palestra-mob'>
    <h2 className="h2-mob">PALESTRA</h2>
    <h2 className="h2-mob">CONFIRMADA!</h2>
      <p className='texto-p'>Não deixe de aprender com <span className='p-span-mob'>Dony De Nuccio</span>,
      um profissional na área <span className='p-span-mob'>financeira</span> e também <span className='p-span-mob'>empresarial</span>.
      </p>
      <p className='temas-abr-mob'>Temas abordados:</p>
      <p className='temas-abr-mob-2'>Comunicação, empreendorismo, economia, educação e carreira</p>
      <div className='div-footer-mob'>
        <p>Realização</p>
        <img className='logo-footer-mob' src={logoF} alt='logo-footer' />
    </div>
    
    </div>
    <div className='imagens-mob'>
      <img src={imgDony} alt='Dony' className='imgDonyMob'/>
    </div>
  </div>
  <Link className='btnLin-mob' to="/ingresso">Adquira o seu ingresso</Link>
  </div>
  )
}

export default TextoMainMob
