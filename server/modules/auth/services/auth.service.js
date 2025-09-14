import { AuthModel } from "../models/auth.model.js";
import { hashPassword, comparePassword } from "../../../utils/hash.js";
import { generateTokens, verifyRefreshToken } from "../../../utils/jwt.js";

export const AuthService = {
  async register({ name, email, password, role }) {
    const existingUser = await AuthModel.findByEmail(email);
    if (existingUser) throw new Error("User already exists");

    const passwordHash = await hashPassword(password);
    const newUser = await AuthModel.createUser({
      name,
      email,
      role,
      passwordHash,
    });

    return { id: newUser.id, ...newUser.profile };
  },

  async login({ email, password }) {
    const user = await AuthModel.findByEmail(email);
    if (!user) throw new Error("Invalid email or password");

    const isValid = await comparePassword(password, user.auth.passwordHash);
    if (!isValid) throw new Error("Invalid email or password");

    const tokens = generateTokens(user.id, user.profile.role);

    return { ...tokens, user: { id: user.id, ...user.profile } };
  },

  async refresh(token) {
    try {
      const decoded = verifyRefreshToken(token);
      const tokens = generateTokens(decoded.id, decoded.role);
      return { accessToken: tokens.accessToken };
    } catch {
      throw new Error("Invalid refresh token");
    }
  },
};
