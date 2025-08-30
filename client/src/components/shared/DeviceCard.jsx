import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Iconify } from "@/lib/Iconify";

export default function DeviceCard({
  deviceName,
  location,
  icon = "lucide:home",
  initialSwitch = false,
}) {
  const [isOn, setIsOn] = useState(initialSwitch);

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
          <Iconify icon={icon} className="text-white" />
        </div>
        <Switch checked={isOn} onCheckedChange={() => setIsOn(!isOn)} />
      </CardContent>
    </Card>
  );
}
