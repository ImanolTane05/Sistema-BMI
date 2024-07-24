import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/index';
import reportWebVitals from './reportWebVitals';
import IndexAdmin from './components/indexAdmin';
import ViewUsuarios from './components/viewUsuarios';
import AddUser from './components/addUser'; // Asegúrate de que el nombre del componente comience con mayúscula

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<IndexAdmin />} />
        <Route path="/usuarios" element={<ViewUsuarios />} />
        <Route path="/addusuarios" element={<AddUser />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
