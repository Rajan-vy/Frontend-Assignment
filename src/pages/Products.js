import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { getAllProducts } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  

  return (
    <div className='bg-blue-100 min-h-[80vh]'>
      <div className='flex justify-between mb-[40px] px-[10%] flex-wrap pt-[50px]'>
        <div className="">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-[250px] h-[40px] px-[10px] border rounded-full border-gray-500 bg-white appearance-none'
          >
            <option value="">All Categories</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="skincare">Skincare</option>
            <option value="fragrances">Fragrances</option>
            <option value="groceries">Groceries</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder='Search the Product'
            className='w-[250px] h-[40px] px-[10px] border rounded-full border-gray-500'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] pt-5 lg:grid-cols-4 px-[30px]">
        {products.map((product) => (
          ((!category || product.category === category) && (product.title.toLowerCase().includes(search))) && (
            <div key={product.id} className="flex flex-col">
              <ProductItem product={product} />
            </div>
          )
        ))}
      </div>
    </div>

  );

};

export default Products;
