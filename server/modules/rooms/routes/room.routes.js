import express from "express";
import { RoomController } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/", RoomController.create);
router.get("/", RoomController.getAll);
router.get("/:id", RoomController.getById);
router.put("/:id", RoomController.update);
router.delete("/:id", RoomController.delete);

export default router;
