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
        <div class="libros">
                  <h1>CAJAS DE LIBROS</h1>
                <p>PONER 4 CAJAS</p>
        </div>
        <div class="peliculas">
                  <h1>CAJAS DE PELÍCULAS</h1>
                <p>PONER 4 CAJAS DE PLATAFORMA</p>
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