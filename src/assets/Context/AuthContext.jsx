import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // Agregamos el estado para almacenar el ID del usuario

  const login = (userId) => {
    setIsLoggedIn(true);
    setUserId(userId); // Almacenamos el ID del usuario al autenticarse
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null); // Limpiamos el ID del usuario al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
