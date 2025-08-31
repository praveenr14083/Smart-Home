import React from "react";
import DeviceCard from "@/components/shared/DeviceCard";
import { DeviceActions } from "../components/DeviceActions";
import { DeviceSummary } from "../components/DeviceSummary";

export default function DevicesPage() {
  const devices = [
    {
      deviceName: "Ceiling Light",
      location: "Living Room",
      icon: "lucide:lightbulb",
      initialSwitch: true,
    },
    {
      deviceName: "Fan",
      location: "Bedroom",
      icon: "lucide:fan",
      initialSwitch: false,
    },
    {
      deviceName: "Air Purifier",
      location: "Kitchen",
      icon: "lucide:wind",
      initialSwitch: true,
    },
    {
      deviceName: "Heater",
      location: "Bathroom",
      icon: "mdi:electric-water-heater",
      initialSwitch: false,
    },
    {
      deviceName: "Table Lamp",
      location: "Living Room",
      icon: "lucide:lamp",
      initialSwitch: true,
    },
    {
      deviceName: "Smart TV",
      location: "Bedroom",
      icon: "lucide:tv",
      initialSwitch: true,
    },
    {
      deviceName: "Smart Speaker",
      location: "Kitchen",
      icon: "lucide:speaker",
      initialSwitch: false,
    },
    {
      deviceName: "WiFi Router",
      location: "Living Room",
      icon: "lucide:router",
      initialSwitch: true,
    },
    {
      deviceName: "Ceiling Light",
      location: "Living Room",
      icon: "lucide:lightbulb",
      initialSwitch: true,
    },
    {
      deviceName: "Fan",
      location: "Bedroom",
      icon: "lucide:fan",
      initialSwitch: false,
    },
    {
      deviceName: "Air Purifier",
      location: "Kitchen",
      icon: "lucide:wind",
      initialSwitch: true,
    },
    {
      deviceName: "Heater",
      location: "Bathroom",
      icon: "mdi:electric-water-heater",
      initialSwitch: false,
    },
    {
      deviceName: "Table Lamp",
      location: "Living Room",
      icon: "lucide:lamp",
      initialSwitch: true,
    },
    {
      deviceName: "Smart TV",
      location: "Bedroom",
      icon: "lucide:tv",
      initialSwitch: true,
    },
    {
      deviceName: "Smart Speaker",
      location: "Kitchen",
      icon: "lucide:speaker",
      initialSwitch: false,
    },
    {
      deviceName: "WiFi Router",
      location: "Living Room",
      icon: "lucide:router",
      initialSwitch: true,
    },
    {
      deviceName: "Ceiling Light",
      location: "Living Room",
      icon: "lucide:lightbulb",
      initialSwitch: true,
    },
    {
      deviceName: "Fan",
      location: "Bedroom",
      icon: "lucide:fan",
      initialSwitch: false,
    },
    {
      deviceName: "Air Purifier",
      location: "Kitchen",
      icon: "lucide:wind",
      initialSwitch: true,
    },
    {
      deviceName: "Heater",
      location: "Bathroom",
      icon: "mdi:electric-water-heater",
      initialSwitch: false,
    },
    {
      deviceName: "Table Lamp",
      location: "Living Room",
      icon: "lucide:lamp",
      initialSwitch: true,
    },
    {
      deviceName: "Smart TV",
      location: "Bedroom",
      icon: "lucide:tv",
      initialSwitch: true,
    },
    {
      deviceName: "Smart Speaker",
      location: "Kitchen",
      icon: "lucide:speaker",
      initialSwitch: false,
    },
    {
      deviceName: "WiFi Router",
      location: "Living Room",
      icon: "lucide:router",
      initialSwitch: true,
    },
  ];
  return (
    <section>
      <DeviceActions />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        {/* Left Container */}
        <div className="lg:col-span-2 space-y-6 ">
          {/* Devices */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devices.map((device, index) => (
                <DeviceCard
                  key={index}
                  deviceName={device.deviceName}
                  location={device.location}
                  icon={device.icon}
                  initialSwitch={device.initialSwitch}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="lg:col-span-1 space-y-6 ">
          <DeviceSummary />
        </div>
      </div>
    </section>
  );
}
