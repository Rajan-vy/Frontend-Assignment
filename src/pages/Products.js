import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { getAllProducts } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Assuming getAllProducts() fetches your product data correctly
    getAllProducts()
      .then((data) => {
        setProducts(data.products); // Access the 'products' array in the data
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div class=" gap-4 flex flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
  
};

export default Products;
