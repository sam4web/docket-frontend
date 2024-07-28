import axios from "axios";
import { create } from "zustand";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const authStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  login: async (userData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${SERVER_URL}/api/login`, userData);
      const data = response.data;
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["x-auth-token"] = data.token;
      set({
        user: data.user,
        token: data.token,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({ loading: false, error: error.response.data.message });
    }
  },
  register: async (userData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${SERVER_URL}/register`, userData);
      const data = response.data;
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["x-auth-token"] = data.token;
      set({
        user: data.user,
        token: data.token,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({ loading: false, error: error.response.data.message });
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["x-auth-token"];
    set({ user: null, token: null, loading: false, error: null });
  },
}));

export default authStore;
