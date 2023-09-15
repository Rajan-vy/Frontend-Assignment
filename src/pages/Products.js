import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { getAllProducts } from '../services/api';
import Filter from '../components/Filter';

const Products = ({category='Default'}) => {
  const [products, setProducts] = useState([]);
  console.log(category);

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
      <div class="grid grid-cols-2 grid-rows-2 gap-1 px-4 pt-5 lg:grid-cols-4 bg-blue-100">
        {products.map((product) => (
          product.category===category &&(
            <div key={product.id} className="flex flex-col">
            <ProductItem product={product} />
          </div>
          )
        ))}
      </div>
  );
  
};

export default Products;
