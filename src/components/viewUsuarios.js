import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import '../styles/viewUsuarios.css';
import logo from '../img/logo.png';
import Pie from '../img/Pie.png';
import { db } from '../credenciales'; // Asegúrate de que la ruta es correcta
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

function ViewUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosCollection = collection(db, 'users');
        const usuariosSnapshot = await getDocs(usuariosCollection);
        const usuariosList = usuariosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsuarios(usuariosList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleBackClick = () => {
    navigate('/admin'); // Ajusta la ruta según sea necesario
  };

  const handleAddUserClick = () => {
    navigate('/addusuarios'); // Ajusta la ruta según sea necesario
  };

  const handleEditClick = (id) => {
    navigate(`/editusuarios/${id}`); // Navegar a la página de edición del usuario con el id en la URL
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id));
      setUsuarios(usuarios.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  return (
    <div className="UsuariosApp">
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <button className="back-button" onClick={handleBackClick}>
          <FaArrowLeft className="icon-back" /> Regresar
        </button>
      </header>
      <main>
        <h1>Usuarios</h1>
        <div className="usuarios-container">
          {usuarios.map((usuario) => (
            <div className="usuario-card" key={usuario.id}>
              <div className="usuario-info">
                <div className="usuario-avatar">
                  <img src={usuario.foto} alt={`${usuario.nombre} ${usuario.apellidos}`} />
                </div>
                <div>
                  <h2>{usuario.nombre} {usuario.apellidos}</h2>
                  <p>{usuario.email}</p>
                  <p>{usuario.cargo}</p>
                </div>
              </div>
              <div className="usuario-actions">
                <FaTrash className="action-icon" onClick={() => handleDeleteClick(usuario.id)} />
                <FaPen className="action-icon" onClick={() => handleEditClick(usuario.id)} />
              </div>
            </div>
          ))}
        </div>
        <button className="add-user-button" onClick={handleAddUserClick}>
          <FaPlus className="icon-add" /> Agregar Usuario
        </button>
      </main>
      <footer>
        <img src={Pie} alt="Footer Decoration" className="footer-decoration" />
      </footer>
    </div>
  );
}

export default ViewUsuarios;
