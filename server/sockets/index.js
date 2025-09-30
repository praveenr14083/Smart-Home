import { initDeviceSockets } from "../modules/devices/sockets/devices.socket.js";
import { initRoomSockets } from "../modules/rooms/sockets/rooms.socket.js";

export const registerSockets = () => {
  initDeviceSockets();
  initRoomSockets();
};
