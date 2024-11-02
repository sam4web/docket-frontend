import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/axiosInstance.js";

export const sendLoginRequest = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const sendRegistrationRequest = createAsyncThunk("user/register", async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/register", credentials);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const refreshAuthToken = createAsyncThunk("user/refresh", async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await api.post("/auth/refresh");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});