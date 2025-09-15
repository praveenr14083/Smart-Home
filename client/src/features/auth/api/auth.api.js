import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const refreshToken = (token) =>
  axios.post(`${API_URL}/refresh`, { token });
