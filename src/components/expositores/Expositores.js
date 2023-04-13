import React from "react";
import Footer from "../footer/Footer";
import Logo from "../Logo";
import Menu from "../menus/Menu";
import "./Expositores.css";

const expos = [
  {
    title: "Empresa 01",
    stand: "Stand 0001",
  },
  {
    title: "Empresa 02",
    stand: "Stand 0002",
  },
  {
    title: "Empresa 03",
    stand: "Stand 0003",
  },
  {
    title: "Empresa 04",
    stand: "Stand 0004",
  },
  {
    title: "Empresa 05",
    stand: "Stand 0005",
  },
  {
    title: "Empresa 06",
    stand: "Stand 0006",
  },
  {
    title: "Empresa 07",
    stand: "Stand 0007",
  },
  {
    title: "Empresa 08",
    stand: "Stand 0008",
  },
  {
    title: "Empresa 09",
    stand: "Stand 0009",
  },
  {
    title: "Empresa 10",
    stand: "Stand 0010",
  },
  {
    title: "Empresa 11",
    stand: "Stand 0011",
  },
  {
    title: "Empresa 12",
    stand: "Stand 0012",
  },
  {
    title: "Empresa 13",
    stand: "Stand 0013",
  },
  {
    title: "Empresa 14",
    stand: "Stand 0014",
  },
  {
    title: "Empresa 15",
    stand: "Stand 0015",
  },
  {
    title: "Empresa 16",
    stand: "Stand 0016",
  },
  {
    title: "Empresa 17",
    stand: "Stand 0017",
  },
  {
    title: "Empresa 18",
    stand: "Stand 0018",
  },
  {
    title: "Empresa 19",
    stand: "Stand 0019",
  },
  {
    title: "Empresa 20",
    stand: "Stand 0020",
  },
];

const expositores = () => {
  return (
    <div className="div-exp">
      <Logo />
      <Menu />
    <div className="tudo-exp">
      <h1 className="h1-exp">Expositores <span className="h1-exp-span"> 2023</span></h1>
      <p className="p-exp">Com um amplo avanço espaço voltado á inovação e às soluções para cidades inteligentes, a Expo entrega uma experiência diferenciada para seus visitantes</p>
      <div className="container-exp">
        {expos.map((item, index) => (
          <div className="card-exp" key={index}>
            <div className="card-exp-body">
              <h5 className="card-exp-title">{item.title}</h5>
              <p className="card-exp-p"></p>
              <p className="card-exp-text">{item.stand}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default expositores;
