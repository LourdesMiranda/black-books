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
             <li><Link to="/Recomendados" onClick={() => setMenuOpen(false)}>Recomendados</Link></li>
             <li><Link to="/Autores" onClick={() => setMenuOpen(false)}>Autores</Link></li>
             <li><Link to="/Articulos" onClick={() => setMenuOpen(false)}>Artículos</Link></li>
             <li><Link to="/ClubLectura" onClick={() => setMenuOpen(false)}>Club de Lectura</Link></li>
             <li><Link to="/Cementerio" onClick={() => setMenuOpen(false)}>Cementerio</Link></li>
             <li><Link to="/SobreMi" onClick={() => setMenuOpen(false)}>Sobre mí</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;