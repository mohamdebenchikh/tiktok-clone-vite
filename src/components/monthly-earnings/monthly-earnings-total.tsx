import { TrendingUp } from "lucide-react";

interface MonthlyEarningsTotalProps {
  total: number;
}

export default function MonthlyEarningsTotal({ total }: MonthlyEarningsTotalProps) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
      <div className="text-center">
        <h2 className="text-sm font-medium text-gray-600 mb-2">
          Total Earnings
        </h2>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          ${total.toFixed(2)}
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-green-600">
          <TrendingUp className="w-4 h-4" />
          <span>+18.5% from last month</span>
        </div>
      </div>
    </div>
  );
}
