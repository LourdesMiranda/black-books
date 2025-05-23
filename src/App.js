import React from 'react';
import Header from './Header';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="static-background"></div>
      <div className="animated-background"></div>
      <Header />
      
      {/* Contenido principal - ahora visible debajo del header */}
      <main>
        <h1>Bienvenido a BLACK BOOKS</h1>
        <p>Descubre nuestros libros recomendados</p>
        {/* Resto de tu contenido aquí */}
      </main>
    </div>
  );
}

export default App;