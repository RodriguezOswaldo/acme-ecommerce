import React from 'react';

const ShoppingCart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => onRemoveFromCart(item)} className="remove-btn">
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
