interface PerformanceStats {
  totalViews: string;
  avgViewsPerVideo: string;
  engagementRate: string;
  topPerformingDay: string;
}

interface MonthlyEarningsStatsProps {
  stats: PerformanceStats;
}

export default function MonthlyEarningsStats({ stats }: MonthlyEarningsStatsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Performance Stats
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {stats.totalViews}
          </div>
          <div className="text-sm text-gray-600">Total Views</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {stats.avgViewsPerVideo}
          </div>
          <div className="text-sm text-gray-600">Avg Views/Video</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {stats.engagementRate}
          </div>
          <div className="text-sm text-gray-600">Engagement Rate</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {stats.topPerformingDay}
          </div>
          <div className="text-sm text-gray-600">Top Day</div>
        </div>
      </div>
    </div>
  );
}
