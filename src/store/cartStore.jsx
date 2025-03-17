import { create } from 'zustand';
import axios from 'axios';

const useCartStore = create((set) => ({
  carts: [],
  fetchCarts: async () => {
    const res = await axios.get('/carts');
    set({ carts: res.data });
  },
  updateCart: async (id, updatedCart) => {
    await axios.put(`/carts/${id}`, updatedCart);
    set((state) => ({
      carts: state.carts.map((c) =>
        c.id === id ? { ...c, ...updatedCart } : c
      ),
    }));
  },
  deleteCart: async (id) => {
    await axios.delete(`/carts/${id}`);
    set((state) => ({
      carts: state.carts.filter((c) => c.id !== id),
    }));
  },
}));

export default useCartStore;
