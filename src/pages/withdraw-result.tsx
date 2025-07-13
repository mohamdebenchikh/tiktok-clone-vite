import { ScrollArea } from "@/components/ui/scroll-area";
import WithdrawResultHeader from "@/components/withdraw-result/withdraw-result-header";
import WithdrawResultContent from "@/components/withdraw-result/withdraw-result-content";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function WithdrawResultPage() {
  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <WithdrawResultHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <WithdrawResultContent />
        </ScrollArea>
      </div>
      <BottomNavigation />
    </div>
  );
}
