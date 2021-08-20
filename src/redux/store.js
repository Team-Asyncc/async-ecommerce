import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/orderSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/Cartslice';

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productSlice,
    cart : cartSlice,
  },
});

export default store;
