import { ArrowRight } from "lucide-react";
import GiftIcon from '@/assets/gift.png'

export default function FirstRechargePackage() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="space-y-1">
          <strong className="text-primary text-sm">First recharge package</strong>
          <p className="text-xs text-muted-foreground">Get Gifts and bonus Coins</p>
          <button className="text-sm text-pink-500 font-bold tracking-wide flex items-center gap-0.5">
            Get <ArrowRight className="size-4" />
          </button>
        </div>
        <img src={GiftIcon} className="size-20" />
      </div>
    </div>
  )
}
