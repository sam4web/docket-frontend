import { createSlice } from "@reduxjs/toolkit";
import { deleteNoteQuery, editNoteQuery, fetchAllNotes } from "@/features/note/noteThunks.js";

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
        state.notes = action.payload.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      })
      .addCase(fetchAllNotes.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(editNoteQuery.fulfilled, (state, action) => {
        const updatedNote = { ...action.payload };
        state.notes = state.notes.filter(note => note._id !== updatedNote._id);
        state.notes.unshift(updatedNote);
      })
      .addCase(deleteNoteQuery.fulfilled, (state, action) => {
        state.notes = state.notes.filter(note => note._id !== action.payload);
      });
  },
});

export const selectAllNotes = (state) => state.note.notes;
export const selectNoteById = (state, noteId) => state.note.notes.find(note => note._id === noteId);

export const getNoteStatus = (state) => state.note.status;
export const getNoteError = (state) => state.note.error;

export default noteSlice.reducer;