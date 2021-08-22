import { createSlice } from '@reduxjs/toolkit';
import { storeOrders } from '../../services/orders';

export const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    getAllorders: (state, action) => {
      return [...action.payload];
    },
    addOrder: (state, action) => {
      const newState = [...state, ...action.payload];
      storeOrders(newState);
      return newState;
    },
  },
});
export const { getAllorders, addOrder } = orderSlice.actions;

export default orderSlice.reducer;
