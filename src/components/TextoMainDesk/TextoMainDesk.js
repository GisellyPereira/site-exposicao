import React from 'react';
import './TextoMainDesk.css'
import imgDony from '../../image/dony-brilho.png'
import { Link } from 'react-router-dom'

const TextoMainDesk = () => {
  return (
    <div className='Desktop' >
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

export default TextoMainDesk