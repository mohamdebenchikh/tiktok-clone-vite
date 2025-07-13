interface RewardsAnalyticsTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function RewardsAnalyticsTabs({ activeTab, onTabChange }: RewardsAnalyticsTabsProps) {
  return (
    <div className="flex border-b border-gray-300 px-5">
      <button
        className={`bg-none border-none py-3 px-6 text-base font-semibold cursor-pointer border-b-2 transition-all duration-200 flex-1 text-center ${
          activeTab === "overview"
            ? "text-black border-b-black"
            : "text-gray-500 border-b-transparent hover:text-black"
        }`}
        onClick={() => onTabChange("overview")}
      >
        Overview
      </button>
      <button
        className={`bg-none border-none py-3 px-6 text-base font-semibold cursor-pointer border-b-2 transition-all duration-200 flex-1 text-center ${
          activeTab === "per-post"
            ? "text-black border-b-black"
            : "text-gray-500 border-b-transparent hover:text-black"
        }`}
        onClick={() => onTabChange("per-post")}
      >
        Per post
      </button>
    </div>
  );
}
