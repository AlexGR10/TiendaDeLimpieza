import React from 'react';
import { Link } from 'react-router-dom';
import './BarraCategorias.css';

function BarraCategorias() {
  return (
    <div className="barra-categorias">
      <h2>Categorías</h2>
      <ul className="categorias-lista">
        <li><Link to="/TiendaDeLimpieza/Filtro/Categoria/Detergentes">Detergentes</Link></li>
        <li><Link to="/TiendaDeLimpieza/Filtro/Categoria/Limpiadores">Limpiadores</Link></li>
        <li><Link to="/TiendaDeLimpieza/Filtro/Categoria/Cuidado%20del%20hogar">Cuidado del hogar</Link></li>
        <li><Link to="/TiendaDeLimpieza/Filtro/Categoria/Higiene%20personal">Higiene personal</Link></li>
      </ul>
    </div>
  );
}

export default BarraCategorias;
