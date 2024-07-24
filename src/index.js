import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route y Routes
import './index.css';
import App from './App';
import Login from './components/index'; // Asegúrate de que la ruta a Index.js sea correcta
import reportWebVitals from './reportWebVitals';
import IndexAdmin from './components/indexAdmin';

// Crea el root y renderiza la aplicación envuelta en el Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> {/* Ruta para el login */}
        <Route path="/admin" element={<IndexAdmin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
