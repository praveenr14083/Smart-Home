import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { HomeIcon } from "lucide-react";

export default function DeviceCard({
  deviceName,
  location,
  icon,
  initialSwitch = false,
}) {
  const [isOn, setIsOn] = useState(initialSwitch);

  // Use default icon if none is passed
  const Icon = icon || HomeIcon;

  return (
    <Card
      onClick={() => setIsOn(!isOn)}
      className="gap-4 shadow-none cursor-pointer"
    >
      <CardHeader className="flex flex-col gap-3">
        <CardTitle>{deviceName}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <div
          className={`${isOn ? "bg-blue-500" : "bg-gray-500"} p-2 rounded-xl`}
        >
          <Icon className="text-white" /> {/* now Icon is used */}
        </div>
        <Switch checked={isOn} onCheckedChange={() => setIsOn(!isOn)} />
      </CardContent>
    </Card>
  );
}
