import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

// Asegúrate de que el elemento root existe en tu HTML
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}