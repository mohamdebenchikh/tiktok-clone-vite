import { Info } from "lucide-react";
import YellowDiamond from "@/assets/yellow_diamond.png";

export default function ContentRewardsOverview() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-xl font-bold text-gray-900">Total Diamonds</h2>
        <Info className="w-5 h-5 text-gray-500" />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <img src={YellowDiamond} className="w-8 h-8" alt="Diamond" />
        <span className="text-3xl font-bold text-gray-900">1,247</span>
      </div>
      <div className="text-sm text-gray-600">
        <div className="flex justify-between mb-1">
          <span>Diamonds earned this month:</span>
          <span className="font-medium">156</span>
        </div>
        <div className="flex justify-between">
          <span>Conversion rate:</span>
          <span className="font-medium">100 diamonds = $1.00</span>
        </div>
      </div>
    </div>
  );
}
