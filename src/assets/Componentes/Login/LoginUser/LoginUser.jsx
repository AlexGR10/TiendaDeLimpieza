import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import productosJSON from '/public/data/usuarios.json';
import { AuthContext } from '../../../Context/AuthContext';

function LoginUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); // Acceder a la función login del contexto
  const navigate = useNavigate(); // Utiliza useNavigate para obtener la función navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Buscamos el usuario en el JSON por su nombre de usuario
    const customer = productosJSON.customer.find(user => user.usuario === username);

    if (customer) {
      // Verificamos si la contraseña coincide
      if (customer.contraseña === password) {
        // Si todo está bien, llamamos a la función login del contexto con el ID del usuario
        login(customer.id);
        // Redirigimos al usuario a la página de perfil
        navigate("/TiendaDeLimpieza/miCuenta/perfil");
      } else {
        setError('Contraseña incorrecta.');
      }
    } else {
      setError('Usuario no encontrado.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes una cuenta? <Link to="/TiendaDeLimpieza/crearCuenta">Crear Cuenta</Link></p>
    </div>
  );
}

export default LoginUser;
