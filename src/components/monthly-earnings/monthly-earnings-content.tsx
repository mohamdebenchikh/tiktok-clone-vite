import { useState } from "react";
import MonthlyEarningsMonthSelector from "./monthly-earnings-month-selector";
import MonthlyEarningsTotal from "./monthly-earnings-total";
import MonthlyEarningsBreakdown from "./monthly-earnings-breakdown";
import MonthlyEarningsStats from "./monthly-earnings-stats";
import MonthlyEarningsTips from "./monthly-earnings-tips";
import MonthlyEarningsActions from "./monthly-earnings-actions";

export default function MonthlyEarningsContent() {
  const [selectedMonth] = useState("December 2024");

  // Demo monthly earnings data
  const monthlyData = {
    "December 2024": {
      total: 234.56,
      breakdown: [
        {
          program: "Creator Fund",
          amount: 150.0,
          change: "+12.5%",
          trend: "up" as const,
        },
        { program: "Live Gifts", amount: 45.5, change: "+8.2%", trend: "up" as const },
        {
          program: "Video Gifts",
          amount: 25.75,
          change: "-3.1%",
          trend: "down" as const,
        },
        {
          program: "Brand Partnerships",
          amount: 13.31,
          change: "+15.7%",
          trend: "up" as const,
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

  const currentData = monthlyData[selectedMonth as keyof typeof monthlyData];

  return (
    <div className="flex flex-col w-full space-y-6 p-4">
      <MonthlyEarningsMonthSelector selectedMonth={selectedMonth} />
      <MonthlyEarningsTotal total={currentData.total} />
      <MonthlyEarningsBreakdown breakdown={currentData.breakdown} total={currentData.total} />
      <MonthlyEarningsStats stats={currentData.stats} />
      <MonthlyEarningsTips />
      <MonthlyEarningsActions />
      <div className="h-10"></div>
    </div>
  );
}
