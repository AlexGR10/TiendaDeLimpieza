import React from 'react';
import './Principal.css';
import Carrusel from '/src/assets/Componentes/Principal/Carrusel/Carrusel';
import BarraCategorias from '/src/assets/Componentes/Principal/BarraCategoria/BarraCategorias';
import ProductosGrid from '/src/assets/Componentes/Principal/ProductosGrid/ProductosGrid';

function Principal() {
  return (
    <div className="principal">
      <Carrusel />
      <BarraCategorias />
      <ProductosGrid />
    </div>
  );
}

export default Principal;
