import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ThemeToggleBtn from "@/theme/ThemeToggleBtn";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/common/PageHeader";

export default function SettingsPage() {
  return (
    <>
      <section className="space-y-10">
        <PageHeader />
        {/* Profile */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 space-y-1">
            <h1 className="font-bold text-xl">Profile</h1>
            <p className="text-sm text-muted-foreground">
              Manage your personal information and account details.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Avatar className="w-24 h-24 mb-2">
              <AvatarImage
                src="https://avatar.iran.liara.run/public"
                alt="User Avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div className="space-y-2">
              <Label>Name</Label>
              <Input placeholder="Enter your full name" />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email address" />
            </div>

            <Button>Change Password</Button>
          </div>
        </div>

        <Separator />

        {/* Home Info */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 space-y-1">
            <h1 className="font-bold text-xl">Home Info</h1>
            <p className="text-sm text-muted-foreground">
              Update your home name, address, and related information.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="space-y-2">
              <Label>Home name</Label>
              <Input placeholder="e.g. Sweet Home" />
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Input placeholder="Enter your home address" />
            </div>
          </div>
        </div>

        <Separator />

        {/* Notifications */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 space-y-1">
            <h1 className="font-bold text-xl">Notifications</h1>
            <p className="text-sm text-muted-foreground">
              Choose how you want to receive alerts and updates.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span>Email Alerts</span>
              <Switch />
            </div>
            <div className="flex justify-between items-center">
              <span>Push Notifications</span>
              <Switch />
            </div>
            <div className="flex justify-between items-center">
              <span>SMS Alerts</span>
              <Switch />
            </div>
          </div>
        </div>

        <Separator />

        {/* Theme Settings */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 space-y-1">
            <h1 className="font-bold text-xl">Theme Settings</h1>
            <p className="text-sm text-muted-foreground">
              Switch between light, dark, or auto theme mode.
            </p>
          </div>
          <div className="flex-1 flex justify-between items-center gap-4">
            <div className="space-y-2">
              <h1 className="font-bold">Theme</h1>
              <p className="text-sm text-muted-foreground">
                Switch between light and dark mode
              </p>
            </div>

            <ThemeToggleBtn />
          </div>
        </div>

        <Separator />

        {/* System Info */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 space-y-1">
            <h1 className="font-bold text-xl">System Info</h1>
            <p className="text-sm text-muted-foreground">
              Check your software version and manage updates.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p>
              Software Version: <span className="font-semibold">1.0.0</span>
            </p>
            <Button variant="outline">Check for Updates</Button>
          </div>
        </div>

        <Separator />

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </section>
    </>
  );
}
