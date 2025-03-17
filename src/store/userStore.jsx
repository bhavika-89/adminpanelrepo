import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set) => ({
  users: [],
  fetchUsers: async () => {
    const res = await axios.get('/users');
    set({ users: res.data });
  },
  addUser: async (user) => {
    const res = await axios.post('/users', user);
    set((state) => ({ users: [...state.users, res.data] }));
  },
  updateUser: async (id, updatedUser) => {
    await axios.put(`/users/${id}`, updatedUser);
    set((state) => ({
      users: state.users.map((u) =>
        u.id === id ? { ...u, ...updatedUser } : u
      ),
    }));
  },
  deleteUser: async (id) => {
    await axios.delete(`/users/${id}`);
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    }));
  },
}));

export default useUserStore;
