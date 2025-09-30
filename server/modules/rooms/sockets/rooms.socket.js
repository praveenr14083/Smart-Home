import { getIo } from "../../../config/socket.config.js";

export const initRoomSockets = () => {
  const io = getIo();
  io.on("connection", (socket) => {
    console.log("Room socket connected:", socket.id);

    socket.on("join_room", ({ roomId }) => {
      socket.join(roomId);
      console.log(`${socket.id} joined room ${roomId}`);
    });

    socket.on("leave_room", ({ roomId }) => {
      socket.leave(roomId);
      console.log(`${socket.id} left room ${roomId}`);
    });
  });
};
