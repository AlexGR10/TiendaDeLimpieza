import React from 'react';
import './Carrusel.css';
import imagen1 from '/src/assets/imagenes/1.png';
import imagen2 from '/src/assets/imagenes/2.png';
import imagen3 from '/src/assets/imagenes/3.png';

function Carrusel() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-end carousel-container">
        <div className="col-md-8 ml-auto">
          <div className="owl-carousel owl-theme">
            <div className="item"><img src={imagen1} alt="Descripción de la imagen 1" /></div>
            <div className="item"><img src={imagen2} alt="Descripción de la imagen 2" /></div>
            <div className="item"><img src={imagen3} alt="Descripción de la imagen 3" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
