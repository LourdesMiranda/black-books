import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          {/* Aquí envuelvo logo y texto en Link a la raíz */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="logo-link" style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
            <img 
              src={process.env.PUBLIC_URL + "/images/logo_bb.jpg"}
              alt="Lourdes Miranda" 
              className="profile-img"
              style={{marginRight: '10px'}}
            />
            <h1>BLACK BOOKS</h1>
          </Link>
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
            <li><Link to="/Leidos" onClick={() => setMenuOpen(false)}>Leídos</Link></li>
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