import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './Navbar.css';

function Navbar() {
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
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/login/User" className="nav-link custom-link">Iniciar Sesión</Link>
          </li>
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/Filtro/ID/10" className="nav-link custom-link">Productos</Link>
          </li>
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/informacion/contacto" className="nav-link custom-link">Contacto</Link>
          </li>
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/login/Admin" className="nav-link custom-link">Administrador</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
