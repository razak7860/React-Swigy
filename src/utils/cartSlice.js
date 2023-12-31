import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the existing state
      state.items.push(action.payload);
    },
  },
});

console.log("cartSlice is ");
// console.log(cartSlice);
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
