import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  orders: [],
};
export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getAllorders: (state, action) => {
      state.orders = [...action.payload];
    },
    addOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
  },
});
export const { getAllorders, addOrder } = orderSlice.actions;

export default orderSlice.reducer;
