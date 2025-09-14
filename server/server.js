import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import env from "./config/env.config.js";

const PORT = env.server.port;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
