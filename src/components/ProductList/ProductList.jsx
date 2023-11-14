import React from "react";
import Card from "../Card/Card";
import './style.css';

function ProductList({ addToCart }){
    const products = [
        { id: 1, name: 'Amber Ale', price: 19.99, image: '/images/amberAle.jpg'},
        { id: 2, name: 'Imperial Golden', price: 29.99, image: '/images/imperial_golden.jpg' },
        { id: 3, name: 'Quilmes Bock', price: 9.99, image: '/images/quilmes_bock.jpg' },
        { id: 4, name: 'Stella Artois', price: 39.99, image: '/images/stella_artois.jpg' },
        { id: 5, name: 'Heineken', price: 49.99, image: '/images/heineken.jpg' },
        { id: 6, name: 'Schneider', price: 59.99, image: '/images/schneider.jpg' },
        
      ];
    
      return (
        <div className="product-list">
          {/* Se utiliza un mapeo para iterar sobre los productos en el arreglo 
          y crear una instancia de Card con cada uno */}
          {products.map(product => (
            <Card key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </div>
      );
}

export default ProductList;