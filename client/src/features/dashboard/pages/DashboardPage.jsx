import React, { useState } from "react";
import { TemperatureCard } from "../components/TemperatureCard";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import DeviceCard from "../../../components/shared/DeviceCard";
import { Card } from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Iconify } from "@/lib/Iconify";
import { SpaceCard } from "@/components/shared/SpaceCard";

export default function DashboardPage() {
  const [userName] = useState("Praveen");

  const rooms = [
    {
      location: "Living Room",
      temperature: 35,
      initialSwitch: true,
      icon: "lucide:lamp",
    },
    {
      location: "Bedroom",
      temperature: 28,
      initialSwitch: false,
      icon: "lucide:bed",
    },
    {
      location: "Kitchen",
      temperature: 32,
      initialSwitch: true,
      icon: "lucide:utensils-crossed",
    },
  ];

  const spaces = [
    {
      id: 1,
      name: "Living Room",
      devices: 4,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80", // Living room image
      initialSwitch: true,
      space: "indoor",
    },
    {
      id: 2,
      name: "Garden",
      devices: 1,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80", // Garden image
      initialSwitch: false,
      space: "outdoor",
    },
    {
      id: 3,
      name: "Kitchen",
      devices: 4,
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=80", // Kitchen image
      initialSwitch: false,
      space: "indoor",
    },
  ];

  // Devices with correct icons
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
  ];

  const weatherData = [
    { icon: "lucide:thermometer-sun", label: "Temperature", value: "32°C" },
    { icon: "lucide:droplets", label: "Humidity", value: "60%" },
    { icon: "lucide:sun", label: "Condition", value: "Sunny" },
    { icon: "lucide:wind", label: "Wind Speed", value: "12 km/h" },
  ];
  const energyData = [
    { day: "Mon", usage: 12 },
    { day: "Tue", usage: 18 },
    { day: "Wed", usage: 10 },
    { day: "Thu", usage: 22 },
    { day: "Fri", usage: 16 },
    { day: "Sat", usage: 35 },
    { day: "Sun", usage: 20 },
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        {/* Left Container */}
        <div className="lg:col-span-2 space-y-6">
          {/* Temperature */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-xl">
                <Iconify icon="lucide:thermometer-sun" className="text-white" />
              </div>

              <h1 className="text-lg font-semibold">Temperature</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Spaces */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-violet-500 p-2 rounded-xl">
                <Iconify icon="lucide:door-open" className="text-white" />
              </div>

              <h1 className="text-lg font-semibold">Quick Access</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaces.map((space) => (
                <SpaceCard
                  key={space.id}
                  name={space.name}
                  devices={space.devices}
                  image={space.image}
                  initialSwitch={space.initialSwitch}
                  to={`${space.space}/${space.name
                    .toLowerCase()
                    .replace(/\s+/g, "")}`}
                />
              ))}
            </div>
          </div>

          {/* Devices */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 p-2 rounded-xl">
                <Iconify icon="lucide:power" className="text-white" />
              </div>

              <h1 className="text-lg font-semibold">Devices</h1>
            </div>
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
        <div className="lg:col-span-1 space-y-6">
          {/*  Energy Monitor */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="bg-green-500 p-2 rounded-xl">
                <Iconify icon="ic:round-bar-chart" className="text-white" />
              </div>
              <h1 className="text-lg font-semibold">Energy Monitor</h1>
            </div>

            {/* Energy Monitor Graph */}
            <Card className="p-4 shadow-none h-[202px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="relative right-2 top-2"
              >
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} interval={0} />
                  <YAxis unit=" kWh" tick={{ fontSize: 12 }} interval={0} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937", // dark: gray-800
                      borderRadius: "8px",
                      border: "none",
                      color: "#f9fafb", // dark: gray-50
                    }}
                    labelStyle={{
                      color: "#f9fafb", // white text
                      fontWeight: "bold",
                    }}
                    itemStyle={{
                      color: "#f9fafb", // white for items
                    }}
                  />
                  <Bar dataKey="usage" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Weather */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 p-2 rounded-xl">
                <Iconify icon="lucide:cloud" className="text-white" />
              </div>
              <h1 className="text-lg font-semibold">Weather</h1>
            </div>

            {/* Weather details */}
            <Card className="p-6 shadow-none">
              <Table>
                <TableBody>
                  {weatherData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-[none]">
                      <TableCell className="flex items-center gap-2 font-medium border-0  py-3">
                        <Iconify icon={item.icon} />
                        {item.label}
                      </TableCell>
                      <TableCell className="text-right font-semibold border-0  py-3">
                        {item.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
