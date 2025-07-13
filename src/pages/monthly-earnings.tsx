import { ScrollArea } from "@/components/ui/scroll-area";
import MonthlyEarningsHeader from "@/components/monthly-earnings/monthly-earnings-header";
import MonthlyEarningsContent from "@/components/monthly-earnings/monthly-earnings-content";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function MonthlyEarningsPage() {
  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <MonthlyEarningsHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <MonthlyEarningsContent />
        </ScrollArea>
      </div>
      <BottomNavigation />
    </div>
  );
}
