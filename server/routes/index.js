import express from "express";
import authRoutes from "../modules/auth/routes/auth.routes.js";
import deviceRoutes from "../modules/devices/routes/device.routes.js";
import roomRoutes from "../modules/rooms/routes/room.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/api/devices", deviceRoutes);
router.use("/api/rooms", roomRoutes);

export default router;
