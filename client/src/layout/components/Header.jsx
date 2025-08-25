import { Button } from "@/components/ui/button";
import { PanelLeft, User2 } from "lucide-react";
import { useSidebarStore } from "@/store/sidebarStore";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggleBtn from "@/theme/ThemeToggleBtn";

export function Header({ profileImage }) {
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
          <PanelLeft className="size-5" />
        </Button>
        <span className="font-bold text-lg">SmartHome</span>
      </div>

      {/* Right side - Profile */}
      <div className="flex items-center gap-2">
        <ThemeToggleBtn />
        <Button variant="ghost" size="icon" className="p-0 hover:bg-[none]">
          <Avatar>
            {profileImage ? (
              <AvatarImage src={profileImage} alt="Profile" />
            ) : (
              <AvatarFallback>
                <User2 className="size-5" />
              </AvatarFallback> // fallback initial or icon
            )}
          </Avatar>
        </Button>
      </div>
    </header>
  );
}
