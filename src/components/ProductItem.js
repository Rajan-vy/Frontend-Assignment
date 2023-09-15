import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ProductItem = ({ product}) => {
  return (
    <Link to={`/products/${product.id}`}> {/* Wrap the component with Link */}
      <div className="border p-4 rounded-lg bg-slate-300">
        <img src={product.thumbnail} alt={product.name} className='h-40'/>
        <h2 className="line-clamp-2 lg:line-clamp-2">{product.name}</h2>
        <p className="line-clamp-2 lg:line-clamp-2">Price:Rs. {product.price.toFixed(2)}</p>
        <p className="line-clamp-2 lg:line-clamp-2">Stock: {product.stock}</p>
        <p className="line-clamp-2 lg:line-clamp-2">Category: {product.category}</p>
        <p className="line-clamp-2 lg:line-clamp-2">Description: {product.description}</p>
        {/* Add more details as needed */}
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mt-2" disabled={product.stock === 0}>Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductItem;