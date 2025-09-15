import { loginUser, registerUser, refreshToken } from "../api/auth.api";

export const AuthService = {
  login: async (data) => {
    try {
      const res = await loginUser(data);
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    }
  },

  register: async (data) => {
    try {
      const res = await registerUser(data);
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Registration failed");
    }
  },

  refresh: async (token) => {
    try {
      const res = await refreshToken(token);
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Refresh token failed");
    }
  },
};
