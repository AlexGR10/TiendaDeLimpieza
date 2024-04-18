import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CuadroFiltro.css';

function CuadroFiltro() {
  // Estado para almacenar el valor del precio máximo
  const [maxPrecio, setMaxPrecio] = useState('');

  // Función para manejar el cambio en el input del precio máximo
  const handleChangePrecio = (event) => {
    setMaxPrecio(event.target.value);
  };

  // Función para manejar el clic en el botón de "Aplicar Precio"
  const handleAplicarPrecio = (event) => {
    // Evitar que se ejecute la acción predeterminada si el campo de precio está vacío
    if (maxPrecio === '') {
      event.preventDefault();
      alert('Por favor ingresa un precio máximo antes de aplicar el filtro.');
    }
  };

  return (
    <div className="CuadroFiltro">
      <div className="categorias">
        <h4>Categorías</h4>
        <ul>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/ID/10" className="nav-link custom-link">Todos</Link>
          </li>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Categoria/Detergentes" className="nav-link custom-link">Detergentes</Link>
          </li>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Categoria/Limpiadores" className="nav-link custom-link">Limpiadores</Link>
          </li>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Categoria/Cuidado%20del%20hogar" className="nav-link custom-link">Cuidado del hogar</Link>
          </li>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Categoria/Higiene%20personal" className="nav-link custom-link">Higiene personal</Link>
          </li>
        </ul>
      </div>
      <div className="precio">
        <h4>Precio</h4>
        <div className="form-group">
          <input
            type="number"
            id="maxPrecio"
            className="form-control"
            value={maxPrecio}
            onChange={handleChangePrecio}
          />
        </div>
        {/* Enlace para aplicar el filtro de precio */}
        <Link
          to={`/TiendaDeLimpieza/Filtro/Precio/${maxPrecio}`}
          className="btn btn-primary"
          onClick={handleAplicarPrecio} // Agregar el evento onClick
        >
          Aplicar Precio
        </Link>
      </div>
      <div className="ordenar">
        <h4>Ordenar Por...</h4>
        <ul>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Orden/A-Z" className="nav-link custom-link">A-Z</Link>
          </li>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Orden/Z-A" className="nav-link custom-link">Z-A</Link>
          </li>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Orden/Precio-Alto-Bajo" className="nav-link custom-link">Precio Alto-Bajo</Link>
          </li>
          <li>
            <Link to="/TiendaDeLimpieza/Filtro/Orden/Precio-Bajo-Alto" className="nav-link custom-link">Precio Bajo-Alto</Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default CuadroFiltro;
