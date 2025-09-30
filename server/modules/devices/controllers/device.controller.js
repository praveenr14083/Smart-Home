import { DeviceService } from "../services/device.service.js";
import { getIo } from "../../../config/socket.config.js";

export const DeviceController = {
  create: async (req, res) => {
    try {
      const device = await DeviceService.create(req.body);
      getIo().emit("device_created", device);
      res.status(201).json(device);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      res.json(await DeviceService.getAll());
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      res.json(await DeviceService.getById(req.params.id));
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const device = await DeviceService.update(req.params.id, req.body);
      getIo().emit("device_updated", device);
      res.json(device);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await DeviceService.delete(req.params.id);
      getIo().emit("device_deleted", { id: req.params.id });
      res.json({ message: "Device deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  toggle: async (req, res) => {
    try {
      const device = await DeviceService.toggleStatus(req.params.id);
      getIo().emit("device_toggled", device);
      res.json(device);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
