import { createSlice } from "@reduxjs/toolkit";
import {
  refreshAuthToken,
  sendLoginRequest,
  sendLogoutRequest,
  sendRegistrationRequest,
} from "@/features/user/userThunks.js";
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
      .addCase(sendRegistrationRequest.fulfilled, userAuthReducer)
      .addCase(refreshAuthToken.fulfilled, userAuthReducer)
      .addCase(sendLogoutRequest.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
      });
  },
});


export const selectCurrentToken = (state) => state.user.token;
export const selectUserInfo = (state) => state.user.user;

export default userSlice.reducer;