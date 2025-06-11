import React, { useState } from 'react';
import Header from './Header';
import './style.css';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };

  return (
    <div className="App">
      {/* Fondos */}
      <div className="static-background"></div>
      <div className="animated-background"></div>
      
      {/* Header */}
      <Header />
      
      {/* Contenido principal */}
      <main className="main-content">
        <div className="inicio">
          <h1>🔥 BLACK BOOKS 🔥</h1>
          <p>¿Te gusta perderte entre las profundidades de las letras?</p>
        </div>

        {/* Sección LIBROS - Versión mejorada */}
        <div className="seccion-con-titulo">
          <h2 className="titulo-seccion">📖 LIBROS 📖</h2>
          <div className="libros">
            {/* Libro Actual */}
            <div className="libro">
              <div className="libro-content">
                <img 
                  src={process.env.PUBLIC_URL + "/mundo_perdido.jpg"} 
                  alt="Mundo Perdido" 
                  className="libro-imagen"
                />
                <div className="libro-texto">
                  <h3>LIBRO ACTUAL</h3>
                  <p>Libro que actualmente estoy leyendo: Mundo Perdido</p>
                </div>
              </div>
              <div className="puntuacion">
                <div className="estrellas">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? "estrella-llena" : "estrella-vacia"}>★</span>
                  ))}
                </div>
                <span className="puntuacion-numero">4/5</span>
              </div>
            </div>

            {/* Libro del Mes */}
            <div className="libro">
              <div className="libro-content">
                <img 
                  src={process.env.PUBLIC_URL + "/doctor_sueño.jpg"} 
                  alt="Doctor Sueño" 
                  className="libro-imagen"
                />
                <div className="libro-texto">
                  <h3>LIBRO POR MES</h3>
                  <p>Mi favorito del mes: Doctor Sueño</p>
                </div>
              </div>
              <div className="puntuacion">
                <div className="estrellas">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 5 ? "estrella-llena" : "estrella-vacia"}>★</span>
                  ))}
                </div>
                <span className="puntuacion-numero">5/5</span>
              </div>
            </div>

            {/* Libro por Época */}
            <div className="libro">
              <div className="libro-content">
                <img 
                  src={process.env.PUBLIC_URL + "/doctor_sueño.jpg"} 
                  alt="Doctor Sueño" 
                  className="libro-imagen"
                />
                <div className="libro-texto">
                  <h3>LIBRO POR ÉPOCA</h3>
                  <p>Esta primavera me leí: Doctor sueño</p>
                </div>
              </div>
              <div className="puntuacion">
                <div className="estrellas">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? "estrella-llena" : "estrella-vacia"}>★</span>
                  ))}
                </div>
                <span className="puntuacion-numero">4/5</span>
              </div>
            </div>

            {/* Librería */}
            <div className="libro">
              <div className="libro-content">
                <img 
                  src={process.env.PUBLIC_URL + "/libreria.jpg"} 
                  alt="Librería" 
                  className="libro-imagen"
                />
                <div className="libro-texto">
                  <h3>LIBRERÍA</h3>
                  <p>Librerías que son amor a primera vista</p>
                </div>
              </div>
              <div className="puntuacion">
                <div className="estrellas">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 3 ? "estrella-llena" : "estrella-vacia"}>★</span>
                  ))}
                </div>
                <span className="puntuacion-numero">3/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección PELÍCULAS */}
        <div className="seccion-con-titulo">
          <h2 className="titulo-seccion">🎬 PELÍCULAS 🎬</h2>
          <div className="peliculas">
            <div className="pelicula">
              <img src={process.env.PUBLIC_URL + "/Netflix_Logo.jpg"} alt="Netflix" className="imgpelis" />
            </div>
            <div className="pelicula">
              <img src={process.env.PUBLIC_URL + "/Prime_Logo.jpg"} alt="Prime" className="imgpelis" />
            </div>
            <div className="pelicula">
              <img src={process.env.PUBLIC_URL + "/max_logo.jpg"} alt="Max" className="imgpelis" />
            </div>
            <div className="pelicula">
              <img src={process.env.PUBLIC_URL + "/diseny_logo.jpg"} alt="Disney" className="imgpelis" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>BLACK BOOKS. Email</p>

          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <div className="footer-links">
            <a href="/politica-privacidad">Redes sociales</a>
            <a href="/terminos">Perfil</a>
          </div>

          {/* Botón y disclaimer */}
          <div className="disclaimer-container">
            <button onClick={toggleDisclaimer} className="disclaimer-button">
              {showDisclaimer ? 'Ocultar aviso legal' : 'Mostrar aviso legal'}
            </button>

            {showDisclaimer && (
              <div className="disclaimer-text">
                Los logotipos de Netflix, Prime Video, Max y Disney+ son propiedad de sus respectivos titulares.
                Este sitio web no está afiliado, patrocinado ni aprobado por ninguna de estas plataformas.
                El uso de los logotipos se realiza con fines informativos dentro de contenido editorial.
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;