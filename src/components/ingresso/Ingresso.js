import React from 'react'
import './Ingresso.css'
import { Link } from 'react-router-dom'

const Ingresso = () => {
  return (
    <div className='div-all-ingressos'>
        <h1>INGRESSOS</h1>
        <p>INDISPONÍVEIS NO MOMENTO, AGUARDE!</p>
        <Link className='btnLin-ingressos' to="/">Voltar</Link>
    </div>
  )
}

export default Ingresso