// api.js
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getSingleProduct = async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
  return response.data;
};
