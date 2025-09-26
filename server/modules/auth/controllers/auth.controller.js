import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const { user, token } = await authService.registerUser(req.body);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, token } = await authService.loginUser(req.body);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const profile = async (req, res) => {
  try {
    const user = await authService.getProfile(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
