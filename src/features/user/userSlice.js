import { createSlice } from "@reduxjs/toolkit";
import { sendLoginRequest, sendRegistrationRequest } from "@/features/user/userThunks.js";
import { userAuthReducer } from "@/features/user/userReducer.js";

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginRequest.fulfilled, userAuthReducer)
      .addCase(sendRegistrationRequest.fulfilled, userAuthReducer);
  },
});


export const getToken = (state) => state.user.token;

export default userSlice.reducer;