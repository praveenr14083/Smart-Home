import jwt from "jsonwebtoken";
import env from "../config/env.config.js";

export const generateTokens = (userId, role) => {
  const accessToken = jwt.sign({ id: userId, role }, env.jwt.secret, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ id: userId, role }, env.jwt.refreshSecret, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token) => jwt.verify(token, env.jwt.secret);
export const verifyRefreshToken = (token) =>
  jwt.verify(token, env.jwt.refreshSecret);
