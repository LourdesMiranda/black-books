import React, { useState, useEffect } from 'react';
import './style.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + "/images/logo_bb.jpg"}
            alt="Lourdes Miranda" 
            className="profile-img"
          />
          <h1>BLACK BOOKS</h1>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#leidos" onClick={() => setMenuOpen(false)}>Leídos</a></li>
            <li><a href="#recomendados" onClick={() => setMenuOpen(false)}>Recomendados</a></li>
            <li><a href="#autores" onClick={() => setMenuOpen(false)}>Autores</a></li>
            <li><a href="#articulos" onClick={() => setMenuOpen(false)}>Artículos</a></li>
            <li><a href="#club" onClick={() => setMenuOpen(false)}>Club de Lectura</a></li>
            <li><a href="#cementerio" onClick={() => setMenuOpen(false)}>Cementerio</a></li>
            <li><a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;