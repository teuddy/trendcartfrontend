// src/components/ShoppingCartIcon.js
import React from 'react';
import './ShoppingCartIcon.css';

const ShoppingCartIcon = ({ cartItems }) => {
  return (
    <div className="shopping-cart-icon">
      <i className="fas fa-shopping-cart"></i>
      {cartItems.length > 0 && (
        <span className="cart-items-count">{cartItems.length}</span>
      )}
    </div>
  );
};

export default ShoppingCartIcon;