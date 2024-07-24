import React from 'react';
import { useNavigate } from 'react-router-dom';
//import '../styles/index.css'; // Asegúrate de que los estilos se ajusten a esta nueva interfaz
import logo from '../img/logo.png';
import Pie from '../img/Pie.png';
import { FaUsers, FaShoppingCart, FaBook, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

function IndexAdmin() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <img src={logo} alt="Logo" className="logo" />
        <button className="logout-button" onClick={() => handleNavigation('/login')}>
          Cerrar Sesión <FaSignOutAlt />
        </button>
      </header>
      <main className="admin-content">
        <div className="welcome-section">
          <h1>Bienvenido Ruben</h1>
          <p>Atendiendo una necesidad urgente de modernizar la administración de Justicia</p>
        </div>
        <div className="button-grid">
          <div className="grid-item" onClick={() => handleNavigation('/usuarios')}>
            <FaUsers size={50} />
            <span>Usuarios</span>
          </div>
          <div className="grid-item" onClick={() => handleNavigation('/entregas')}>
            <FaShoppingCart size={50} />
            <span>Entregas</span>
          </div>
          <div className="grid-item" onClick={() => handleNavigation('/salidas')}>
            <FaBook size={50} />
            <span>Salidas</span>
          </div>
          <div className="grid-item" onClick={() => handleNavigation('/actividades')}>
            <FaCalendarAlt size={50} />
            <span>Actividades</span>
          </div>
        </div>
      </main>
      <footer className="admin-footer">
        <img src={Pie} alt="Footer Decoration" className="footer-decoration" />
      </footer>
    </div>
  );
}

export default IndexAdmin;
