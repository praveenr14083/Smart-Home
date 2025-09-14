import { Router } from "express";
import authRoutes from "../modules/auth/routes/auth.routes.js";

const router = Router();

router.use("/auth", authRoutes);

export default router;
