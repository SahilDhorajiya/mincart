// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import checkoutReducer from "../slices/checkOutSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkOut: checkoutReducer,
  },
});

export default store;
