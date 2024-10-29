import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "@/features/note/noteSlice.js";

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
  devTools: true,
});