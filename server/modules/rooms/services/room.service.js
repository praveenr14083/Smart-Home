import { Room } from "../models/room.model.js";

export const RoomService = {
  create: async (data) => await Room.create(data),
  getAll: async () => await Room.find().populate("ownerId access"),
  getById: async (id) => await Room.findById(id).populate("ownerId access"),
  update: async (id, data) =>
    await Room.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Room.findByIdAndDelete(id),
};
