import { RoomService } from "../services/room.service.js";
import { getIo } from "../../../config/socket.config.js";

export const RoomController = {
  create: async (req, res) => {
    try {
      const room = await RoomService.create(req.body);
      getIo().emit("room_created", room);
      res.status(201).json(room);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      res.json(await RoomService.getAll());
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      res.json(await RoomService.getById(req.params.id));
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const room = await RoomService.update(req.params.id, req.body);
      getIo().emit("room_updated", room);
      res.json(room);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await RoomService.delete(req.params.id);
      getIo().emit("room_deleted", { id: req.params.id });
      res.json({ message: "Room deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
