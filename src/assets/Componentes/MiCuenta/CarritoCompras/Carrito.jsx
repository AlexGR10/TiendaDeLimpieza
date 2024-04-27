import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import productosJSON from '/public/data/productos.json';
import wishJSON from '/public/data/carritoYwish.json';

function CarritoCompras() {
  // Obtenemos el userId del contexto de autenticación
  const { userId } = useContext(AuthContext);

  // Obtenemos el carrito de compras del usuario actual
  const cartData = wishJSON.usuarios[userId]?.carrito || {};
  const initialProducts = cartData.productos || [];

  // Utilizamos el estado para almacenar los productos en el carrito
  const [cart, setCart] = useState(initialProducts);

  // Función para eliminar un producto del carrito de compras
  const removeFromCart = (productId) => {
    // Actualizar el estado eliminando el producto del carrito de compras
    setCart(prevState => prevState.filter(item => item.productoId !== productId));
    // Log para verificar la actualización
    console.log(`Eliminando producto ${productId} del carrito de compras`);
  };

  // Calculamos el total del carrito sumando el precio total de cada producto
  const cartTotal = cart.reduce((total, product) => {
    const productData = productosJSON.find(p => p.ID === product.productoId);
    return total + product.cantidad * productData.Precio;
  }, 0);

  // Función para proceder al pago
  const proceedToPayment = () => {
    // Aquí puedes implementar la lógica para proceder al pago
    console.log("Procediendo al pago...");
  };

  return (
    <div>
      <h3>Carrito de Compras del Usuario {userId}</h3>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const product = productosJSON.find(p => p.ID === item.productoId);
            const total = item.cantidad * product.Precio;
            return (
              <tr key={product.ID}>
                <td>
                  <img src={product.Imagen1} alt={product.Nombre} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{product.Nombre}</td>
                <td>${product.Precio}</td>
                <td>{item.cantidad}</td>
                <td>${total.toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(product.ID)}>❌</button> {/* Icono de eliminar */}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="4" style={{ textAlign: 'right' }}>Total:</td>
            <td>${cartTotal.toFixed(2)}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="6" style={{ textAlign: 'right' }}>
              <button onClick={proceedToPayment}>Proceder al Pago</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CarritoCompras;
