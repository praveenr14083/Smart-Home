import dotenv from "dotenv";
dotenv.config();

const requiredEnv = [
  "PORT",
  "JWT_SECRET",
  "JWT_REFRESH_SECRET",
  "FIREBASE_SERVICE_ACCOUNT_PATH",
  "FIREBASE_DATABASE_URL", // ✅ add this
];

for (const key of requiredEnv) {
  if (!process.env[key] || process.env[key].trim() === "") {
    throw new Error(`⚠️ Environment variable ${key} is missing in .env`);
  }
}

const env = {
  server: {
    port: process.env.PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
  },
  firebase: {
    serviceAccountPath: process.env.FIREBASE_SERVICE_ACCOUNT_PATH,
    databaseURL: process.env.FIREBASE_DATABASE_URL, // ✅ add this
  },
};

export default env;
