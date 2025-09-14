import { verifyAccessToken } from "../utils/jwt.js";

/**
 * Auth middleware to protect routes.
 * @param {Array} roles - Optional array of roles allowed for this route
 */
export const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized" });
      }

      const token = authHeader.split(" ")[1];
      const decoded = verifyAccessToken(token);

      // Role check if roles array provided
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ success: false, message: "Forbidden" });
      }

      req.user = decoded; // attach user info to request
      next();
    } catch (err) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid or expired token" });
    }
  };
};
