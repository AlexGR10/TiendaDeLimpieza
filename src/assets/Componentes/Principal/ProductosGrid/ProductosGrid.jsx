import React from 'react';
import { Link } from 'react-router-dom';
import productosJSON from '/public/data/productos.json';

function ProductosGrid() {
  // Selecciona solo los primeros cuatro productos del archivo JSON
  const productos = productosJSON.slice(0, 4);

  return (
    <div className={styles.productos}>
      <h2>Productos Destacados</h2>
      <div className={styles.productosGrid}>
        {/* Mapea los primeros cuatro productos */}
        {productos.map(producto => (
          <div key={producto.ID} className={styles.producto}>
            <Link to={`/producto/${producto.ID}`} className={styles.enlace}>
              <img src={producto.Imagen1} alt={producto.Nombre} className={styles.imagen} />
              <h3 className={styles.nombre}>{producto.Nombre}</h3>
              <p className={styles.precio}>Precio: ${producto.Precio}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosGrid;
