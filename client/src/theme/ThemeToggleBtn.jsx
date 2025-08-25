import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="rounded-full w-10 h-10"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-blue-500" />
      )}
    </Button>
  );
}
