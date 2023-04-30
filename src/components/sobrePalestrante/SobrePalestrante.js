import React from 'react'
import imgDonyMin from '../../image/dony-min.png';
import Facebook from '../../image/facebook.png';
import Instagram from '../../image/insta.png.png';
import Linkedin from '../../image/linkedin.png';
import Twitter from '../../image/twitter.png';
import './SobrePalestrante.css'

const SobrePalestrante = () => {
  return (
    <div className='all-div-sobrepalestra'>
    <div className='all-palestra'>
      <div className="sobre-palestrante">
        <div className="sobre-palestrante-img">
          <div className="sobre-palestrante-img2">
             <img src={imgDonyMin} alt="Dony" className="imgDonyMin" />
             <div className="redes-sociais">
                <a href="https://www.facebook.com/dony.nuccio" target="_blank" rel="noreferrer"  >
                    <img className='icon-redes face' src={Facebook} alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/donydenuccio/" target="_blank" rel="noreferrer">
                    <img className='icon-redes' src={Instagram} alt="instagram"/>
                </a>
                <a href="https://www.linkedin.com/in/donydenuccio/" target="_blank" rel="noreferrer">
                    <img className='icon-redes' src={Linkedin} alt="linkedin"/>
                </a>
                <a href="https://twitter.com/DonyDeNuccio" target="_blank" rel="noreferrer">
                    <img className='icon-redes' src={Twitter} alt="twitter"/>
                </a>
            </div>    
          </div>
         
            
        <div className='div-temas'>
          <h2>Temas abordados</h2>
          <ul className="temas">
            <li>Comunicação</li>
            <li>Economia</li>
            <li>Empreendedorismo</li>
            <li>Educação</li>
            <li>Carreira</li>
          </ul>
        </div>
      </div>
        </div>
        <div className="sobre-palestrante-text">
          <h1>Sobre o Palestrante</h1>
          <h2>Dony De Nuccio</h2>
          <h3>Âncora do programa Conta Corrente</h3>
          <p>
            Dony De Nuccio é jornalista e economista. Iniciou sua carreira na
            televisão , em 2011, como repórter da Rede Globo tendo passagem na
            GloboNews, entre 2012 e 2017. Entre 2017 e 2019, foi âncora do
            Jornal Hoje. Atualmente, trabalha como âncora do Conta Corrente,
            editor de Economia do Jornal das Dez e comentarista de economia do
            H1. Suas palestras abordam os temas de jornalismo econômico,
            economia, educação financeira,
            empreendedorismo, mudança de rumo e carreira.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobrePalestrante
