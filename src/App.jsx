import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import ShoppingKart from './components/ShoppingKart/ShoppingKart';
import Dolar from './components/Dolar/Dolar';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
    <div className="app">
      <Header />
      <Dolar />
      <Routes>
        {/* Crea una instancia de ProductList y pasa la funcion addToCart 
          como prop para poder agregar items al carrito */}
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        {/* Crea una instancia de ShoppingKart y pasa la funcion addToCart 
          como prop para poder mostrar items en el carrito */}
        <Route path="/cart" element={<ShoppingKart cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}

export default App;
