import { XIcon } from "lucide-react";

export default function LiveRewardsNotification() {
  return (
    <div className="rounded-lg p-4 bg-white shadow-sm space-y-1">
      <div className="flex justify-between">
        <p className="text-primary text-sm font-semibold line-clamp-6 ">Scable LIVE Rewards are coming</p>
        <button className="text-muted-foreground">
          <XIcon className="size-3" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground">
        Your dedication to quality content could get you a rewards precentage of up to 53%
      </p>
      <button className="text-pink-600 text-xs font-semibold">Learn more</button>
    </div>
  )
}
