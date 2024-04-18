import React from 'react';
import { Link } from 'react-router-dom';
import './BarraCategorias.css';

function BarraCategorias() {
  return (
    <div className="barra-categorias">
      <h2>Categorías</h2>
      <ul className="categorias-lista">
        <li><Link to="/TiendaDeLimpieza/producto/1">Detergentes</Link></li>
        <li><Link to="/TiendaDeLimpieza/producto/2">Limpiadores</Link></li>
        <li><Link to="/TiendaDeLimpieza/producto/3">Cuidado del hogar</Link></li>
        <li><Link to="/TiendaDeLimpieza/producto/4">Higiene personal</Link></li>
      </ul>
    </div>
  );
}

export default BarraCategorias;
