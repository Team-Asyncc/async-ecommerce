import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState=[],
  reducers: {
    addItem: (state, action) => {
     const newState=[];
     let isItemExiest = false;
     for(let i=0; i<state.length; i++)
     {
         if( state[i][0] === action.payload)
         {
             newState.push([state[i][0], state[i][1]+1]);
             isItemExiest = true;
         }
         else
           nesState.push(state[i]);
     }
     if(! isItemExiest)
     newState.push([action.payload ,1]);
     return newState; 
    },
    removeItem: (state, action) => {
      const newState = [];
      for(let i=0; i<state.length; i++)
      {
          if(state[i][0] != action.payload)
          newState.push(state[i])
      }
      return newState
    },
  },
});
export const { addItem, removeItem } = orderSlice.actions;

export default cartSlice.reducer;