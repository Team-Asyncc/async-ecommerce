import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/orderSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/Cartslice';
import whishlistSlice from './slices/whishlistSlice';
import addressSlice from './slices/addressSlice';

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productSlice,
    cart: cartSlice,
    wishlist: whishlistSlice,
    addressData: addressSlice,
  },
});

export default store;
