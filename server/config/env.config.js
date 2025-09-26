import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI:
    process.env.MONGO_URI || "mongodb://localhost:27017/home_automation",
  JWT_SECRET: process.env.JWT_SECRET || "your_secret_key",
};
