import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    profile: {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      role: { type: String, enum: ["Admin", "Member"], default: "Member" },
      profileImage: { type: String, default: "" },
    },
    auth: {
      passwordHash: { type: String, required: true },
      jwtToken: { type: String },
    },
  },
  { timestamps: true }
);

export const AuthUser = mongoose.model("AuthUser", authSchema);
