import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productosJSON from '/public/data/usuarios.json'; // Importa el archivo JSON de usuarios
import { AuthContext } from '../../../Context/AuthContext';

function CrearCuenta() {
  const [nombre, setNombre] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica que todos los campos estén llenos
    if (!nombre || !username || !password || !email) {
      setError('Por favor, completa todos los campos.');
      return; // Detiene la ejecución si hay campos vacíos
    }

    // Verifica si el usuario ya existe en el JSON
    const userExists = productosJSON.customer.some(user => user.usuario === username);
    const emailExists = productosJSON.customer.some(user => user.correo_electronico === email);

    if (userExists) {
      setError('El nombre de usuario ya está en uso.');
    } else if (emailExists) {
      setError('El correo electrónico ya está en uso.');
    } else {
      // Encuentra el ID más alto en la lista de usuarios
      const maxId = Math.max(...productosJSON.customer.map(user => user.id));
      const newId = maxId + 1;

      // Agrega el nuevo usuario al JSON
      const newUser = {
        id: newId,
        nombre,
        usuario: username,
        contraseña: password,
        email
      };
      productosJSON.customer.push(newUser);

      // Inicia sesión con el nuevo usuario
      login(newId);

      // Redirige al usuario a la página de perfil
      navigate("/TiendaDeLimpieza/miCuenta/perfil");
    }
  };

  return (
    <div>
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Crear Cuenta</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/TiendaDeLimpieza/login/User">Iniciar Sesión</Link></p>
    </div>
  );
}

export default CrearCuenta;
