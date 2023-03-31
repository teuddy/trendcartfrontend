import axios from 'axios';
import { getTokenFromLocalStorage, setTokenToLocalStorage } from './auth';
import store from '../store';
import { setToken, clearToken } from '../slices/jwtSlice';

const apiService = axios.create({
  baseURL: '/api', // Your API base URL
});

// Request interceptor
apiService.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Refresh your JWT here using your refresh token logic
      const newToken = 'your_new_jwt_token';
      setTokenToLocalStorage(newToken); // Save JWT to local storage
      store.dispatch(setToken(newToken)); // Update Redux state with the new JWT

      // Update the Authorization header with the new JWT
      originalRequest.headers.Authorization = `Bearer ${newToken}`;

      // Retry the original request with the new JWT
      return apiService(originalRequest);
    }

    // If refreshing the token also fails, logout the user
    if (error.response.status === 401 && originalRequest._retry) {
      store.dispatch(clearToken());
    }

    return Promise.reject(error);
  }
);

export default apiService;
