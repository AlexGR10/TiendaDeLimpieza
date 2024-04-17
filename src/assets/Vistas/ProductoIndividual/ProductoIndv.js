import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productosJSON from '../data/productos.json';

const styles = {
  principal: {
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'gray',
    padding: '20px',
  },
  container: {
    display: 'flex',
  },
  imagen: {
    flex: 1,
    padding: '10px',
  },
  detalles: {
    flex: 1,
    padding: '10px',
  },
};

function ProductoIndv() {
  const { ID } = useParams();

  const producto = productosJSON.find(producto => producto.ID === parseInt(ID));

  useEffect(() => {
    // Scroll al principio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.principal}>
      {producto && (
        <div style={styles.container}>
          <div style={styles.imagen}>
            <img src={producto.Imagen1} alt={producto.Nombre} />
          </div>
          <div style={styles.detalles}>
            <h2>{producto.Nombre}</h2>
            <p>Precio: ${producto.Precio}</p>
            <p>{producto.Descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductoIndv;
