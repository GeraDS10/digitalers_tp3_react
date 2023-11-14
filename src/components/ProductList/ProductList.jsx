import React from "react";

function ProductList(){
    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
      ];
    
      return (
        <div className="product-list">
          <h2>Autos</h2>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      );
}

export default ProductList;