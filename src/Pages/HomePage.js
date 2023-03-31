import React from 'react';
import { useSelector } from "react-redux";

import { Link } from 'react-router-dom';

function HomePage() {
  const jwt = useSelector((state) => state.jwt.token);

  return (
    <div>
      {/* Hero section */}
      <p>{jwt}</p>
      <section className="hero">
        <div className="hero-content">
          <h1>Shop the Latest Trends</h1>
          <p>Get the newest fashion trends at affordable prices.</p>
          <Link to="/shop" className="button-primary">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-item">
            <img src="https://via.placeholder.com/300x300" alt="Product" />
            <h3>Product Name</h3>
            <p className="product-price">$19.99</p>
            <button className="button-secondary">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/300x300" alt="Product" />
            <h3>Product Name</h3>
            <p className="product-price">$29.99</p>
            <button className="button-secondary">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/300x300" alt="Product" />
            <h3>Product Name</h3>
            <p className="product-price">$39.99</p>
            <button className="button-secondary">Add to Cart</button>
          </div>
        </div>
        <Link to="/shop" className="button-secondary">
          View All Products
        </Link>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://via.placeholder.com/300x300" alt="Category" />
            <h3>Category Name</h3>
          </div>
          <div className="category-item">
            <img src="https://via.placeholder.com/300x300" alt="Category" />
            <h3>Category Name</h3>
          </div>
          <div className="category-item">
            <img src="https://via.placeholder.com/300x300" alt="Category" />
            <h3>Category Name</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default HomePage;