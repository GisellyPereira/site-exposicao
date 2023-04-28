import React from 'react'
import imgDony from '../../image/donys-3.png'
import { Link } from 'react-router-dom'
import './TextoMainMob.css'



const TextoMainMob = () => {
  return (
    <div className='Mobile'>
    <div className='text-img-mob'>
    <div className='imagens-mob'>
      <img src={imgDony} alt='Dony' className='imgDonyMob'/>
    </div>
    <div className='text-palestra-mob'>
      <p>Não perca a oportunidade única de aprender com o <span className='p-span-mob'>Dony De Nuccio</span>, um profissional de renome 
        na área <span className='p-span-mob'>financeira</span> e <span className='p-span-mob'>empresarial</span>, durante sua palestra. 
        Garanta seu lugar agora mesmo e aproveite essa chance de networking!</p>

       <Link className='btnLin-mob' to="/ingresso">Adquira o seu ingresso</Link>
    </div>
  </div>
  </div>
  )
}

export default TextoMainMob
