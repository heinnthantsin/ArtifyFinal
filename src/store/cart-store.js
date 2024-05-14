import { create } from "zustand";

export const useCartStore = create((set) => ({
  carts: [],
  addCartItem: (item) =>
    set((state) => ({
      ...state,
      carts: [...state.carts, item],
    })),
  removeCartItem: (id) =>
    set((state) => ({ carts: state.carts.filter((item) => item.id != id) })),
  replacedItem: (item) =>
    set((state) => ({
      ...state,
      carts: state.carts.map((cartItem) => {
        if (cartItem.id === item.id) return item;
        return cartItem;
      }),
    })),
  setDefault: () => set({ carts: [] }),
}));
