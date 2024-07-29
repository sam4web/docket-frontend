import axios from "axios";
import { create } from "zustand";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const noteStore = create((set) => ({
  notes: [],
  currentNote: {},
  error: [],
  token: localStorage.getItem("token"),
  fetchNotes: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/notes`, {
        headers: { "x-auth-token": noteStore.getState().token },
      });
      set({ notes: response.data });
    } catch (error) {
      set({ error: error.response ? error.response.data : "Network Error" });
    }
  },
  fetchNote: async (noteId) => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/notes/${noteId}`, {
        headers: { "x-auth-token": noteStore.getState().token },
      });
      set({ currentNote: response.data });
    } catch (error) {
      set({ error: error.response ? error.response.data : "Network Error" });
    }
  },
  createNote: (note) => {
    set(async (state) => {
      try {
        await axios.post(`${SERVER_URL}/api/notes`, note, {
          headers: { "x-auth-token": state.token },
        });
      } catch (error) {
        return { error: error.response.data };
      }
    });
  },
  updateNote: (note) => {
    set(async (state) => {
      try {
        await axios.patch(`${SERVER_URL}/api/notes/${note._id}`, note, {
          headers: { "x-auth-token": state.token },
        });
      } catch (error) {
        return { error: error.response.data };
      }
    });
  },
  deleteNote: (note) => {
    set(async (state) => {
      try {
        await axios.delete(`${SERVER_URL}/api/notes/${note._id}`, {
          headers: { "x-auth-token": state.token },
        });
      } catch (error) {
        return { error: error.response.data };
      }
    });
  },
}));

export default noteStore;
