import { jwtDecode } from "jwt-decode";

export const userAuthReducer = (state, action) => {
  const token = action.payload;
  const decoded = jwtDecode(token);
  state.token = token;
  state.user = { ...decoded.UserInfo };
};