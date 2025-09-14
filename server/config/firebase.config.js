import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";
import env from "./env.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.join(
  __dirname,
  "../",
  env.firebase.serviceAccountPath
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
    databaseURL: env.firebase.databaseURL, // 👈 required for RTDB
  });
}

const db = admin.firestore();
const rtdb = admin.database();

export { admin, db, rtdb };
