import React from 'react'
import './SobreNos.css'
import { Link } from 'react-router-dom';
// import imageLogo from '../../image/MARCA_CASA&CIA-07.png'


const SobreNos = () => {
  return (
    <div className='div-all-sobrenos' id='sobre-nos'>
      <div className='div-sobre' >
        <h1 className='h1-sobre-expo'>SOBRE <span className='span-sobre'>NÓS</span></h1>
        <p>
          A Expo Casa&Cia movimenta a economia e a indústria da construção civil,
          estimula o progresso, potencializa o mercado imobiliário, fomenta o
          comércio e o setor de prestação de serviços, incentiva o
          empreendedorismo, sincroniza os órgãos públicos e instituições
          administrativas, promove integração e inclusão, facilita e soluciona a
          vida das pessoas. Em 26 e 27 de Agosto os grandes players do mercado
          estarão reunidos no ambiente adequado de negócios, prestação de
          serviço de utilidade pública e expansão de networking.
        </p>
      </div>
      
      <div className='div-expocasa'>
        <h1 className='h1-sobre-expo'>A EXPO <span className='span-sobre'>CASA&CIA</span></h1>
        <p>
          Contará com as principais empresas da Indústria da construção civil e
          do mercado imobiliário em várias subdivisões dos segmentos, serão mais
          de 65 expositores numa oportunidade inédita no cenário local, pois
          Expo Casa&Cia está empenhada em criar uma "plataforma de geração e
          progresso nos negócios, reflexão sobre soluções inteligentes de
          integração e sincronização de todos que fazem parte da cadeia
          produtiva, bem como os setores públicos, administrativos e privados",
          simplificando processos, acelerando a produção e otimizando a vida da
          sociedade. A exposição segue de perto os pontos quentes e o movimento
          das tendências do desenvolvimento, e está alinhada com os modelos
          padrão a nível global. Além de todas as vertentes, a exposição contará
          com a presença de universidades para desenvolvimentos de conteúdo e
          ideias para que possam debater e criar novos conceitos, sobre os
          desafios e o uso das ferramentas e tecnologias nas áreas de
          engenharia, arquitetura, design, administração, economia e direito. A
          programação oficial será um conjunto com diversos parceiros
          conceituados, que também defenderão temas sobre sustentabilidade,
          tecnologia e conectividade, conceitos, experiências, design,
          tendências e inspirações para o setor. Não fique de fora desse mega
          evento, Expo Casa&Cia programe – se!
        </p>
      </div>
      <div className='div-btnLin-sobrenos'>
        <Link className='btnLin-sobrenos' to="/ingresso">Adquira o seu ingresso</Link>
      </div>
      <div className='div-faleconosco'>
      <a href='https://api.whatsapp.com/send?phone=559891653821' target='_blank' className='link-fale-insta' rel="noreferrer">Fale conosco</a>
        <p className='p-siga' >Siga-nos no <a href='https://www.instagram.com/expocasaecia/' target="_blank" className='link-fale-insta' rel="noreferrer">Instagram</a></p>
      </div>
    </div>
  );
};

export default SobreNos;