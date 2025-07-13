import ContentRewardsOverview from "./content-rewards-overview";
import ContentRewardsEarningsList from "./content-rewards-earnings-list";
import ContentRewardsInfoSection from "./content-rewards-info-section";
import ContentRewardsActions from "./content-rewards-actions";

export default function ContentRewardsContent() {
  return (
    <div className="flex flex-col w-full space-y-6 p-4">
      <ContentRewardsOverview />
      <ContentRewardsEarningsList />
      <ContentRewardsInfoSection />
      <ContentRewardsActions />
      <div className="h-10"></div>
    </div>
  );
}
