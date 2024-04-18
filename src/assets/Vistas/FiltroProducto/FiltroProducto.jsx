import React from 'react';
import './FiltroProducto.css';
import BarraBusqueda from '/src/assets/Componentes/FiltroProducto/BarraBusqueda/BarraBusqueda';
import CuadroFiltro from '/src/assets/Componentes/FiltroProducto/CuadroFiltro/CuadroFiltro';
import ProductosFiltro from '/src/assets/Componentes/FiltroProducto/ProductosFiltro/ProductosFiltro';

function FiltroProducto() {
  return (
    <div className="FiltroProducto">
        <div className="primero">
            <div className="BarraBusqueda">
            <BarraBusqueda />
            </div>
        </div>

        <div className="segundo">
            <div className="CuadroFiltro">
            <CuadroFiltro />
            </div>
            <div className="ProductosFiltro">
            <ProductosFiltro />
            </div>
        </div>
    </div>
  );
}

export default FiltroProducto;