import axios from '../config/axios.config';
import { API_ENDPOINTS } from './api';

export const getAllProducts = async () => {
  const response = await axios.get(API_ENDPOINTS.GET_PRODUCTS);
  return response.data;
};

export const getSpecificProduct = async (id) => {
  const response = await axios.get(`${API_ENDPOINTS.GET_SINGLE_PRODUCT}/${id}`);
  return response.data;
};

export const loadOrders = () => {
  const data = localStorage.getItem('orders');
  const storedOrderList = JSON.parse(data);
  return storedOrderList;
};

export const storeOrders = (data) => {
  const storeData = JSON.stringify(data);
  localStorage.setItem('orders', storeData);
};
