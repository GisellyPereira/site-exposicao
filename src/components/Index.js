import React from 'react'
import './style.css'


import Header from './Header/Header';

import SobrePalestrante from './sobrePalestrante/SobrePalestrante';
import Expositores from './expositores/Expositores';
import Parceiros from './parceiros/Parceiros';
import SobreNos from './SobreNos/SobreNos';
import Footer from './footer/Footer';


const index = () => {
  return (
    <div className='tudo'>
      <Header />
      <SobreNos />
      <SobrePalestrante />
      <Expositores />
      <Parceiros />
      <Footer />
    </div>
  )
}

export default index;