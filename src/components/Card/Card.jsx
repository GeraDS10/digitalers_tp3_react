import React from "react";
import { Link } from 'react-router-dom';
import './style.css'


{/*Se recibe como prop product, que es el producto a renderizar, y addToCart 
que es una funcion a utilizar cuando se haga click en "agregar" */}
function Card({ product,addToCart }){

  const handleAddToCart = () => {
    addToCart(product);
  };

    return (
      <div className="card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p className="price">${product.price}</p>
      {/* Agrega más detalles del producto según sea necesario */}
      <button onClick={handleAddToCart}>Agregar</button>
      <Link to="/cart" className="cartButton">Ver Carrito</Link>
    </div>
      );
}

export default Card;