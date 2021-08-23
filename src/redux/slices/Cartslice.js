import { createSlice } from '@reduxjs/toolkit';
function cartInitialState()
{
  if(localStorage.getItem("items")===null)
    return []
  return JSON.parse( localStorage.getItem("items"))
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState(),
  reducers: {
    addItem: (state, action) => {
      localStorage.setItem("items",JSON.stringify([...state ,action.payload]));  
      return [...state, action.payload];
    },
    removeItem: (state, action) =>{

      const newState= state.filter((item) => {
        return item.id !== action.payload;
      })
      localStorage.setItem("items",JSON.stringify(newState))
      return newState
    },
    clearCart: () => [],
    incItem: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload && item.quantity !== 4)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
      localStorage.setItem("items",JSON.stringify(newState))
      return newState;
    },
    decItem: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload && item.quantity !== 0)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
      localStorage.setItem("items",JSON.stringify(newState))
      return newState;
    },
  },
});
export const { addItem, removeItem, clearCart, incItem, decItem } =
  cartSlice.actions;
export default cartSlice.reducer;
