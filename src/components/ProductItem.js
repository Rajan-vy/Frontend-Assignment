import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalStore from '../store';

const ProductItem = ({ product }) => {
  const addToCart = useGlobalStore((state) => state.addToCart);
  const cart = useGlobalStore((state) => state.cart);
  const [filledStars, setFilledStars] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const calculatedFilledStars = Math.round(product.rating * 2) / 2;
    setFilledStars(calculatedFilledStars);
  }, [product.rating]);

  useEffect(() => {
    // Check if the product is in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);
    setAddedToCart(isProductInCart);
  }, [cart, product.id]);

  const addCart = (product, quantity) => {
    addToCart({ ...product, quantity: quantity });
    setAddedToCart(true);
  };

  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <div className="w-full h-[180px] rounded-lg overflow-hidden p-4">
            <img className="rounded-lg object-center w-full" src={product.thumbnail} alt="product image" />
          </div>
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/products/${product.id}`}>
            <div className="mt-3">
              <h5 className="text-xl font-semibold tracking-tight">{product.title}</h5>
            </div>
            <div>
              {product.description.slice(0, 35)}...
            </div>
            <div className="mt-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">
                {product.category}
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">
                {product.brand}
              </span>
            </div>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="text-[24px]">
              {/* Render stars based on filledStars state */}
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={`star-${index}`}
                  className={`star ${index < filledStars ? 'filled' : ''}`}
                >
                  &#9733;
                </span>
              ))}
            </div>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold ">Rs.{product.price.toFixed(2)}</span>
            <div
              className={`text-white bg-blue-700
              focus:outline-none focus:ring-blue-300 
             font-medium rounded-lg text-sm px-5 py-2.5 text-center 
               dark:focus:ring-blue-800 cursor-pointer ${addedToCart ? 'cursor-not-allowed bg-gray-500' : ''}`}
              onClick={() => addCart(product, 1)}
              disabled={addedToCart}
            >
              {!addedToCart ? <div>Add to Cart</div> : <div>Added to Cart</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
