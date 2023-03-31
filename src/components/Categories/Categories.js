import React, { useEffect, useState } from 'react';

const CategoriesComponent = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    return (
      <div>
        <h1>Categories</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category.name}</li>
          ))}
        </ul>
      </div>
    );
  };

export default CategoriesComponent;