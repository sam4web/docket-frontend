import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/axiosInstance.js";


export const fetchNotesQuery = createAsyncThunk("notes/fetchAllNotes", async (_, { getState, rejectWithValue }) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${getState().user?.token}`;
  try {
    const response = await api.get("/notes");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const updateNoteRecord = createAsyncThunk("notes/editNote", async (note, { rejectWithValue }) => {
  try {
    const response = await api.patch(`/notes/${note.id}`, note);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const deleteNoteRequest = createAsyncThunk("notes/deleteNote", async (noteId, { rejectWithValue }) => {
  try {
    await api.delete(`/notes/${noteId}`);
    return noteId;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const createNoteEntry = createAsyncThunk("notes/createNote", async (newNote, { getState, rejectWithValue }) => {
  try {
    const response = await api.post("/notes", newNote);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});