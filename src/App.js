import React from "react";
import Index from "./components/Index.js";
import Palestras from "./components/path-drops/Palestras.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ingresso from "./components/ingresso/Ingresso.js";
import Workshops from "./components/path-drops/Workshops.js";
import Oficinas from "./components/path-drops/Oficinas.js";
import Ambiente from "./components/path-drops/Ambiente.js";
import SaibaMais from "./components/path-drops/SaibaMais.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ingresso" element={<Ingresso />} /> 
        <Route path="/palestras" element={<Palestras />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/oficinas" element={<Oficinas />} />
        <Route path="/performances" element={<Oficinas />} />
        <Route path="/ambiente" element={<Ambiente />} />
        <Route path="/saibamais" element={<SaibaMais />} />
      </Routes>
    </Router>
  );
};

export default App;
