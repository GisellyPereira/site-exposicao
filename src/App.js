import React from "react";
import Index from "./components/Index.js";
import Palestras from "./components/path-drops/Palestras.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ingresso from "./components/ingresso/Ingresso.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ingresso" element={<Ingresso />} /> 
        <Route path="/palestras" element={<Palestras />} />
        {/* <Route path="/" element={<Index />} />
        <Route path="/" element={<Index />} /> 
        <Route path="/" element={<Index />} /> 
        <Route path="/"  element={<Index />} /> 
        <Route path="/" element={<Index />} /> */}
        
        {/* <Route path="/por-que-visitar" element={<Parceiros />} /> 
        <Route path="/regulamento"  element={<Parceiros />} /> 
        <Route path="/politica-de-privacidade" element={<Parceiros />} /> 
        <Route path="/mapa-da-feira" element={<Parceiros />} /> 
        <Route path="/hoteis" element={<Parceiros />} />
        <Route path="/restaurantes" element={<Parceiros />} /> 
        <Route path="/pontos-turisticos"  element={<Parceiros />} /> 
          */}
      </Routes>
    </Router>
  );
};

export default App;
