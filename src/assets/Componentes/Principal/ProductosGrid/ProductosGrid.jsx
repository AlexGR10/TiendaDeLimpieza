import React from 'react';
import { Link } from 'react-router-dom';
import productosJSON from '/public/data/productos.json';
import './ProductosGrid.css';

function ProductosGrid() {
  const productos = productosJSON.slice(0, 10);

  return (
    <div className="productos">
      <h2>Productos Destacados</h2>
      <div className="productosGrid">
        
        {productos.map(producto => (
          <div key={producto.ID} className="producto"> 
            <Link to={`/TiendaDeLimpieza/producto/${producto.ID}`} className="enlace">
              <img src={producto.Imagen1} alt={producto.Nombre} className="imagen" />
              <h3 className="nombre">{producto.Nombre}</h3>
              <p className="precio">Precio: ${producto.Precio}</p> 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosGrid;
