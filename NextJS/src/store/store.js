import { create } from "zustand";

const useCart = create((set) => ({
  items: [],
  addItems: (newItems) => set({ items: newItems }),
}));

export default useCart;
