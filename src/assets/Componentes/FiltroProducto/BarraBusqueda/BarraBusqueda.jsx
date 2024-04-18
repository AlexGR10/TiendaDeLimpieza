import React, { useState } from 'react';

function BarraBusqueda({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default BarraBusqueda;
