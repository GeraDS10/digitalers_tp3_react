import React from "react";
import './style.css';

function ShoppingKart({ cart }){
    return (
      <div className="shopping-cart">
      <h2>Carrito</h2>
      {/* El condicional determina si el carrito tiene una cantidad mayor a 0
       de items para determinar que renderizar. En caso de ser mayor itera sobre los items en el carrito */}
      {cart.length < 1 ? (
        <p>El carro esta vacío</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="card">
              <img src={item.image} alt={item.name} />
              <p>{item.name} - Cantidad: {item.quantity}</p>
              
            </li>
          ))}
        </ul>
      )}
      <button className="btn-comprar">Comprar</button>
    </div>
      );
}

export default ShoppingKart;
