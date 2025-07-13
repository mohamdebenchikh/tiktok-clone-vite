import { ScrollArea } from "@/components/ui/scroll-area";
import IncomePlusHeader from "@/components/income-plus/income-plus-header";
import IncomePlusContent from "@/components/income-plus/income-plus-content";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function IncomePlusPage() {
  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <IncomePlusHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <IncomePlusContent />
        </ScrollArea>
      </div>
      <BottomNavigation />
    </div>
  );
}
