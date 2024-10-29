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