
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;



// Public axios (login, register)
export const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
});

// Private axios (protected routes)
export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
});

// Attach token from Zustand (NO localStorage)
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle auth failures correctly
axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);