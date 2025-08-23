import { Home, Monitor, Bed, Settings, X, PanelLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebarStore";

const sidebarItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Devices", icon: Monitor, href: "/devices" },
  { label: "Rooms", icon: Bed, href: "/rooms" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const { isOpen, toggle, close } = useSidebarStore();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "h-screen border-r bg-background transition-all duration-300 md:flex-col hidden md:flex",
          isOpen ? "w-64" : "w-16"
        )}
      >
        <div
          className={cn(
            "flex items-center p-4",
            isOpen ? "justify-between" : "justify-center"
          )}
        >
          {isOpen && <span className="text-xl font-bold">SmartHome</span>}
          <Button variant="ghost" size="icon" onClick={toggle}>
            {isOpen ? (
              <PanelLeft className="size-5" />
            ) : (
              <X className="size-5" />
            )}
          </Button>
        </div>

        <nav className="flex flex-col gap-2 px-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "w-full gap-2 text-base",
                isOpen ? "justify-start" : "justify-center"
              )}
              onClick={close}
            >
              <Link to={item.href}>
                <item.icon className="size-5" />
                {isOpen && <span>{item.label}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 bg-background border-r z-50 transition-transform duration-300 md:hidden w-64",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold">SmartHome</span>
          <Button variant="ghost" size="icon" onClick={toggle}>
            <X className="size-5" />
          </Button>
        </div>

        <nav className="flex flex-col gap-2 px-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="w-full gap-2 text-base justify-start"
              onClick={close}
            >
              <Link to={item.href}>
                <item.icon className="size-5" />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>
      </aside>
    </>
  );
}
