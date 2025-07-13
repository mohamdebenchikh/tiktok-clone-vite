import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import RewardsAnalyticsHeader from "@/components/rewards-analytics/rewards-analytics-header";
import RewardsAnalyticsContent from "@/components/rewards-analytics/rewards-analytics-content";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function RewardsAnalyticsPage() {
  const [activeTab, setActiveTab] = useState("per-post");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <RewardsAnalyticsHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <RewardsAnalyticsContent activeTab={activeTab} onTabChange={handleTabChange} />
        </ScrollArea>
      </div>
      <BottomNavigation />
    </div>
  );
}
