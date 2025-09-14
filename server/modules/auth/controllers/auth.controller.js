import { AuthService } from "../services/auth.service.js";
import { registerSchema, loginSchema } from "../validations/auth.validation.js";

export const AuthController = {
  async register(req, res) {
    try {
      const data = registerSchema.parse(req.body);
      const user = await AuthService.register(data);
      res.status(201).json({ success: true, user });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  async login(req, res) {
    try {
      const data = loginSchema.parse(req.body);
      const result = await AuthService.login(data);
      res.status(200).json({ success: true, ...result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  async refresh(req, res) {
    try {
      const { token } = req.body;
      if (!token) throw new Error("Refresh token required");

      const result = await AuthService.refresh(token);
      res.status(200).json({ success: true, ...result });
    } catch (err) {
      res.status(401).json({ success: false, message: err.message });
    }
  },
};
