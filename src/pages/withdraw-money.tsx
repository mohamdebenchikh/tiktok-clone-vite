import { ScrollArea } from "@/components/ui/scroll-area";
import WithdrawMoneyHeader from "@/components/withdraw-money/withdraw-money-header";
import WithdrawMoneyContent from "@/components/withdraw-money/withdraw-money-content";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function WithdrawMoneyPage() {
  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <WithdrawMoneyHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <WithdrawMoneyContent />
        </ScrollArea>
      </div>
      <BottomNavigation />
    </div>
  );
}
