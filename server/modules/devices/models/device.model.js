import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ["light", "fan", "ac", "tv"], required: true },
    status: { type: String, enum: ["on", "off"], default: "off" },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    access: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Device = mongoose.model("Device", deviceSchema);
