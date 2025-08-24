import React, { useState } from "react";
import TemperatureCard from "./components/TemperatureCard";
import { Card } from "@/components/ui/card";
import {
  LightbulbIcon,
  FanIcon,
  CirclePower,
  ThermometerSun,
  BedIcon,
  BathIcon,
  CookingPotIcon,
  WindIcon,
  HeaterIcon,
  LampIcon,
  TvIcon,
  SpeakerIcon,
  RouterIcon,
} from "lucide-react";
import DeviceCard from "./components/DeviceCard";

export default function DashboardPage() {
  const [userName] = useState("Praveen");

  const rooms = [
    {
      location: "Living Room",
      temperature: 35,
      initialSwitch: true,
      icon: LampIcon,
    },
    {
      location: "Bedroom",
      temperature: 28,
      initialSwitch: false,
      icon: BedIcon,
    },
    {
      location: "Kitchen",
      temperature: 32,
      initialSwitch: true,
      icon: CookingPotIcon,
    },
    {
      location: "Bathroom",
      temperature: 30,
      initialSwitch: false,
      icon: BathIcon,
    },
  ];

  // Devices with correct icons
  const devices = [
    {
      deviceName: "Ceiling Light",
      location: "Living Room",
      icon: LightbulbIcon,
      initialSwitch: true,
    },
    {
      deviceName: "Fan",
      location: "Bedroom",
      icon: FanIcon,
      initialSwitch: false,
    },
    {
      deviceName: "Air Purifier",
      location: "Kitchen",
      icon: WindIcon,
      initialSwitch: true,
    },
    {
      deviceName: "Heater",
      location: "Bathroom",
      icon: HeaterIcon,
      initialSwitch: false,
    },
    {
      deviceName: "Table Lamp",
      location: "Living Room",
      icon: LampIcon,
      initialSwitch: true,
    },
    {
      deviceName: "Smart TV",
      location: "Bedroom",
      icon: TvIcon,
      initialSwitch: true,
    },
    {
      deviceName: "Smart Speaker",
      location: "Kitchen",
      icon: SpeakerIcon,
      initialSwitch: false,
    },
    {
      deviceName: "WiFi Router",
      location: "Living Room",
      icon: RouterIcon,
      initialSwitch: true,
    },
  ];
  // Initialize greeting and emoji based on current time
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12)
      return { greeting: "Good Morning", emoji: "☀️" };
    if (hour >= 12 && hour < 17)
      return { greeting: "Good Afternoon", emoji: "🌤️" };
    if (hour >= 17 && hour < 21)
      return { greeting: "Good Evening", emoji: "🌇" };
    return { greeting: "Good Night", emoji: "🌙" };
  };

  const { greeting, emoji } = getGreeting();

  return (
    <section>
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">
          {`${greeting} ${emoji}, ${userName}`}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        <div className="lg:col-span-2 space-y-6">
          {/* Temperature */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-xl">
                <ThermometerSun className="text-white" />
              </div>

              <h1 className="text-lg font-semibold">Temperature</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rooms.map((room, index) => (
                <TemperatureCard
                  key={index}
                  location={room.location}
                  temperature={room.temperature}
                  initialSwitch={room.initialSwitch}
                  icon={room.icon}
                />
              ))}
            </div>
          </div>

          {/* Devices */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 p-2 rounded-xl">
                <CirclePower className="text-white" />
              </div>

              <h1 className="text-lg font-semibold">Devices</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {devices.map((device, index) => (
                <DeviceCard
                  key={index}
                  deviceName={device.deviceName}
                  location={device.location}
                  icon={device.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">Cont 2</div>
      </div>
    </section>
  );
}
