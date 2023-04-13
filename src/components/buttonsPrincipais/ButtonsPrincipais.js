import React from "react";
import "./ButtonsPrincipais.css";

const ButtonsPrincipais = () => {

    const handleWhatsAppClick = () => {
      window.location.href = 'https://wa.me/559891010304';
    };
    const handleMapsClick = () => {
      window.open(`https://www.google.com.br/maps/dir/-2.5286459,-44.2952611/multicenter+neg%C3%B3cios+e+eventos/@-2.5144732,-44.298519,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x7f68ddd8bc4719d:0xb967a0aada8a5665!2m2!1d-44.2670215!2d-2.5033531`);
    };
  
  
  
  return (
    <div className="div-btn">
      <button className="btn" onClick={handleWhatsAppClick}>Quero <span className="btn-p">Expor</span></button>
      <button className="btn" onClick={handleMapsClick}>Como <span className="btn-p">Chegar</span></button>
      <button className="btn" onClick={handleWhatsAppClick}>Fale <span className="btn-p">Conosco</span></button>
    </div>
  );
};

export default ButtonsPrincipais;
