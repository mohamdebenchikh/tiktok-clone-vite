import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon, ShareIcon } from "@heroicons/react/24/outline";
import { demoRewardAnalytics } from "@/data/demo-data";

export default function RewardsAnalyticsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("per-post");

  const handleBack = () => {
    navigate("/tiktok-studio");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Utility function to detect if text contains RTL characters (Arabic, Hebrew, etc.)
  const isRTLText = (text: string) => {
    const rtlRegex =
      /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    return rtlRegex.test(text);
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
        <h1 className="text-lg font-semibold text-gray-900">
          Rewards analytics
        </h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
            <ShareIcon className="w-5 h-5 text-gray-700" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
            <EllipsisHorizontalIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "overview"
              ? "text-[#FE2C55] border-b-2 border-[#FE2C55]"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("overview")}
        >
          Overview
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "per-post"
              ? "text-[#FE2C55] border-b-2 border-[#FE2C55]"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("per-post")}
        >
          Per post
        </button>
      </div>

      {/* Filter Controls */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex gap-2 overflow-x-auto">
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap">
            <span>Programs</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap">
            <span>Date range</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap">
            <span>Date posted</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info Notice */}
      <div className="p-4 bg-blue-50 border-b border-gray-100">
        <div className="flex items-start gap-3">
          <InformationCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-sm text-blue-700">
            Rewards analytics per post are only available for some monetization
            programs at this time.
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === "per-post" && (
          <div className="p-4 space-y-4">
            {demoRewardAnalytics.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`font-medium text-gray-900 mb-1 line-clamp-2 ${
                      isRTLText(item.title) ? "text-right" : "text-left"
                    }`}
                  >
                    {item.title}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.program}</span>
                  </div>
                  {item.status === "Disqualified" && (
                    <div className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                      Disqualified
                    </div>
                  )}
                  {item.status === "Qualified" && (
                    <div className="flex gap-4">
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {item.estRewards}
                        </div>
                        <div className="text-xs text-gray-500">
                          Est. rewards
                        </div>
                      </div>
                      {item.videoViews && (
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            {item.videoViews}
                          </div>
                          <div className="text-xs text-gray-500">
                            Video views
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "overview" && (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center text-gray-500">
              <div className="text-lg font-medium mb-2">Overview analytics</div>
              <p className="text-sm">
                Analytics overview will be displayed here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
