import { create } from 'zustand';
import axios from 'axios';

const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const res = await axios.get('/products');
    set({ products: res.data });
  },
  addProduct: async (product) => {
    const res = await axios.post('/products', product);
    set((state) => ({ products: [...state.products, res.data] }));
  },
  updateProduct: async (id, updatedProduct) => {
    await axios.put(`/products/${id}`, updatedProduct);
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...updatedProduct } : p
      ),
    }));
  },
  deleteProduct: async (id) => {
    await axios.delete(`/products/${id}`);
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    }));
  },
}));

export default useProductStore;
