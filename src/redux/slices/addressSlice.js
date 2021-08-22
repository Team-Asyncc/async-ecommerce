import { createSlice } from '@reduxjs/toolkit';
import { storeAddressses } from '../../services/addresses';

const initialState = {
  storedAddresses: [],
  selectedAddress: [],
};

export const addressSlice = createSlice({
  name: 'address',
  initialState: initialState,
  reducers: {
    setAllAddress: (state, action) => {
      return { ...action.payload };
    },
    addAddress: (state, action) => {
      state.storedAddresses = [...state.storedAddresses, action.payload];
      storeAddressses(state);
    },
    removeAddress: (state, action) => {
      state.storedAddresses = state.storedAddresses.filter(
        (item, idx) => idx !== action.payload
      );
      storeAddressses(state);
    },
    updateAddress: (state, action) => {
      state.storedAddresses = state.storedAddresses.map((currAddress, idx) => {
        if (idx === action.payload.id) return action.payload.val;
        return currAddress;
      });
      storeAddressses(state);
    },
    setSelected: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
});
export const {
  addAddress,
  removeAddress,
  setAllAddress,
  updateAddress,
  setSelected,
} = addressSlice.actions;

export default addressSlice.reducer;
