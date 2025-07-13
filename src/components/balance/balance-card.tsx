import { ChevronRight } from "lucide-react";
import BalanceBanner from '@/assets/balance_banner.png'
import CoinIcon from '@/assets/coin.png'

export default function BalanceCard() {
  return (
    <div className="h-[180px] flex flex-col divide-y divide-gray-800  rounded-xl p-4 bg-cover bg-center" style={{ backgroundImage: `url(${BalanceBanner})` }}>
      <div className="space-y-1 flex-2">
        <strong className="text-xs tracking-wide text-gray-500 font-bold">Estimated balance</strong>
        <div className="flex items-center justify-between">
          <div className="flex items-end text-white">
            <span className="mr-0.5">USD</span>
            <span className="text-2xl font-bold">244.87</span>
          </div>
          <button className="flex text-gray-500 cursor-pointer text-sm items-center">
            View
            <ChevronRight className="size-4 mt-0.5 ml-1" />
          </button>
        </div>
      </div>

      <div className="space-y-1 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <div className="text-xs font-semibold tracking-wide text-gray-500">Coins</div>
            <div className="flex items-end gap-1">
              <img src={CoinIcon} className="size-6" />
              <span className="text-xl text-white font-bold">76</span>
            </div>
          </div>
          <button className="flex text-gray-400 cursor-pointer text-sm items-center">
            Get coins
            <ChevronRight className="size-4 mt-0.5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
