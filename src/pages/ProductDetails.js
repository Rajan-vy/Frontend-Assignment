import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../services/api';
import useGlobalStore from '../store';

const ProductDetails = () => {
  const addToCart = useGlobalStore((state) => state.addToCart);
  const cart = useGlobalStore((state) => state.cart);
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImage] = useState('');
  const [filledStars, setFilledStars] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    getSingleProduct(id)
      .then((data) => {
        setProductData(data);
        setActiveImage(data.images[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  useEffect(() => {
    const calculatedFilledStars = Math.round(productData.rating * 2) / 2;
    setFilledStars(calculatedFilledStars);
  }, [productData.rating]);

  useEffect(() => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === productData.id);
    setAddedToCart(isProductInCart);
  }, [cart, productData.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const addCart = (product, quantity) => {
    addToCart({ ...product, quantity: quantity });
    setAddedToCart(true);
  };

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img src={activeImg} alt="" className="w-full h-full aspect-square object-cover rounded-xl" />
        <div className="flex flex-row justify-between h-24">
          {productData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index}`}
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:w-2/4">
        <div>
          <span className="text-violet-600 font-semibold">Special Offer</span>
          <h1 className="text-3xl font-bold">{productData.title}</h1>
        </div>
        <p className="text-gray-700">{productData.description}</p>
        <h6 className="text-2xl font-semibold">Rs.{productData.price.toFixed(2)}</h6>
        <div className="flex gap-10">
          <div className="flex items-center">
            <div className="bg-gray-200 px-3 py-1 rounded-md font-bold mr-[10px]">Brand: </div>
            <div>{productData.brand}</div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-200 px-3 py-1 rounded-md font-bold mr-[10px]">Category: </div>
            <div>{productData.category}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mt-2.5 mb-5">
            <div className="text-[24px]">
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
              {productData.rating}
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className={`bg-gray-200 py-2 px-5 rounded-lg text-3xl ${
                addedToCart ? 'text-gray-500 cursor-not-allowed' : 'text-violet-800'
              }`}
              onClick={() => setQuantity((prev) => prev - 1)}
              disabled={addedToCart}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{quantity}</span>
            <button
              className={`bg-gray-200 py-2 px-4 rounded-lg text-3xl ${
                addedToCart ? 'text-gray-500 cursor-not-allowed' : 'text-violet-800'
              }`}
              onClick={() => setQuantity((prev) => prev + 1)}
              disabled={addedToCart}
            >
              +
            </button>
          </div>

          <button
            className={`bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full ${
              addedToCart ? 'cursor-not-allowed bg-gray-500' : ''
            }`}
            onClick={() => addCart(productData, quantity)}
            disabled={addedToCart}
          >
            {addedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
