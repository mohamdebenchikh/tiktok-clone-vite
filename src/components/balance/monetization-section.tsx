import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import LiveRewardIcon from "@/assets/live_reward.png";
import CompaingsIcons from "@/assets/campaigns.png";

export default function MonetizationSection() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/tiktok-studio");
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <strong className="text-primary font-bold">Monetization</strong>
        <button
          onClick={handleViewMore}
          className="text-xs flex items-center text-muted-foreground hover:text-gray-600 transition-colors"
        >
          View more
          <ChevronRight className="ml-1 size-4" />
        </button>
      </div>
      <div className="flex gap-2">
        <div className="bg-white rounded-lg space-y-1 flex-1 shadow rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow">
          <img src={LiveRewardIcon} className="size-5" />
          <div className="text-primary/80 text-sm font-semibold">
            LIVE Rewards
          </div>
        </div>

        <div className="bg-white rounded-lg space-y-1 flex-1 shadow rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow">
          <img src={CompaingsIcons} className="size-5" />
          <div className="text-primary/80 text-sm font-semibold">Campaigns</div>
        </div>
      </div>
    </div>
  );
}
