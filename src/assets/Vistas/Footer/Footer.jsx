import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Información</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
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
            <h4>Soporte</h4>
            <ul>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Devoluciones</a></li>
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