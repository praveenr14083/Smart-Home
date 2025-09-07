import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/store/sidebarStore";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggleBtn from "@/theme/ThemeToggleBtn";
import { Iconify } from "@/lib/Iconify";

export function Header() {
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  return (
    <header className="h-17 border-b bg-background flex items-center justify-between px-4">
      {/* Left side */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <Iconify icon="lucide:panel-left" />
        </Button>
        <span className="font-bold text-lg">SmartHome</span>
      </div>

      {/* Right side - Profile */}
      <div className="flex items-center gap-2">
        <ThemeToggleBtn />
        <Button variant="ghost" size="icon" className="p-0 hover:bg-[none]">
          <Avatar>
            <AvatarImage
              src="https://avatar.iran.liara.run/public"
              alt="Profile"
            />
            <AvatarFallback>
              <Iconify icon="lucide:user-round" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
}
