import { Device } from "../models/device.model.js";

export const DeviceService = {
  create: async (data) => await Device.create(data),
  getAll: async () => await Device.find().populate("roomId ownerId access"),
  getById: async (id) =>
    await Device.findById(id).populate("roomId ownerId access"),
  update: async (id, data) =>
    await Device.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Device.findByIdAndDelete(id),
  toggleStatus: async (id) => {
    const device = await Device.findById(id);
    if (!device) throw new Error("Device not found");
    device.status = device.status === "on" ? "off" : "on";
    await device.save();
    return device;
  },
};
