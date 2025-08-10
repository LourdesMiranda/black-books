import React from 'react';
import './Articulos.css';
import fondo from './fondo_calaveraIA.jpg';

const Articulos = () => {
  return (
    <>
      <div className="animated-background"></div>
      <div className="articulos-container">
        <h1>📌 Artículos</h1>
        <p>Aquí encontrarás mis artículos escritos para la revista Lo desconocido</p>
        {/* Puedes añadir más contenido aquí */}
      </div>
    </>
  );
};

export default Articulos;