import { createSlice } from '@reduxjs/toolkit';

const whishlistSlice = createSlice({
  name: 'whishlistSlice',
  initialState: [{}],
  reducers: {
    addToWhishlist: (state, action) => {
      state = [...state, action.payload];
    },
    removeFromWhishlist: (state, action) => {
      state = state.filter((val) => val.id !== action.payload);
    },
    clearWhishlist: (state) => {
      state = [];
    },
  },
});

export const { addToWhishlist, removeFromWhishlist, clearWhishlist } =
  whishlistSlice.actions;

export default whishlistSlice.reducer;
