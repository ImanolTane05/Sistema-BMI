import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import logo from '../img/logo.png';
import Pie from '../img/Pie.png';

function Index() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/admin'); // Asegúrate de que esta ruta coincide con la que definiste en el enrutador
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main>
        <div className="content">
          <div className="left-side">
            <h1>Departamento de Control de Bienes Muebles e Inmuebles</h1>
            <p>Sistema de Gestión de Entregas y Actividades del Departamento de Control de Bienes Muebles e Inmuebles del Poder Judicial del Estado de Tlaxcala</p>
          </div>
          <div className="right-side">
            <h2>Inicio de Sesión</h2>
            <form>
              <div className="form-group">
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Ingrese su usuario" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Ingrese su contraseña" 
                  required 
                />
              </div>
              <button 
                className="login-button" 
                type="button" 
                onClick={handleLoginClick}
              >
                <span className="text">Iniciar Sesión</span> 
                <i className="fa fa-arrow-circle-right"></i>
              </button>
            </form>
            <a href="#" className="forgot-password">
              ¿Olvidaste tu contraseña? 
            </a>
          </div>
        </div>
      </main>
      <footer>
        <img src={Pie} alt="Footer Decoration" className="footer-decoration" />
      </footer>
    </div>
  );
}

export default Index;
