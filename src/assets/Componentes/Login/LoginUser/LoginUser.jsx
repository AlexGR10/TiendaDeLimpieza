// LoginUser.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginUser({ onUserLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserLogin(username, password);
  };

  return (
    <div>
      <h2>Iniciar Sesión como Usuario</h2>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes una cuenta? <Link to="/crear-cuenta">Crear Cuenta</Link></p>
    </div>
  );
}

export default LoginUser;
