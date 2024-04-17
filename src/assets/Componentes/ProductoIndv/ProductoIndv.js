import React from 'react';
import productosData from '../data/productos.json'; // Importa el archivo JSON

function ProductoIndv({ id }) {
  // Busca el producto correspondiente al ID
  const producto = productosData.find(item => item.ID === id);

  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="producto-individual">
      <img src={producto.Imagen1} alt={producto.Nombre} />
      <h2>{producto.Nombre}</h2>
      <p>Precio: ${producto.Precio}</p>
      <p>{producto.Descripcion}</p>
    </div>
  );
}

ProductoIndv.defaultProps = {
  id: 1 // Valor por defecto para el ID
};

export default ProductoIndv;
