import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebarStore";
import { Iconify } from "@/lib/Iconify";

const sidebarItems = [
  { label: "Dashboard", icon: "lucide:layout-dashboard", href: "/" },
  { label: "Devices", icon: "lucide:monitor", href: "/devices" },
  { label: "Indoor", icon: "lucide:home", href: "/indoor" },
  { label: "Outdoor", icon: "lucide:tree-palm", href: "/outdoor" },
  { label: "Settings", icon: "lucide:settings", href: "/settings" },
];

export function Sidebar() {
  const { isOpen, toggle, close } = useSidebarStore();

  // fake logout handler (replace with your logic)
  const handleLogout = () => {
    console.log("User logged out");
    // Example: clear auth store, redirect to login, etc.
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "h-screen border-r bg-background transition-all duration-300 md:flex-col hidden md:flex",
          isOpen ? "w-56" : "w-16"
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
              <Iconify icon="lucide:x" />
            ) : (
              <Iconify icon="lucide:panel-left" />
            )}
          </Button>
        </div>

        <nav className="flex flex-col gap-2 px-2 flex-1">
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
                <Iconify icon={item.icon} />
                {isOpen && <span>{item.label}</span>}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Logout Button (Desktop) */}
        <div className="p-2">
          <Button
            variant="ghost"
            className={cn(
              "w-full gap-2 text-base text-white",
              isOpen ? "justify-start" : "justify-center"
            )}
            onClick={handleLogout}
          >
            <Iconify icon="lucide:log-out" />
            {isOpen && <span>Logout</span>}
          </Button>
        </div>
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
            <Iconify icon="lucide:x" />
          </Button>
        </div>

        <nav className="flex flex-col gap-2 px-2 flex-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="w-full gap-2 text-base justify-start"
              onClick={close}
            >
              <Link to={item.href}>
                <Iconify icon={item.icon} />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}

          {/* Logout Button (Mobile) */}
          <div>
            <Button
              variant="ghost"
              className="w-full gap-2 text-base justify-start"
              onClick={handleLogout}
            >
              <Iconify icon="lucide:log-out" />
              <span>Logout</span>
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}
