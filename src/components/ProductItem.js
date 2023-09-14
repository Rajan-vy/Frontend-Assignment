// ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="border p-4">
      <img src={product.thumbnail} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: Rs. {product.price.toFixed(2)}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      {/* Add more details as needed */}
      <button disabled={product.stock === 0}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
