import React from "react";
import { useParams } from "@tanstack/react-router";
import DeviceCard from "@/components/shared/DeviceCard";
import { PageHeader } from "@/components/common/PageHeader";

// 🔹 Example static data (replace later with API/DB)
const spaceDevices = {
  indoor: {
    livingroom: [
      {
        id: 1,
        deviceName: "Ceiling Light",
        icon: "lucide:lightbulb",
        initialSwitch: true,
      },
      {
        id: 2,
        deviceName: "Smart Fan",
        icon: "lucide:fan",
        initialSwitch: false,
      },
    ],
    kitchen: [
      {
        id: 3,
        deviceName: "Fridge",
        icon: "mdi:fridge-outline",
        initialSwitch: true,
      },
      {
        id: 4,
        deviceName: "Oven",
        icon: "icon-park-outline:oven",
        initialSwitch: false,
      },
    ],
    bedroom: [
      {
        id: 5,
        deviceName: "Table Lamp",
        icon: "lucide:lamp",
        initialSwitch: true,
      },
      {
        id: 6,
        deviceName: "Air Conditioner",
        icon: "mdi:air-conditioner",
        initialSwitch: false,
      },
      {
        id: 7,
        deviceName: "Smart Speaker",
        icon: "mdi:speaker",
        initialSwitch: true,
      },
    ],
  },
  outdoor: {
    garden: [
      {
        id: 8,
        deviceName: "Sprinkler",
        icon: "lucide:sprout",
        initialSwitch: true,
      },
      {
        id: 9,
        deviceName: "Garden Light",
        icon: "lucide:lightbulb",
        initialSwitch: false,
      },
    ],
    garage: [
      {
        id: 10,
        deviceName: "Garage Door",
        icon: "mdi:garage",
        initialSwitch: false,
      },
      {
        id: 11,
        deviceName: "CCTV Camera",
        icon: "mdi:cctv",
        initialSwitch: true,
      },
      {
        id: 12,
        deviceName: "Electric Vehicle Charger",
        icon: "mdi:ev-station",
        initialSwitch: false,
      },
    ],
  },
};

export default function SpaceDevicesPage() {
  // ✅ Params from /$space/$roomName
  const { space, roomName } = useParams({ from: "/$space/$roomName" });

  // ✅ Get devices list
  const devices = spaceDevices[space]?.[roomName?.toLowerCase()] || [];

  if (!devices.length) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">No devices found</h1>
        <p className="text-muted-foreground">
          {roomName} doesn’t have any registered devices yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            deviceName={device.deviceName}
            location={roomName.charAt(0).toUpperCase() + roomName.slice(1)}
            icon={device.icon}
            initialSwitch={device.initialSwitch}
          />
        ))}
      </div>
    </div>
  );
}
