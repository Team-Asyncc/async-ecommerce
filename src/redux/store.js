import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/orderSlice';
import productSlice from './slices/productSlice';

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productSlice,
  },
});

export default store;
