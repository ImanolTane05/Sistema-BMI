import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/index';
import reportWebVitals from './reportWebVitals';
import IndexAdmin from './components/indexAdmin';
import ViewUsuarios from './components/viewUsuarios';
import AddUser from './components/addUser'; 
import EditUsuario from './components/EditUsuario';

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
        <Route path="/editusuarios" element={<EditUsuario />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
