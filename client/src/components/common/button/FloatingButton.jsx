import { Iconify } from "@/lib/Iconify";
import { Button } from "@/components/ui/button";

export function FloatingButton() {
  return (
    <Button
      size="icon"
      className="fixed bottom-9 right-9 h-14 w-14 rounded-full 
                 shadow-[0_0px_15px_0px_rgba(59,130,246,0.5)] 
                 bg-blue-500 hover:bg-blue-600 text-white md:hidden"
    >
      <Iconify icon="lucide:plus" />
    </Button>
  );
}
