import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { demoVideos } from "@/data/demo-data";
import YellowDiamond from "@/assets/yellow_diamond.png";

export default function ContentRewardsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/balance-details");
  };

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
        <h1 className="text-lg font-semibold text-gray-900">Content rewards</h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Overview Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-xl font-bold text-gray-900">Total Diamonds</h2>
            <InformationCircleIcon className="w-5 h-5 text-gray-500" />
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

        {/* Earnings Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Earnings
          </h3>

          {demoVideos.map((video, index) => (
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

        {/* Info Section */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <InformationCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">How it works</h4>
              <p className="text-sm text-blue-700">
                Earn diamonds based on your content performance. Eligible videos
                receive diamonds based on authentic views, engagement, and
                compliance with community guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-[#FE2C55] text-white py-3 rounded-lg font-medium hover:bg-[#e91e4c] transition-colors">
            Cash out diamonds
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Learn more about content rewards
          </button>
        </div>
      </div>
    </div>
  );
}
