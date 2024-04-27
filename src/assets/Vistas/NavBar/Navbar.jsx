import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { AdminAuthContext } from '../../Context/AdminAuthContext';
import './Navbar.css';

function Navbar() {
  const { isLoggedIn, userId, logout } = useContext(AuthContext);
  const { isAdminLoggedIn } = useContext(AdminAuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/TiendaDeLimpieza" className="navbar-brand">
        <img src="https://i.ibb.co/5x56BZV/logo.png" alt="Mi Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav custom-nav">
          {isLoggedIn && userId ? (
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle custom-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mi Cuenta
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/TiendaDeLimpieza/miCuenta/perfil" className="dropdown-item">Perfil</Link>
                <Link to="/TiendaDeLimpieza/miCuenta/wishlist" className="dropdown-item">Wishlist</Link>
                <Link to="/TiendaDeLimpieza/miCuenta/carrito" className="dropdown-item">Carrito</Link>
                <div className="dropdown-divider"></div>
                <button onClick={handleLogout} className="dropdown-item logout-button">Cerrar Sesión</button>
              </div>
            </li>
          ) : (
            <li className="nav-item custom-item">
              <Link to="/TiendaDeLimpieza/login/User" className="nav-link custom-link">Iniciar Sesión</Link>
            </li>
          )}
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/Filtro/ID/10" className="nav-link custom-link">Productos</Link>
          </li>
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/informacion/contacto" className="nav-link custom-link">Contacto</Link>
          </li>
          <li className="nav-item custom-item">
            {isAdminLoggedIn ? (
              <Link to="/TiendaDeLimpieza/admin" className="nav-link custom-link">Administrador</Link>
            ) : (
              <Link to="/TiendaDeLimpieza/login/Admin" className="nav-link custom-link">Administrador</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
