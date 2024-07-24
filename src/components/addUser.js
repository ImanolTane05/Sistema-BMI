import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/addUser.css';
import logo from '../img/logo.png';
import Pie from '../img/Pie.png';

function AddUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    cargo: 'Administrador',
    foto: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, foto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío de datos
    console.log(formData);
  };

  const handleBackClick = () => {
    navigate('/usuarios');
  };

  return (
    <div className="addUserApp">
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <button className="back-button" onClick={handleBackClick}>
          <FaArrowLeft /> Regresar
        </button>
      </header>
      <main>
        <h1>Agregar Usuario</h1>
        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="foto">Foto:</label>
            <input type="file" name="foto" id="foto" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" name="apellidos" id="apellidos" value={formData.apellidos} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cargo">Cargo:</label>
            <select name="cargo" id="cargo" value={formData.cargo} onChange={handleInputChange}>
              <option value="Administrador">Administrador</option>
              <option value="Auxiliar">Auxiliar</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Agregar Usuario</button>
        </form>
      </main>
      <footer>
        <img src={Pie} alt="Footer Decoration" className="footer-decoration" />
      </footer>
    </div>
  );
}

export default AddUser;
