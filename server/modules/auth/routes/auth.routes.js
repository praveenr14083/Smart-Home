import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authRateLimiter } from "../../../middlewares/rateLimiter.middleware.js";

const router = Router();

// Apply login/register rate limiter
router.post("/register", authRateLimiter, AuthController.register);
router.post("/login", authRateLimiter, AuthController.login);
router.post("/refresh", AuthController.refresh);

export default router;
