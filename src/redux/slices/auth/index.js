import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage, setTokenToLocalStorage } from '../../../services/auth'

const jwtSlice = createSlice({
  name: "jwt",
  initialState: {
    token: getTokenFromLocalStorage(),
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      setTokenToLocalStorage(action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      setTokenToLocalStorage(null);
    },
  },
});

export const { setToken, clearToken } = jwtSlice.actions;

export default jwtSlice.reducer;

