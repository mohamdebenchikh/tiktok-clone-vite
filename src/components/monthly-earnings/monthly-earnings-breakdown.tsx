import { TrendingUp, TrendingDown } from "lucide-react";

interface EarningsItem {
  program: string;
  amount: number;
  change: string;
  trend: "up" | "down";
}

interface MonthlyEarningsBreakdownProps {
  breakdown: EarningsItem[];
  total: number;
}

export default function MonthlyEarningsBreakdown({ breakdown, total }: MonthlyEarningsBreakdownProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Earnings by Program
      </h3>

      {breakdown.map((item, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">{item.program}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-bold text-gray-900">
                  ${item.amount.toFixed(2)}
                </span>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    item.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{item.change}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-20 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-[#FE2C55] rounded-full"
                  style={{
                    width: `${(item.amount / total) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">
                {((item.amount / total) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
