import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './assets/Vistas/NavBar/Navbar';
import Footer from './assets/Vistas/Footer/Footer';
import Principal from './assets/Vistas/Principal/Principal';
import ProductoIndv from './assets/Vistas/ProductoIndividual/ProductoIndv';
import FiltroProducto from './assets/Vistas/FiltroProducto/FiltroProducto';
import Informacion from './assets/Vistas/Informacion/Informacion';
import Login from './assets/Vistas/Login/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="Routes">
          <Routes>
            <Route path="/TiendaDeLimpieza" element={<Principal />} />
            <Route path="/TiendaDeLimpieza/producto/:ID" element={<ProductoIndv />} />
            <Route path="/TiendaDeLimpieza/Filtro/:filtro/:parametro" element={<FiltroProducto />} />
            <Route path="/TiendaDeLimpieza/informacion/:ruta" element={<Informacion />} />
            <Route path="/TiendaDeLimpieza/login/:tipo" element={<Login />} />
          </Routes>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;