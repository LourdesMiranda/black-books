import React from 'react';
import './Recomendados.css';
import fondo from './fondo_calaveraIA.jpg';

const Recomendados = () => {
  return (
    <>
      <div className="animated-background"></div>
      <div className="recomendados-container">
        <h1>📌 Mis Recomendados</h1>
        <p>Aquí encontrarás mis libros favoritos y más recomendados...</p>
        {/* Puedes añadir más contenido aquí */}
      </div>
    </>
  );
};

export default Recomendados;