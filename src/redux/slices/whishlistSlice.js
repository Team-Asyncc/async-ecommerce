import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const whishlistSlice = createSlice({
  name: 'whishlistSlice',
  initialState: [],
  reducers: {
    addToWhishlist: (state, action) => {
      for (let item of state) {
        if (item.id === action.payload.id) {
          toast.success('Item already in wishlist', {
            icon: '😶',
          });
          return state;
        }
      }
      toast.success('Item added to wishlist', {
        icon: '👏',
      });
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
