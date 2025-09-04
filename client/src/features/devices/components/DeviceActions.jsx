import React from "react";
import { Iconify } from "@/lib/Iconify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DeviceActions() {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
      <div className="flex flex-col md:flex-row md:items-center lg:col-span-2 gap-4">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row flex-1 gap-6 items-center lg:justify-center">
          {/* Search Input */}
          <div className="relative w-full md:w-3/4">
            <Iconify
              icon="lucide:search"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4"
            />
            <Input placeholder="Search devices..." className="pl-8" />
          </div>

          {/* Dropdown Filter */}
          <Select>
            <SelectTrigger className="w-full md:w-1/4">
              <div className="flex gap-2 items-center">
                <Iconify
                  icon="lucide:filter"
                  className="h-4 w-4 text-gray-500"
                />
                <SelectValue placeholder="Filter..." />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="living-room">Living Room</SelectItem>
              <SelectItem value="bedroom">Bedroom</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Create New Button */}
      <div className="hidden md:flex justify-end gap-2 lg:col-span-1">
        <Button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white">
          <Iconify icon="lucide:power" className="h-4 w-4" />
          Turn all on
        </Button>

        <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white">
          <Iconify icon="lucide:plus" className="h-4 w-4" />
          Create New
        </Button>
      </div>
    </header>
  );
}
