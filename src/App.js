import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // ¡No importes BrowserRouter aquí!
import Header from './Header';
import Leidos from './pages/Leidos/Leidos'; // Importación con mayúscula
import Recomendados from './pages/Recomendados/Recomendados';
import Autores from './pages/Autores/Autores';
import Articulos from './pages/Articulos/Articulos';
import ClubLectura from './pages/ClubLectura/ClubLectura';
import Cementerio from './pages/Cementerio/Cementerio';
import SobreMi from './pages/SobreMi/SobreMi';
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

  const platformRecommendations = {
    netflix: [
      { 
        title: "Stranger Things", 
        image: "/Strangerthings.jpg", 
        rating: 4.8,
        opinion: "Una emocionante mezcla de nostalgia ochentera y terror sobrenatural.",
        url: "https://www.netflix.com/title/80057281"
      },
    
      { 
        title: "Wednesday", 
        image: "/Wednesday.jpg", 
        rating: 4.7,
        opinion: "Un misterio gótico donde la rareza se convierte en superpoder y la muerte se adorna con sarcasmo",
        url: "https://www.netflix.com/es/title/81231974"
      },
    
      { 
        title: "Juego del calamar", 
        image: "/Juegodelcalamar.jpg", 
        rating: 4.3,
        opinion: "Un cruel recordatorio de que la desesperación convierte la vida en un juego… y la muerte en la regla",
        url: "https://www.netflix.com/es/title/81040344"
      }
    ],
    prime: [
      { 
        title: "It", 
        image: "/it.jpg", 
        rating: 4.6,
        opinion: "Una pesadilla disfrazada de payaso, donde la inocencia flota… y tú podrías ser el siguiente en flotar 🎈",
         url: "https://www.primevideo.com/-/es/detail/It-Eso/0IRMXMZIU9ST0QQBV9UZRPEBM3"
      },
      
      { 
        title: "Terrifier", 
        image: "/Terrifier.jpg", 
        rating: 4.2,
        opinion: "Terrifier es la risa más cruel pintada en sangre, un circo de pesadillas donde el cuchillo siempre tiene la última palabra.",
         url: "https://www.primevideo.com/detail/Terrifier/0H8L6ZG6PXV81PAW1DUQL4XGG8"
      },

            { 
        title: "The Boogeyman", 
        image: "/theboogeyman.jpg", 
        rating: 4.4,
        opinion: "The Boogeyman es la sombra que respira bajo tu cama, un susurro oscuro que convierte el miedo infantil en terror eterno.",
         url: "https://www.primevideo.com/-/es/detail/Boogeyman-Tu-miedo-es-real/0KNMDRN7AOYLDIY7ZUE2CU37S3"
      }

    ],
    max: [
      { 
        title: "Game of Thrones", 
        image: "/got.jpg", 
        rating: 4.8,
        opinion: "Un tablero manchado de sangre, donde el poder se gana con fuego, mentiras… y espadas afiladas.",
         url: "https://play.hbomax.com/show/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac"
      },

        { 
        title: "Destino final", 
        image: "/destinofinal.jpg", 
        rating: 4.2,
        opinion: "El susurro helado de la muerte, un juego macabro donde no importa cuánto corras… siempre sabe dónde encontrarte.",
         url: "https://play.hbomax.com/movie/16d51fc4-358d-4138-b648-da0e2cf5f216"
      },

      { 
        title: "Expediente Warren: The Conjuring", 
        image: "/expedientewarren.jpg", 
        rating: 4.7,
        opinion: "La invitación a una casa donde las paredes guardan gritos, y cada sombra susurra que no saldrás solo.",
         url: "https://play.hbomax.com/movie/d1b146e9-7426-4463-804d-3ca656e38492"
      }

    ],
    disney: [
      { 
        title: "American Horror Story", 
        image: "/ahs.jpg", 
        rating: 4.5,
        opinion: "Un carnaval de miedos donde cada temporada abre una puerta distinta… y todas conducen al mismo infierno.",
        url: "https://www.disneyplus.com/es-es/browse/entity-a67a233c-fcfe-4e8e-b000-052603ddd616"
      },

      { 
        title: "Noche de Boda", 
        image: "/nochedebodas.jpg", 
        rating: 4.1,
        opinion: "Un brindis con sangre, un juego mortal donde decir ‘sí, acepto’ puede ser tu última decisión.",
        url: "https://www.disneyplus.com/es-es/browse/entity-b5393a64-e0af-4199-9888-69b93907d8b3"
      },

      { 
        title: "Mansión Encantada", 
        image: "/mansionencantada.jpg", 
        rating: 4.4,
        opinion: "Un paseo entre fantasmas con más secretos que paredes, donde cada rincón te invita… y te atrapa.",
        url: "https://www.disneyplus.com/es-es/browse/entity-843c077e-cc0c-4b25-987b-7177bb605af8?distributionPartner=google"
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
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="App">
            {/* Fondos */}
            <div className="static-background"></div>
            <div className="animated-background"></div>
            
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
                        src={process.env.PUBLIC_URL + "/Ellibrodeestopa.jpg"} 
                        alt="El libro de Estopa" 
                        className="libro-imagen"
                      />
                      <div className="libro-texto">
                        <h3>LIBRO ACTUAL</h3>
                        <p>El libro de Estopa</p>
                      </div>
                    </div>
                    <div className="puntuacion">
                      <div className="estrellas">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < 3 ? "estrella-llena" : "estrella-vacia"}>★</span>
                        ))}
                      </div>
                      <span className="puntuacion-numero">3'5/5</span>
                    </div>
                  </div>

                  {/* Libro del Mes */}
                  <div className="libro">
                    <div className="libro-content">
                      <img 
                        src={process.env.PUBLIC_URL + "/Lasbrujas.jpg"} 
                        alt="Las Brujas" 
                        className="libro-imagen"
                      />
                      <div className="libro-texto">
                        <h3>LIBRO POR MES</h3>
                        <p>Las Brujas</p>
                      </div>
                    </div>
                    <div className="puntuacion">
                      <div className="estrellas">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < 5 ? "estrella-llena" : "estrella-vacia"}>★</span>
                        ))}
                      </div>
                      <span className="puntuacion-numero">4'8/5</span>
                    </div>
                  </div>

                  {/* Libro por Época */}
                  <div className="libro">
                    <div className="libro-content">
                      <img 
                        src={process.env.PUBLIC_URL + "/Holly.jpg"} 
                        alt="Holly" 
                        className="libro-imagen"
                      />
                      <div className="libro-texto">
                        <h3>LIBRO POR ÉPOCA</h3>
                        <p>Este verano me leí: Holly</p>
                      </div>
                    </div>
                    <div className="puntuacion">
                      <div className="estrellas">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < 4 ? "estrella-llena" : "estrella-vacia"}>★</span>
                        ))}
                      </div>
                      <span className="puntuacion-numero">4'6/5</span>
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
                      <img onClick={() => togglePopup('netflix')} src={process.env.PUBLIC_URL + "/Netflix_Logo.jpg"} alt="Netflix" className="imgpelis" />
                    <p onClick={() => togglePopup('netflix')}>👉 ¿Qué ver en Netflix?</p>
                  </div>
                  <div className="pelicula">
                      <img onClick={() => togglePopup('prime')} src={process.env.PUBLIC_URL + "/Prime_Logo.jpg"} alt="Prime" className="imgpelis" />
                    <p onClick={() => togglePopup('prime')}>👉 ¿Qué ver en Prime?</p> 
                  </div>
                  <div className="pelicula">
                      <img onClick={() => togglePopup('max')} src={process.env.PUBLIC_URL + "/max_logo.jpg"} alt="Max" className="imgpelis" />
                    <p onClick={() => togglePopup('max')}>👉 ¿Qué ver en Max?</p>
                  </div>
                  <div className="pelicula">
                      <img onClick={() => togglePopup('disney')} src={process.env.PUBLIC_URL + "/diseny_logo.jpg"} alt="Disney" className="imgpelis" />
                    <p onClick={() => togglePopup('disney')}>👉 ¿Qué ver en Disney?</p>
                  </div>
                </div>
              </div>

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
              <h4>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="recommendation-link"
                >
                  {item.title}
                </a>
              </h4>
              <div className="recommendation-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(item.rating) ? "star-filled" : "star-empty"}>★</span>
                ))}
                <span>{item.rating}/5</span>
              </div>
              <div className="recommendation-opinion">
                <p><strong>La defino en una frase:</strong> {item.opinion}</p>
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
                          <a href="https://x.com/LoourMiranda?t=ZQIZNu_zmEZ9kp0o6r_BRQ&s=08" target="_blank" rel="noopener noreferrer">
                            <img 
                              src={process.env.PUBLIC_URL + "/logo_x.png"} 
                              alt="Twitter" 
                              className="social-icon"
                            />
                          </a>
                          <a href="https://www.instagram.com/blacksbookslists/" target="_blank" rel="noopener noreferrer">
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
            </main>
          </div>
        } />
      <Route path="/Leidos" element={<Leidos />} />
      <Route path="/Recomendados" element={<Recomendados />} />
      <Route path="/Autores" element={<Autores />} />
      <Route path="/Articulos" element={<Articulos />} />
      <Route path="/ClubLectura" element={<ClubLectura />} />
      <Route path="/Cementerio" element={<Cementerio />} />
      <Route path="/SobreMi" element={<SobreMi />} />
      </Routes>
    </>
  );
}

export default App;