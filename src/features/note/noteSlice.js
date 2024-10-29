import { createSlice } from "@reduxjs/toolkit";
import { fetchAllNotes } from "@/features/note/noteThunks.js";

const initialState = {
  notes: [],
  status: "idle", // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotes.fulfilled, (state, action) => {
        state.status = "success";
        state.notes = action.payload;
      })
      .addCase(fetchAllNotes.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectAllNotes = (state) => state.note.notes;
export const selectNoteById = (state, noteId) => state.note.notes.find(note => note._id === noteId);

export const getNoteStatus = (state) => state.note.status;
export const getNoteError = (state) => state.note.error;

export default noteSlice.reducer;