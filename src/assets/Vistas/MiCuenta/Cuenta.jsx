import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import Perfil from '/src/assets/Componentes/MiCuenta/Perfil/Perfil';
import WishList from '/src/assets/Componentes/MiCuenta/WishList/WishList';
import CarritoCompras from '/src/assets/Componentes/MiCuenta/CarritoCompras/Carrito';

function Cuenta() {
  // Obtenemos el contexto de autenticación para acceder al estado del usuario autenticado
  const { isLoggedIn, userId } = useContext(AuthContext);

  // Obtenemos el parámetro de la URL
  const { tipo } = useParams();

  // Función para renderizar el componente correspondiente según el parámetro
  const renderComponent = () => {
    switch (tipo) {
      case 'perfil':
        return <Perfil />;
      case 'wishlist':
        return <WishList />;
      case 'carrito':
        return <CarritoCompras />;
      default:
        return <div>No se encontró la página</div>;
    }
  };

  return (
    <div>
      <h2>Mi Cuenta</h2>
      {isLoggedIn && userId ? (
        renderComponent()
      ) : (
        <div>
          <p>No has iniciado sesión.</p>
          <Link to="/TiendaDeLimpieza/login/User">Iniciar sesión</Link>
        </div>
      )}
    </div>
  );
}

export default Cuenta;
