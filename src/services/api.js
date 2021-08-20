import myLog from '../config/myLog';

export const API_BASE_URL = process.env.REACT_APP_API_URL;
myLog(`using api base url:`, API_BASE_URL);

export const API_ENDPOINTS = {
  GET_PRODUCTS: `/all`,
  GET_SINGLE_PRODUCT: '/get',
  CATEGORY: '/category',
};
