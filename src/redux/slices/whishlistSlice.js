import { createSlice } from '@reduxjs/toolkit';

const whishlistSlice = createSlice({
  name: 'whishlistSlice',
  initialState: [],
  reducers: {
    addToWhishlist: (state, action) => {
      return [...state, action.payload];
    },
    removeFromWhishlist: (state, action) =>
      state.filter((item) => {
        console.log(item.id, action.payload);
        return item.id !== action.payload;
      }),
    clearWhishlist: (state) => {
      return [];
    },
  },
});

export const { addToWhishlist, removeFromWhishlist, clearWhishlist } =
  whishlistSlice.actions;

export default whishlistSlice.reducer;
