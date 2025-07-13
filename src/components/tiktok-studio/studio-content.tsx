import StudioTabs from "./studio-tabs";
import AnalyticsSection from "./analytics-section";
import StudioPromotion from "./studio-promotion";
import StudioTools from "./studio-tools";
import MonetizationSection from "./monetization-section";

export default function StudioContent() {
  return (
    <div className="flex flex-col w-full px-2 py-4 space-y-3">
      <StudioTabs />
      <AnalyticsSection />
      <StudioPromotion />
      <StudioTools />
      <MonetizationSection />
    </div>
  )
}
