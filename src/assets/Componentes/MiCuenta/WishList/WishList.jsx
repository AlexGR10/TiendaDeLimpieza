import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import productosJSON from '/public/data/productos.json';
import wishJSON from '/public/data/carritoYwish.json';

function Wishlist() {
  // Obtenemos el userId del contexto de autenticación
  const { userId } = useContext(AuthContext);

  // Obtenemos la lista de deseos del usuario actual
  const wishlistData = wishJSON.usuarios[userId]?.wishlist || {};
  const initialProductIds = wishlistData.productos || [];

  // Utilizamos el estado para almacenar la lista de deseos
  const [wishlist, setWishlist] = useState(initialProductIds);

  // Filtramos los productos del JSON principal utilizando los IDs de la lista de deseos
  const wishlistProducts = wishlist.map(productId => {
    return productosJSON.find(product => product.ID === productId);
  });

  // Función para agregar un producto al carrito y eliminarlo de la lista de deseos
  const addToCart = (productId) => {
    // Obtener el producto a agregar al carrito
    const productToAdd = productosJSON.find(product => product.ID === productId);

    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log(`Agregando producto ${productId} al carrito`);

    // Aquí puedes implementar la lógica para eliminar el producto de la lista de deseos
    setWishlist(prevState => prevState.filter(id => id !== productId));
    console.log(`Eliminando producto ${productId} de la lista de deseos`);
  };

  // Función para eliminar un producto de la lista de deseos
  const removeFromWishlist = (productId) => {
    // Actualizar el estado eliminando el producto de la lista de deseos
    setWishlist(prevState => prevState.filter(id => id !== productId));
    // Log para verificar la actualización
    console.log(`Eliminando producto ${productId} de la lista de deseos`);
  };

  return (
    <div>
      <h3>Wishlist del Usuario {userId}</h3>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {wishlistProducts.map((product) => (
            <tr key={product.ID}>
              <td>
                <img src={product.Imagen1} alt={product.Nombre} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{product.Nombre}</td>
              <td>${product.Precio}</td>
              <td>
                <button onClick={() => addToCart(product.ID)}>🛒</button> {/* Icono de carrito */}
                <button onClick={() => removeFromWishlist(product.ID)}>❌</button> {/* Icono de eliminar */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Wishlist;
