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
import { useRouterState } from "@tanstack/react-router";

export default function DeviceCard({
  deviceName,
  location,
  icon = "lucide:home",
  initialSwitch = false,
}) {
  const [isOn, setIsOn] = useState(initialSwitch);
  const { location: routerLocation } = useRouterState(); // ✅ get current route
  const isDevicesRoute = routerLocation.pathname.startsWith("/devices");

  return (
    <Card
      onClick={() => setIsOn(!isOn)}
      className={`gap-4 shadow-none cursor-pointer ${
        isOn && "border-blue-500/50 md:border-border"
      }`}
    >
      <CardHeader className="flex justify-between">
        <div className="flex flex-col gap-3">
          <CardTitle>{deviceName}</CardTitle>
          <CardDescription>{location}</CardDescription>
        </div>
        {isDevicesRoute && (
          <Iconify
            icon="iconamoon:menu-kebab-vertical-bold"
            className="text-muted-foreground"
            onClick={(e) => {
              e.stopPropagation(); // prevent Card click
              alert(`⚙️ Settings for ${deviceName}`);
            }}
          />
        )}
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
