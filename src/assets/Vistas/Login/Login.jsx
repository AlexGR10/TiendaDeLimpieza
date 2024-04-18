import React from 'react';
import { useParams } from 'react-router-dom';
import User from '/src/assets/Componentes/Login/LoginUser/LoginUser';
import Admin from '/src/assets/Componentes/Login/LoginAdmin/LoginAdmin';

function Login() {
  const { tipo } = useParams();

  const renderComponent = () => {
    switch (tipo) {
      case 'User':
        return <User />;
      case 'Admin':
        return <Admin />;
      default:
        return <div>No se encontró la página</div>;
    }
  };

  return (
    <div className="Login">
      {renderComponent()}
    </div>
  );
}

export default Login;
