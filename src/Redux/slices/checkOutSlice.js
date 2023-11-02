import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: [],
  reducers: {
    addToCheckout: (state, action) => {
      if (typeof window !== "undefined") {
        const currentCheckoutDetails = action.payload;
        console.log("currentCheckoutDetails", currentCheckoutDetails);
        const previousCheckoutDetails =
          JSON.parse(localStorage.getItem("checkoutDetails")) || [];

        // Append the current checkout details to the previous data
        const updatedCheckoutDetails = [
          ...previousCheckoutDetails,
          ...currentCheckoutDetails,
        ];

        // Update local storage with the updated data
        localStorage.setItem(
          "checkoutDetails",
          JSON.stringify(updatedCheckoutDetails)
        );

        // Update the state with the updated data
        return updatedCheckoutDetails;
      }
    },
  },
});

export const { addToCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
