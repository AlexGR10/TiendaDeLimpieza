import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productosJSON from '/public/data/productos.json';
import './ProductosFiltro.css';

function ProductosFiltro() {
  const { filtro, parametro } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [valorPrecio, setValorPrecio] = useState(0);

  useEffect(() => {
    filtrarProductos(filtro, parametro);
  }, [filtro, parametro]);

  const filtrarProductos = (filtro, parametro) => {
    let productosFiltrados = [];

    if (filtro === 'ID') {
      const cantidad = parseInt(parametro);
      productosFiltrados = productosJSON.slice(0, cantidad);
    } else if (filtro === 'Categoria') {
      productosFiltrados = productosJSON.filter(producto => producto.Categoria === parametro);
    } else if (filtro === 'Precio') {
      setValorPrecio(parseFloat(parametro));
      productosFiltrados = productosJSON.filter(producto => {
        const precioProducto = parseFloat(producto.Precio);
        return precioProducto >= valorPrecio - 1 && precioProducto <= valorPrecio + 1;
      });
    } else if (filtro === 'Orden') {
      switch (parametro) {
        case 'A-Z':
          productosFiltrados = productosJSON.slice().sort((a, b) => a.Nombre.localeCompare(b.Nombre));
          break;
        case 'Z-A':
          productosFiltrados = productosJSON.slice().sort((a, b) => b.Nombre.localeCompare(a.Nombre));
          break;
        case 'Precio-Alto-Bajo':
          productosFiltrados = productosJSON.slice().sort((a, b) => b.Precio - a.Precio);
          break;
        case 'Precio-Bajo-Alto':
          productosFiltrados = productosJSON.slice().sort((a, b) => a.Precio - b.Precio);
          break;
        default:
          productosFiltrados = productosJSON;
          break;
      }
    }

    setProductosFiltrados(productosFiltrados);
  };

  return (
    <div className="productos-filtro">
      <h2>Productos Filtro - Filtro: {filtro}, Parámetro: {parametro}</h2>
      <div>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(producto => (
            <Link key={producto.ID} to={`/TiendaDeLimpieza/producto/${producto.ID}`} className="enlace">
              <div className="producto">
                <h3>{producto.Nombre}</h3>
                <p>Precio: ${producto.Precio}</p>
                <img src={producto.Imagen1} alt={producto.Nombre} />
              </div>
            </Link>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default ProductosFiltro;
