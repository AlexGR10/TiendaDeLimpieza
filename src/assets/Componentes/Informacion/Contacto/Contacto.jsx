import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contacto() {
  return (
    <div>
      <h2>Contacto</h2>
      <p>Puedes contactarnos a través de nuestras redes sociales o servicios de mensajería:</p>
      <div>
        <a href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+tu_numero_de_telefono" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
        <a href="mailto:tu_correo@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contacto;
