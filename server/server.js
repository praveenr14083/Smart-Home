import http from "http";
import app from "./app.js";
import { connectDB } from "./config/db.config.js";
import { ENV } from "./config/env.config.js";
import { initSocket } from "./config/socket.config.js";
import { registerSockets } from "./sockets/index.js";

// Connect to MongoDB
connectDB();

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
initSocket(server);

// Register module sockets
registerSockets();

// Start server
server.listen(ENV.PORT, () =>
  console.log(`🚀 Server running on port ${ENV.PORT}`)
);
