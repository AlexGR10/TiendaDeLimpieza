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
            <Link to="/TiendaDeLimpieza" className="nav-link custom-link">Inicio</Link>
          </li>
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/productos" className="nav-link custom-link">Productos</Link>
          </li>
          <li className="nav-item custom-item">
            <Link to="/TiendaDeLimpieza/contacto" className="nav-link custom-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
