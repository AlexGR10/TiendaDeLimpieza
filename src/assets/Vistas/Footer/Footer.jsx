import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
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
              <li><a href="#">Mi cuenta</a></li>
              <li><a href="#">Historial de pedidos</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Redes sociales</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="https://www.instagram.com/limpieza_pluss/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;