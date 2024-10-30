import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/api/axios.js";


export const fetchAllNotes = createAsyncThunk("notes/fetchAllNotes", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/notes");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const editNoteQuery = createAsyncThunk("notes/editNote", async (note, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`/notes/${note.id}`, { ...note });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const deleteNoteQuery = createAsyncThunk("notes/deleteNote", async (noteId, { rejectWithValue }) => {
  try {
    await axios.delete(`/notes/${noteId}`);
    return noteId;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});