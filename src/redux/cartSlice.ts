import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IProduct } from "@/interfaces/product.interface";

export interface CartItem extends IProduct {
  bought: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice: Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find(
        (item: CartItem) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.bought += 1;
      } else {
        state.items.push({ ...action.payload, bought: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item: CartItem) => item._id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; bought: number }>
    ) => {
      const item = state.items.find(
        (item: CartItem) => item._id === action.payload.id
      );
      if (item) {
        item.bought = action.payload.bought;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
