import React, { useState } from "react";
import TemperatureCard from "./components/TemperatureCard";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  const [userName] = useState("Praveen");

  const rooms = [
    { location: "Living Room", temperature: 35, initialSwitch: true },
    { location: "Bedroom", temperature: 28, initialSwitch: false },
    { location: "Kitchen", temperature: 32, initialSwitch: true },
    { location: "Bathroom", temperature: 30, initialSwitch: false },
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
        <h1 className="text-lg md:text-2xl font-semibold">
          {`${greeting} ${emoji}, ${userName}`}
        </h1>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card className="grid grid-cols-4 gap-2 p-2 m-0">
            {rooms.map((room, index) => (
              <TemperatureCard
                key={index}
                location={room.location}
                temperature={room.temperature}
                initialSwitch={room.initialSwitch}
              />
            ))}
          </Card>
        </div>
        <div className="lg:col-span-1">Cont 2</div>
      </div>
    </section>
  );
}
