import RewardsAnalyticsTabs from "./rewards-analytics-tabs";
import RewardsAnalyticsFilters from "./rewards-analytics-filters";
import RewardsAnalyticsInfoNotice from "./rewards-analytics-info-notice";
import RewardsAnalyticsList from "./rewards-analytics-list";
import RewardsAnalyticsOverview from "./rewards-analytics-overview";

interface RewardsAnalyticsContentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function RewardsAnalyticsContent({ activeTab, onTabChange }: RewardsAnalyticsContentProps) {
  return (
    <div className="flex flex-col w-full">
      <RewardsAnalyticsTabs activeTab={activeTab} onTabChange={onTabChange} />
      <RewardsAnalyticsFilters />
      <RewardsAnalyticsInfoNotice />

      {activeTab === "per-post" && <RewardsAnalyticsList />}
      {activeTab === "overview" && <RewardsAnalyticsOverview />}

      <div className="h-10"></div>
    </div>
  );
}
