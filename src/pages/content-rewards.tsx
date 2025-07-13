import { ScrollArea } from "@/components/ui/scroll-area";
import ContentRewardsHeader from "@/components/content-rewards/content-rewards-header";
import ContentRewardsContent from "@/components/content-rewards/content-rewards-content";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function ContentRewardsPage() {
  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <ContentRewardsHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <ContentRewardsContent />
        </ScrollArea>
      </div>
      <BottomNavigation />
    </div>
  );
}
