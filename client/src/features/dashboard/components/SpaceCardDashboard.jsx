import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * @param {{
 *   name: string,
 *   devices: number,
 *   image: string,
 *   initialSwitch?: boolean,
 * }} props
 */
export default function SpaceCardDashboard({
  name = "Living Room",
  devices = 3,
  image = "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80",
  initialSwitch = false,
}) {
  const [isOn, setIsOn] = useState(initialSwitch);

  return (
    <Card className="p-0 rounded-2xl shadow-none gap-0">
      <CardContent className="p-0">
        <img
          src={image}
          alt={name}
          className="rounded-2xl w-full h-40 object-cover"
        />
      </CardContent>
      <CardFooter className="flex justify-between gap-1 p-4">
        <div>
          <h1 className="text-base font-semibold">{name}</h1>
          <p className="text-sm text-muted-foreground">{devices} devices</p>
        </div>
        {/* ✅ Tooltip works with wrapper */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Switch
                  checked={isOn}
                  onCheckedChange={(checked) => {
                    console.log(`${name} switch:`, checked);
                    setIsOn(checked);
                  }}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{isOn ? "Turn off all" : "Turn on all"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}
