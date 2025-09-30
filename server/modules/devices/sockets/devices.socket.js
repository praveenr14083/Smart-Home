import { getIo } from "../../../config/socket.config.js";

export const initDeviceSockets = () => {
  const io = getIo();
  io.on("connection", (socket) => {
    console.log("Device socket connected:", socket.id);
    socket.on("toggle_device", async ({ deviceId }) => {
      const { DeviceService } = await import("../services/device.service.js");
      try {
        const device = await DeviceService.toggleStatus(deviceId);
        io.emit("device_toggled", device);
      } catch (err) {
        console.error(err);
      }
    });
  });
};
