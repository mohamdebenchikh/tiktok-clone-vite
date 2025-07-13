import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronDownIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import { demoBalance } from "@/data/demo-data";

export default function MonthlyEarningsPage() {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("December 2024");

  const handleBack = () => {
    navigate("/balance-details");
  };

  // Demo monthly earnings data
  const monthlyData = {
    "December 2024": {
      total: 234.56,
      breakdown: [
        {
          program: "Creator Fund",
          amount: 150.0,
          change: "+12.5%",
          trend: "up",
        },
        { program: "Live Gifts", amount: 45.5, change: "+8.2%", trend: "up" },
        {
          program: "Video Gifts",
          amount: 25.75,
          change: "-3.1%",
          trend: "down",
        },
        {
          program: "Brand Partnerships",
          amount: 13.31,
          change: "+15.7%",
          trend: "up",
        },
      ],
      stats: {
        totalViews: "2.1M",
        avgViewsPerVideo: "125K",
        engagementRate: "4.8%",
        topPerformingDay: "Dec 15",
      },
    },
  };

  const currentData = monthlyData[selectedMonth];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">
          Monthly earnings
        </h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Month Selector */}
        <div className="relative">
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-900">{selectedMonth}</span>
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Total Earnings */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
          <div className="text-center">
            <h2 className="text-sm font-medium text-gray-600 mb-2">
              Total Earnings
            </h2>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              ${currentData.total.toFixed(2)}
            </div>
            <div className="flex items-center justify-center gap-1 text-sm text-green-600">
              <ArrowTrendingUpIcon className="w-4 h-4" />
              <span>+18.5% from last month</span>
            </div>
          </div>
        </div>

        {/* Earnings Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Earnings by Program
          </h3>

          {currentData.breakdown.map((item, index) => (
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
                        <ArrowTrendingUpIcon className="w-4 h-4" />
                      ) : (
                        <ArrowTrendingDownIcon className="w-4 h-4" />
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
                        width: `${(item.amount / currentData.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {((item.amount / currentData.total) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Performance Stats
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {currentData.stats.totalViews}
              </div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {currentData.stats.avgViewsPerVideo}
              </div>
              <div className="text-sm text-gray-600">Avg Views/Video</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {currentData.stats.engagementRate}
              </div>
              <div className="text-sm text-gray-600">Engagement Rate</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {currentData.stats.topPerformingDay}
              </div>
              <div className="text-sm text-gray-600">Top Day</div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            💡 Tips to increase earnings
          </h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Post consistently during peak hours (7-9 PM)</li>
            <li>• Use trending sounds and hashtags</li>
            <li>• Engage with your audience in comments</li>
            <li>• Create content that encourages shares</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate("/rewards-analytics")}
            className="w-full bg-[#FE2C55] text-white py-3 rounded-lg font-medium hover:bg-[#e91e4c] transition-colors"
          >
            View detailed analytics
          </button>
          <button
            onClick={() => navigate("/withdraw-money")}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Withdraw earnings
          </button>
        </div>
      </div>
    </div>
  );
}
