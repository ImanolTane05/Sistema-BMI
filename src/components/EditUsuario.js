import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../credenciales'; // Asegúrate de que la ruta es correcta
import { doc, getDoc, updateDoc } from 'firebase/firestore';

function EditUsuario() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    cargo: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const usuarioDoc = doc(db, 'users', id);
        const usuarioSnapshot = await getDoc(usuarioDoc);
        if (usuarioSnapshot.exists()) {
          setFormData(usuarioSnapshot.data());
        }
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    };

    fetchUsuario();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usuarioDoc = doc(db, 'users', id);
      await updateDoc(usuarioDoc, formData);
      navigate('/viewusuarios'); // Ajusta la ruta según sea necesario
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  return (
    <div>
      <h1>Editar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleInputChange} />
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Cargo:</label>
          <input type="text" name="cargo" value={formData.cargo} onChange={handleInputChange} required />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default EditUsuario;
