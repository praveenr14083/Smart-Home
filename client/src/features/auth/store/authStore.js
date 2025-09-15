import { create } from "zustand";
import { AuthService } from "../services/auth.service";

// Load initial state from localStorage
const storedUser = JSON.parse(localStorage.getItem("user")) || null;
const storedAccessToken = localStorage.getItem("accessToken") || null;

export const useAuthStore = create((set) => ({
  user: storedUser,
  accessToken: storedAccessToken,

  login: async (data) => {
    const result = await AuthService.login(data);

    // Save to Zustand state
    set({ user: result.user, accessToken: result.accessToken });

    // Persist in localStorage
    localStorage.setItem("user", JSON.stringify(result.user));
    localStorage.setItem("accessToken", result.accessToken);

    return result;
  },

  register: async (data) => {
    return await AuthService.register(data);
  },

  logout: () => {
    set({ user: null, accessToken: null });

    // Remove from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  },
}));
