import React, { useState } from 'react';
import Products from '../pages/Products'; // Import your ProductItem component

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState(''); // State to store selected category

    // Function to handle the category change
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    return (
      <div>
        <h1>Select a Category:</h1>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">smartphones</option>
          {/* Add more category options as needed */}
        </select>
  
        {/* Pass the selectedCategory as a prop to ProductItem */}
        <Products category={selectedCategory} />
      </div>
    );
};
export default Filter;
