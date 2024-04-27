// ADMIN AuthContext.js
import React, { createContext, useState } from 'react';

const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export { AdminAuthContext, AdminAuthProvider };
