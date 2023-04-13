import React from "react";
import Logo from "../../Logo";
import Menu from "../Menu";
import Footer from "../../footer/Footer";
import "./QuemSomos.css";

const QuemSomos = () => {
  return (
    <div className="div-principal-qs">
      <Logo />
      <Menu />
      <div className="div-qs">
        <h1>Somos A Expo Casa&Cia</h1>
        <p>
          A ExpoCasa&Cia movimenta a economia e a indústria da construção civil,
          estimula o progresso, potencializa o mercado imobiliário, fomenta o
          comércio e o setor de prestação de serviços, incentiva o
          empreendedorismo, sincroniza os órgãos públicos e instituições
          administrativas, promove integração e inclusão, facilita e soluciona a
          vida das pessoas. Em 26 e 27 de Agosto os grandes players do mercado
          estarão reunidos no ambiente adequado de negócios, prestação de
          serviço de utilidade pública e expansão de networking.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default QuemSomos;
