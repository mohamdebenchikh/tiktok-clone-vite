import { ScrollArea } from "@/components/ui/scroll-area";
import IncomeVerificationHeader from "@/components/income-verification/income-verification-header";
import IncomeVerificationContent from "@/components/income-verification/income-verification-content";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function IncomeVerificationPage() {
  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <IncomeVerificationHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <IncomeVerificationContent />
        </ScrollArea>
      </div>
      <BottomNavigation />
    </div>
  );
}
