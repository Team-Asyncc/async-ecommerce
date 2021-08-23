import { createSlice } from '@reduxjs/toolkit';
import { storeWishlist } from '../../services/wishlist';
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
      const newState = [...state, action.payload];
      storeWishlist(newState);
      return newState;
    },
    removeFromWhishlist: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      storeWishlist(newState);
      return newState;
    },
    clearWhishlist: (state) => {
      return [];
    },
    getWishlist: (state, action) => {
      return [...action.payload];
    },
  },
});

export const {
  addToWhishlist,
  removeFromWhishlist,
  clearWhishlist,
  getWishlist,
} = whishlistSlice.actions;

export default whishlistSlice.reducer;
