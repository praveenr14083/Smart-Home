import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ThermometerSun } from "lucide-react";
import { HomeIcon } from "lucide-react";

export default function TemperatureCard({
  temperature,
  unit = "C",
  location,
  initialSwitch = false,
  icon,
}) {
  const [isOn, setIsOn] = useState(initialSwitch);

  const Icon = icon || HomeIcon;

  return (
    <Card
      onClick={() => setIsOn(!isOn)}
      className="gap-4 shadow-none cursor-pointer"
    >
      <CardHeader className="flex flex-col gap-3">
        <CardTitle>Temperature</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>

      <CardContent className="flex gap-2 items-center m-0">
        <ThermometerSun />
        <div className="flex items-end gap-2">
          <h1 className="text-2xl font-semibold">
            {temperature}
            <span>°</span>
          </h1>
          <p className="text-muted-foreground">{unit}</p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <div
          className={`${isOn ? "bg-blue-500" : "bg-gray-500"} p-2 rounded-xl`}
        >
          <Icon className="text-white" />
        </div>

        <Switch checked={isOn} onCheckedChange={() => setIsOn(!isOn)} />
      </CardFooter>
    </Card>
  );
}
