import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './BarraCategorias.css';

function BarraCategorias() {
  return (
    <div className="barra-categorias">
      <h2>Categorías</h2>
      <ul className="categorias-lista">
        {/* Utiliza Link en lugar de <a> para navegar a la nueva vista */}
        <li><Link to="/producto/1">Detergentes</Link></li>
        <li><Link to="/producto/2">Limpiadores</Link></li>
        <li><Link to="/producto/3">Cuidado del hogar</Link></li>
        <li><Link to="/producto/4">Higiene personal</Link></li>
      </ul>
    </div>
  );
}

export default BarraCategorias;
