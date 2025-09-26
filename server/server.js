import http from "http";
import { Server } from "socket.io";

import app from "./app.js";
import { connectDB } from "./config/db.config.js";
import { ENV } from "./config/env.config.js";
import { AuthUser } from "./modules/auth/models/auth.model.js";
import { verifyToken } from "./utils/jwt.js";

// Connect to MongoDB
connectDB();

// Create server and attach Socket.IO
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Socket.IO auth middleware
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("No token provided"));

    const decoded = verifyToken(token);
    const user = await AuthUser.findById(decoded.id).select("-password");
    if (!user) return next(new Error("Invalid token"));

    socket.user = user;
    next();
  } catch (err) {
    next(new Error("Authentication error"));
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.user.name);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.user.name);
  });
});

// Start server
server.listen(ENV.PORT, () =>
  console.log(`Server running on port ${ENV.PORT}`)
);
