import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "Cart",
  initialState: { items: [] },
  reducers: {
    addItemCart: (state, action) => {
      const productCart = action.payload;
      const exitProductIndex = state.items.findIndex(
        (item) => item._id === productCart._id
      );
      if (exitProductIndex == -1) {
        state.items.push(productCart);
      } else {
        state.items[exitProductIndex].quantity++;
      }
    },
    increase: (state, action) => {
      state.items.find((item) => item._id === action.payload).quantity++;
    },
    decrease: (state, action) => {
      const productFound = state.items.find(
        (item) => item._id === action.payload
      );
      productFound.quantity--;
      if (productFound.quantity < 1) {
        
      }
    },
  },
});
