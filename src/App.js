import React, { useState } from 'react';
import Header from './Header';
import './style.css';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [subscriptionForm, setSubscriptionForm] = useState({
    username: '',
    password: '',
    email: '',
    favoriteBook: '',
    favoriteAuthor: ''
  });
  const [readingClubMembers, setReadingClubMembers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState('');

  // Datos de recomendaciones
  const platformRecommendations = {
    netflix: [
      { 
        title: "Stranger Things", 
        image: "/Strangerthings.jpg", 
        rating: 4.5,
        opinion: "Una emocionante mezcla de nostalgia ochentera y terror sobrenatural. Perfecta para los amantes del misterio."
      },
      { 
        title: "The Crown", 
        image: "/thecrown.jpg", 
        rating: 4.8,
        opinion: "Un drama histórico impresionante que ofrece una mirada íntima a la realeza británica."
      }
    ],
    prime: [
      { 
        title: "The Boys", 
        image: "/theboys.jpg", 
        rating: 4.7,
        opinion: "Una refrescante y violenta deconstrucción del género de superhéroes. No apta para sensibles."
      },
      { 
        title: "The Marvelous Mrs. Maisel", 
        image: "/maisel.jpg", 
        rating: 4.6,
        opinion: "Divertidísima comedia con diálogos rápidos y un vestuario espectacular."
      }
    ],
    max: [
      { 
        title: "Game of Thrones", 
        image: "/got.jpg", 
        rating: 4.9,
        opinion: "Epica fantasía medieval con personajes complejos y giros inesperados."
      },
      { 
        title: "Succession", 
        image: "/succession.jpg", 
        rating: 4.8,
        opinion: "Un retrato mordaz del poder y la riqueza. Los diálogos son afilados."
      }
    ],
    disney: [
      { 
        title: "The Mandalorian", 
        image: "/mando.jpg", 
        rating: 4.7,
        opinion: "Una delicia para fans de Star Wars. Baby Yoda robó nuestros corazones."
      },
      { 
        title: "Loki", 
        image: "/loki.jpg", 
        rating: 4.5,
        opinion: "Tom Hiddleston lleva el peso de esta intrigante serie sobre el multiverso."
      }
    ]
  };

  const togglePopup = (platform) => {
    setCurrentPlatform(platform);
    setShowPopup(!showPopup);
  };

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Buscando: "${searchTerm}"`);
  };

  const handleSubscriptionChange = (e) => {
    const { name, value } = e.target;
    setSubscriptionForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();
    if (!subscriptionForm.username || !subscriptionForm.email) {
      alert('Por favor completa al menos el nombre de usuario y el email');
      return;
    }
    
    setReadingClubMembers(prev => [...prev, subscriptionForm]);
    setSubscriptionForm({
      username: '',
      password: '',
      email: '',
      favoriteBook: '',
      favoriteAuthor: ''
    });
    
    alert('¡Gracias por unirte al Club de Lectura!');
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
          <p>¿Quieres perderte entre las profundidades de las letras?</p>
          
          {/* Buscador */}
          <form onSubmit={handleSearch} className="book-search">
            <div className="search-container">
              <div className="search-input-container">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Buscar libros..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <button type="submit" className="search-button">
                Buscar
              </button>
            </div>
          </form>
        </div>

        {/* Sección LIBROS */}
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
                    <span key={i} className={i < 4 ? "estrella-llena" : "estrella-vacia"}>★</span>
                  ))}
                </div>
                <span className="puntuacion-numero">4/5</span>
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
                  src={process.env.PUBLIC_URL + "/Librería_venecia.jpeg"} 
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
                    <span key={i} className={i < 4 ? "estrella-llena" : "estrella-vacia"}>★</span>
                  ))}
                </div>
                <span className="puntuacion-numero">4/5</span>
              </div>
            </div>
          </div>
        </div>

          {/* Sección PELÍCULAS */}
        <div className="seccion-con-titulo">
          <h2 className="titulo-seccion">🎬 PELÍCULAS 🎬</h2>
          <div className="peliculas">
            <div className="pelicula">
              <a href='https://www.netflix.com/es/' target="_blank" rel="noopener noreferrer">             
                <img src={process.env.PUBLIC_URL + "/Netflix_Logo.jpg"} alt="Netflix" className="imgpelis" />
              </a>
              <p onClick={() => togglePopup('netflix')}>👉 ¿Qué ver en Netflix?</p>
            </div>
            <div className="pelicula">
              <a href='https://www.primevideo.com/-/es/offers/nonprimehomepage/ref=dv_web_force_root?language=es' target="_blank" rel="noopener noreferrer">             
                <img src={process.env.PUBLIC_URL + "/Prime_Logo.jpg"} alt="Prime" className="imgpelis" />
              </a>
              <p onClick={() => togglePopup('prime')}>👉 ¿Qué ver en Prime?</p> 
            </div>
            <div className="pelicula">
              <a href='https://www.max.com/es/es' target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "/max_logo.jpg"} alt="Max" className="imgpelis" />
              </a> 
              <p onClick={() => togglePopup('max')}>👉 ¿Qué ver en Max?</p>
            </div>
            <div className="pelicula">
              <a href='https://www.disneyplus.com/es-es' target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "/diseny_logo.jpg"} alt="Disney" className="imgpelis" />
              </a> 
              <p onClick={() => togglePopup('disney')}>👉 ¿Qué ver en Disney?</p>
            </div>
          </div>
        </div>
      </main>

      {/* Popup de recomendaciones */}
      {showPopup && (
        <div className="recommendation-popup">
          <div className="popup-overlay" onClick={() => setShowPopup(false)}></div>
          <div className="popup-content">
            <div className="popup-header">
              <h3>Recomendaciones en {currentPlatform.charAt(0).toUpperCase() + currentPlatform.slice(1)}</h3>
              <button className="close-popup" onClick={() => setShowPopup(false)}>×</button>
            </div>
            <div className="recommendations-grid">
              {platformRecommendations[currentPlatform].map((item, index) => (
                <div key={index} className="recommendation-item">
                  <img 
                    src={process.env.PUBLIC_URL + item.image} 
                    alt={item.title} 
                    className="recommendation-image"
                  />
                  <div className="recommendation-info">
                    <h4>{item.title}</h4>
                    <div className="recommendation-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(item.rating) ? "star-filled" : "star-empty"}>★</span>
                      ))}
                      <span>{item.rating}/5</span>
                    </div>
                    <div className="recommendation-opinion">
                      <p><strong>Mi opinión:</strong> {item.opinion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="subscription-form">
              <h3>Únete al Club de Lectura</h3>
              <form onSubmit={handleSubscriptionSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Nombre de usuario"
                      value={subscriptionForm.username}
                      onChange={handleSubscriptionChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      value={subscriptionForm.password}
                      onChange={handleSubscriptionChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={subscriptionForm.email}
                    onChange={handleSubscriptionChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="favoriteBook"
                      placeholder="Libro favorito"
                      value={subscriptionForm.favoriteBook}
                      onChange={handleSubscriptionChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="favoriteAuthor"
                      placeholder="Autor favorito"
                      value={subscriptionForm.favoriteAuthor}
                      onChange={handleSubscriptionChange}
                    />
                  </div>
                </div>
                <button type="submit" className="subscribe-button">
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          <div className="footer-right">
            <div className="profile-social-container">
              <div className="footer-profile">
                <img 
                  src={process.env.PUBLIC_URL + "/lourdesmirandamoreno.jpg"} 
                  alt="Tu perfil" 
                  className="footer-profile-img"
                />
                <p>BLACK BOOKS</p>
              </div>

              <div className="social-container">
                <h3>Sígueme</h3>
                <div className="social-icons">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={process.env.PUBLIC_URL + "/logo_x.png"} 
                      alt="Twitter" 
                      className="social-icon"
                    />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={process.env.PUBLIC_URL + "/logo_instagram.jpg"} 
                      alt="Instagram" 
                      className="social-icon"
                    />
                  </a>
                </div>
              </div>
            </div>

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
        </div>
      </footer>
    </div>
  );
}

export default App;