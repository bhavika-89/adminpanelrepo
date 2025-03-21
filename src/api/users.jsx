import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const usersApi = {
  getAll: () => axios.get(`${API_URL}/users`),
  getById: (id) => axios.get(`${API_URL}/users/${id}`),
  create: (user) => axios.post(`${API_URL}/users`, user),
  update: (id, user) => axios.put(`${API_URL}/users/${id}`, user),
  delete: (id) => axios.delete(`${API_URL}/users/${id}`),
};