import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Iconify } from "@/lib/Iconify";

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
        <Iconify icon="lucide:sun" />
      ) : (
        <Iconify icon="lucide:moon" />
      )}
    </Button>
  );
}
