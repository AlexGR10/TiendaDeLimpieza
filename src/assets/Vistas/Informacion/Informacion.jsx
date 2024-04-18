import React from 'react';
import { useParams } from 'react-router-dom';
import Contacto from '/src/assets/Componentes/Informacion/Contacto/Contacto';
import Nosotros from '/src/assets/Componentes/Informacion/Nosotros/Nosotros';
import Politicas from '/src/assets/Componentes/Informacion/Politicas/Politicas';
import Terminos from '/src/assets/Componentes/Informacion/Terminos/Terminos';

function Informacion() {
  // Obtener el parámetro de la URL
  const { ruta } = useParams();

  // Función para renderizar el componente correspondiente según el parámetro
  const renderComponent = () => {
    switch (ruta) {
      case 'nosotros':
        return <Nosotros />;
      case 'contacto':
        return <Contacto />;
      case 'terminos':
        return <Terminos />;
      case 'politicas':
        return <Politicas />;
      default:
        return <div>No se encontró la página</div>;
    }
  };

  return (
    <div className="informacion">
      {renderComponent()}
    </div>
  );
}

export default Informacion;
