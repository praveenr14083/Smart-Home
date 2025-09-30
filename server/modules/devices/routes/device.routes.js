import express from "express";
import { DeviceController } from "../controllers/device.controller.js";

const router = express.Router();

router.post("/", DeviceController.create);
router.get("/", DeviceController.getAll);
router.get("/:id", DeviceController.getById);
router.put("/:id", DeviceController.update);
router.delete("/:id", DeviceController.delete);
router.patch("/:id/toggle", DeviceController.toggle);

export default router;
