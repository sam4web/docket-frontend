import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// axiosInstance.defaults.headers.common['authorization'] = "Bearer TOKEN"

export default axiosInstance;