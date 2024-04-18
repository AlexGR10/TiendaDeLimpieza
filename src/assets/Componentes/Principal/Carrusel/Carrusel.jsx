import React from 'react';
import { Link } from 'react-router-dom';
import './Carrusel.css';

function Carrusel() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-end carousel-container">
        <div className="col-md-8 ml-auto">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <Link to="/TiendaDeLimpieza/producto/1">
                <img src="/TiendaDeLimpieza/public/imagenes/1.png" alt="Descripción de la imagen 1" />
              </Link>
            </div>
            <div className="item">
              <Link to="/TiendaDeLimpieza/producto/2">
                <img src="/TiendaDeLimpieza/public/imagenes/2.png" alt="Descripción de la imagen 2" />
              </Link>
            </div>
            <div className="item">
              <Link to="/TiendaDeLimpieza/producto/3">
                <img src="/TiendaDeLimpieza/public/imagenes/3.png" alt="Descripción de la imagen 3" />
              </Link>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Carrusel;
