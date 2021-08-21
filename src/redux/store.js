import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/orderSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/Cartslice';
import whishlistSlice from './slices/whishlistSlice';

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productSlice,
    cart: cartSlice,
    wishlist: whishlistSlice,
  },
});

export default store;
