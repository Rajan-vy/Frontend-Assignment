import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../services/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleProduct(id)
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [id]); // Include 'id' in the dependency array to fetch data when 'id' changes

  return (
    <div>
      {!loading && <div>Name: {products.title}</div>}
    </div>
  );
};

export default ProductDetails;