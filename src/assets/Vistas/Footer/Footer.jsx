import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './Footer.css';

function Footer() {
  // Obtenemos el estado de autenticación del contexto
  const { isLoggedIn, userId } = useContext(AuthContext);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Información</h4>
            <ul>
              <li><Link to="/TiendaDeLimpieza/informacion/nosotros">Sobre nosotros</Link></li>
              <li><Link to="/TiendaDeLimpieza/informacion/contacto">Contacto</Link></li>
              <li><Link to="/TiendaDeLimpieza/informacion/terminos">Términos y condiciones</Link></li>
              <li><Link to="/TiendaDeLimpieza/informacion/politicas">Política de privacidad</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Clientes</h4>
            <ul>
              {/* Si el cliente está autenticado, mostramos los enlaces del cliente */}
              {isLoggedIn && userId ? (
                <>
                  <li><Link to="/TiendaDeLimpieza/miCuenta/perfil">Mi cuenta</Link></li>
                  <li><Link to="/TiendaDeLimpieza/miCuenta/carrito">Carrito</Link></li>
                  <li><Link to="/TiendaDeLimpieza/miCuenta/wishlist">Wishlist</Link></li>
                </>
              ) : (
                // Si el cliente no está autenticado, mostramos el enlace de inicio de sesión
                <li><Link to="/TiendaDeLimpieza/login/User">Iniciar sesión</Link></li>
              )}
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Redes sociales</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="https://www.instagram.com/limpieza_pluss/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
