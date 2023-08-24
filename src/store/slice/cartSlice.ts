import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"

// Define a type for the slice state
export interface CartState {
    items: Array<any>;
    totalAmount: number;
    totalQuantity: number;
}

// Define the initial state using that type
const initialState: CartState = {
    items: [],
    totalAmount : 0,
    totalQuantity : 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity += actions.payload.quantity
    },

    removeFromCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity -= actions.payload.quantity
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    clearCart: (state) => {
      state= initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;