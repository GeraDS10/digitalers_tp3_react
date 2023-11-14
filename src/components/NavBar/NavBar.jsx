import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;