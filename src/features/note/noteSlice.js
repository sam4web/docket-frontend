import { createSlice } from "@reduxjs/toolkit";
import { createNoteEntry, deleteNoteRequest, fetchNotesQuery, updateNoteRecord } from "@/features/note/noteThunks.js";

const initialState = {
  notes: [],
  status: "idle", // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    clearAllNotes(state) {
      state.notes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotesQuery.fulfilled, (state, action) => {
        const notes = action.payload;
        state.status = "success";
        if (notes)
          state.notes = notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      })
      .addCase(fetchNotesQuery.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNotesQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateNoteRecord.fulfilled, (state, action) => {
        const updatedNote = { ...action.payload };
        state.notes = state.notes.filter(note => note._id !== updatedNote._id);
        state.notes.unshift(updatedNote);
      })
      .addCase(deleteNoteRequest.fulfilled, (state, action) => {
        state.notes = state.notes.filter(note => note._id !== action.payload);
      }).addCase(createNoteEntry.fulfilled, (state, action) => {
      state.notes.unshift(action.payload);
    });
  },
});

export const selectAllNotes = (state) => state.note.notes;
export const selectNoteById = (state, noteId) => state.note.notes.find(note => note._id === noteId);

export const getNoteStatus = (state) => state.note.status;
export const getNoteError = (state) => state.note.error;

export const { clearAllNotes } = noteSlice.actions;
export default noteSlice.reducer;