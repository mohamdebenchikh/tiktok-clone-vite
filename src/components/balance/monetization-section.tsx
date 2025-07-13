import { ChevronRight } from "lucide-react";
import LiveRewardIcon from '@/assets/live_reward.png'
import CompaingsIcons from '@/assets/campaigns.png'

export default function MonetizationSection() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <strong className="text-primary font-bold">Monetization</strong>
        <button className="text-xs flex items-center text-muted-foreground">
          View more
          <ChevronRight className="ml-1 size-4" />
        </button>
      </div>
      <div className="flex gap-2">
        <div className="bg-white rounded-lg space-y-1 flex-1 shadow roudend-lg p-4">
          <img src={LiveRewardIcon} className="size-5" />
          <div className="text-primary/80   text-sm font-semibold">LIVE Rewards</div>
        </div>

        <div className="bg-white rounded-lg space-y-1 flex-1 shadow roudend-lg p-4">
          <img src={CompaingsIcons} className="size-5" />
          <div className="text-primary/80  text-sm font-semibold">Compaigns</div>
        </div>
      </div>
    </div>
  )
}
