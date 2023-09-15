import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../services/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleProduct(id)
      .then((data) => {
        setProduct(data); // Change this to set the entire product object
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render product details once data is available
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount Percentage: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <img src={product.thumbnail} alt={product.title} />

      <h2>Additional Images:</h2>
      <div>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;