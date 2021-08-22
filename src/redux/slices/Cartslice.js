import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    removeItem: (state, action) =>
      state.filter((item) => {
        console.log(item.id, action.payload);
        return item.id !== action.payload;
      }),
    clearCart: () => [],
    incItem: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload && item.quantity !== 4)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
      return newState;
    },
    decItem: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload && item.quantity !== 0)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
      return newState;
    },
  },
});
export const { addItem, removeItem, clearCart, incItem, decItem } =
  cartSlice.actions;

export default cartSlice.reducer;
