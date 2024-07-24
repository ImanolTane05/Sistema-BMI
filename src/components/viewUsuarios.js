import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import '../styles/viewUsuarios.css';
import logo from '../img/logo.png';
import Pie from '../img/Pie.png';

const usuarios = [
  { nombre: 'Wilbert Diaz Lopez', email: 'Wilbert@gmail.com', cargo: 'Auxiliar Tecnico' },
  { nombre: 'Raul Marquez Cuahutecatl', email: 'Raul@gmail.com', cargo: 'Auxiliar Administrativo' },
  { nombre: 'Alain Canco Yanez', email: 'Alaim@gmail.com', cargo: 'Auxiliar Administrativo' },
  { nombre: 'Carlos Acoltzin Netzahual', email: 'Carlos@gmail.com', cargo: 'Auxiliar Administrativo' },
];

function ViewUsuarios() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin'); // Ajusta la ruta según sea necesario
  };

  const handleAddUserClick = () => {
    navigate('/addusuarios'); // Ajusta la ruta según sea necesario
  };

  return (
    <div className="UsuariosApp">
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <button className="back-button" onClick={handleBackClick}>
          <FaArrowLeft /> Regresar
        </button>
      </header>
      <main>
        <h1>Usuarios</h1>
        <div className="usuarios-container">
          {usuarios.map((usuario, index) => (
            <div className="usuario-card" key={index}>
              <div className="usuario-info">
                <div className="usuario-avatar"></div>
                <div>
                  <h2>{usuario.nombre}</h2>
                  <p>{usuario.email}</p>
                  <p>{usuario.cargo}</p>
                </div>
              </div>
              <div className="usuario-actions">
                <FaTrash className="action-icon" />
                <FaPen className="action-icon" />
              </div>
            </div>
          ))}
        </div>
        <button className="add-user-button" onClick={handleAddUserClick}>
          <FaPlus /> Agregar Usuario
        </button>
      </main>
      <footer>
        <img src={Pie} alt="Footer Decoration" className="footer-decoration" />
      </footer>
    </div>
  );
}

export default ViewUsuarios;
