import { setToken, clearToken } from "../slices/jwt/index";
import { setTokenToLocalStorage, removeTokenFromLocalStorage } from "../services/auth";

export const login = (credentials) => async (dispatch) => {
  // Perform your login logic here, usually an API call
  // After successfully logging in, you should get a JWT

  // For example:
  const jwt = "your_jwt_token_here";

  //

  setTokenToLocalStorage(jwt); // Save JWT to local storage
  dispatch(setToken(jwt)); // Update Redux state with the JWT
};



export const logout = () => (dispatch) => {
  removeTokenFromLocalStorage(); // Remove JWT from local storage
  dispatch(clearToken()); // Update Redux state to clear the JWT
};
