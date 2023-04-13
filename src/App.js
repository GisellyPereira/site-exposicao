import React from "react";
import Index from "./components/Index.js";
import Expositores from "./components/expositores/Expositores.js";
import Parceiros from "./components/parceiros/Parceiros.js";
import QuemSomos from "./components/menus/quemSomos/QuemSomos.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/exp" element={<Expositores />} /> 
        <Route path="/part" element={<Parceiros />} /> 
        <Route path="/quem-somos"  element={<QuemSomos />} /> 
        <Route path="/por-que-visitar" element={<Parceiros />} /> 
        <Route path="/regulamento"  element={<Parceiros />} /> 
        <Route path="/politica-de-privacidade" element={<Parceiros />} /> 
        <Route path="/mapa-da-feira" element={<Parceiros />} /> 
        <Route path="/hoteis" element={<Parceiros />} />
        <Route path="/restaurantes" element={<Parceiros />} /> 
        <Route path="/pontos-turisticos"  element={<Parceiros />} /> 
        <Route path="/palestras" element={<Parceiros />} /> 
        <Route path="/workshops" element={<Parceiros />} /> 
        <Route path="/oficinas"  element={<Parceiros />} /> 
        <Route path="/shows" element={<Parceiros />} /> 
      </Routes>
    </Router>
  );
};

export default App;
