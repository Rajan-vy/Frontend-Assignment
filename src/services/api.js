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
export const getFeatureProduct = async () => {
  const response = await axios.get(`${API_BASE_URL}/products?limit=8&skip=5`);
  return response.data;
};
