import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './redux/slices/orderSlice';
const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
});

export default store;
