import React from 'react';
import Header from './Header';
import './style.css';

function App() {
  return (
    <div className="App">
      {/* Fondos */}
      <div className="static-background"></div>
      <div className="animated-background"></div>
      
      {/* Header */}
      <Header />
      
      {/* Contenido principal */}
      <main className="main-content">
        <div class="inicio">
                  <h1>🔥 BLACK BOOKS 🔥</h1>
                <p>¿Te gusta perderte entre las profundidades de las letras? </p>
        </div>
  {/* Sección LIBROS (estructura corregida) */}
  <div className="seccion-con-titulo">
    <h2 className="titulo-seccion">📖 LIBROS 📖</h2>
    <div className="libros">
      <div className="libro"><h3>LIBRO ACTUAL</h3><p>Libro que actualmente estoy leyendo: Mundo Perdido</p>
      </div>
      <div className="libro"><h3>LIBRO POR MES</h3><p>Mi favorito del mes: Doctor Sueño</p></div>
      <div className="libro"><h3>LIBRO POR ÉPOCA</h3><p>Esta primevera me leí: Doctor sueño</p></div>
      <div className="libro"><h3>LIBRERÍA</h3><p>Librerías que son amor a primera vista</p></div>
    </div>
  </div>

  {/* Sección PELÍCULAS (estructura corregida) */}
  <div className="seccion-con-titulo">
    <h2 className="titulo-seccion">🎬 PELÍCULAS 🎬</h2>
    <div className="peliculas">
      <div className="pelicula">NETFLIX</div>
      <div className="pelicula">PRIME</div>
      <div className="pelicula">MAX</div>
      <div className="pelicula">DISNEY</div>
    </div>
  </div>
</main>
    
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p> BLACK BOOKS. Email</p>
          
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <div className="footer-links">
            <a href="/politica-privacidad">redes sociales</a>
            <a href="/terminos">Perfil</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;