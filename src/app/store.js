import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "@/features/note/noteSlice.js";
import userReducer from "@/features/user/userSlice.js";

export const store = configureStore({
  reducer: {
    note: noteReducer,
    user: userReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});