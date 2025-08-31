import React from "react";
import { Iconify } from "@/lib/Iconify";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function DeviceSummary() {
  // 📊 Device Summary Data
  const deviceSummaryData = [
    { icon: "lucide:monitor", label: "Total Devices", value: "24" },
    { icon: "lucide:sofa", label: "Living Room", value: "8" },
    { icon: "lucide:bed", label: "Bedroom", value: "6" },
    { icon: "lucide:utensils", label: "Kitchen", value: "4" },
    { icon: "lucide:tv", label: "Entertainment", value: "3" },
    { icon: "lucide:shower-head", label: "Bathroom", value: "3" },
    { icon: "lucide:tree-pine", label: "Outdoor", value: "2" },
    { icon: "lucide:car", label: "Garage", value: "1" },
  ];

  return (
    <div className="space-y-6 sticky top-0">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-500 p-2 rounded-xl">
          <Iconify icon="cbi:devicesplug" className="text-white" />
        </div>
        <h1 className="text-lg font-semibold">Device Summary</h1>
      </div>

      {/* Device Summary details */}
      <Card className="p-6 shadow-none">
        <Table>
          <TableBody>
            {deviceSummaryData.map((item, index) => (
              <TableRow key={index} className="hover:bg-[none]">
                <TableCell className="flex items-center gap-2 font-medium border-0 py-3">
                  <Iconify icon={item.icon} />
                  {item.label}
                </TableCell>
                <TableCell className="text-right font-semibold border-0 py-3">
                  {item.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
