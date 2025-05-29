import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import productsData from './data/products.json';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ACME E-commerce</h1>
      </header>
      <main className="main-content">
        <section className="products-section">
          <h2>Products</h2>
          <div className="product-grid">
            {productsData.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
        <aside className="cart-section">
          <ShoppingCart
            cartItems={cartItems}
            onRemoveFromCart={removeFromCart}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
