import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { AirVentIcon, ThermometerSun } from "lucide-react";

export default function TemperatureCard({
  temperature,
  unit = "°C",
  location,
  initialSwitch = false,
}) {
  const [isOn, setIsOn] = useState(initialSwitch);

  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle className="text-muted-foreground font-semibold flex flex-col gap-3">
          <ThermometerSun />
          <h1>{location}</h1>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex gap-2 items-end m-0">
        <h1 className="text-4xl font-semibold">{temperature}</h1>
        <p className="text-xl text-muted-foreground">{unit}</p>
      </CardContent>

      <CardFooter className="text-muted-foreground flex items-center justify-between gap-2">
        <AirVentIcon className={isOn ? "text-blue-500" : "text-gray-400"} />
        <Switch checked={isOn} onCheckedChange={() => setIsOn(!isOn)} />
      </CardFooter>
    </Card>
  );
}
