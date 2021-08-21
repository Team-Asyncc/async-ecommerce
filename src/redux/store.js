import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/orderSlice';
import productSlice from './slices/productSlice';
import whishlistSlice from './slices/whishlistSlice';

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productSlice,
    whishlist: whishlistSlice,
  },
});

export default store;
