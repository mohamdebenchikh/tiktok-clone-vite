import { demoVideos } from "@/data/demo-data";
import YellowDiamond from "@/assets/yellow_diamond.png";

export default function ContentRewardsEarningsList() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Recent Earnings
      </h3>

      {demoVideos.map((video) => (
        <div key={video.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 line-clamp-2">
                {video.title}
              </h4>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                <span>{video.views.toLocaleString()} views</span>
                <span>{video.likes.toLocaleString()} likes</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={YellowDiamond}
                  className="w-4 h-4"
                  alt="Diamond"
                />
                <span className="text-sm font-medium text-gray-900">
                  {Math.floor(video.views / 1000)} diamonds
                </span>
                <span className="text-xs text-gray-500">
                  (${(Math.floor(video.views / 1000) / 100).toFixed(2)})
                </span>
              </div>
            </div>
          </div>

          {video.status === "Qualified" && (
            <div className="mt-3 text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">
              Eligible for rewards
            </div>
          )}
          {video.status === "Disqualified" && (
            <div className="mt-3 text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block">
              Not eligible - Policy violation
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
