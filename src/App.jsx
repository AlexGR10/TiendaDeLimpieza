import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './assets/Vistas/Principal/Principal';
import NavBar from './assets/Vistas/NavBar/Navbar';
import Footer from './assets/Vistas/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <div className="NavBar"><NavBar /></div>

        <div className="Routes">
        <Routes>
          <Route path="/" element={<Principal />} />
        </Routes>
        </div>

        <div className="Footer"><Footer /></div>

      </Router>
    </div>
  );
}

export default App;
