import { demoRewardAnalytics } from "@/data/demo-data";
import { DefaultThumbnail } from "@/icons";

// Utility function to detect if text contains RTL characters (Arabic, Hebrew, etc.)
const isRTLText = (text: string) => {
  const rtlRegex =
    /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return rtlRegex.test(text);
};

export default function RewardsAnalyticsList() {
  return (
    <div className="px-5 pb-5 bg-white">
      <div className="flex flex-col gap-0">
        {demoRewardAnalytics.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 py-4 border-b border-gray-100 w-full last:border-b-0"
          >
            <div className="w-20 h-auto min-h-full self-stretch rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex">
              <DefaultThumbnail className="w-full h-full object-cover flex-1" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <div
                className={`text-sm text-black leading-relaxed font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-full ${
                  isRTLText(item.title)
                    ? "text-right"
                    : "text-left"
                }`}
                style={{
                  unicodeBidi: 'plaintext',
                  direction: 'auto'
                }}
                data-direction={isRTLText(item.title) ? "rtl" : "ltr"}
              >
                {item.title}
              </div>
              <div className="flex mb-6 gap-1">
                <span className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.date}
                </span>
                <span className="bg-gray-200 font-semibold text-gray-600 rounded px-1 text-xs">
                  {item.program}
                </span>
              </div>
              {item.status === "Disqualified" && (
                <div className="text-red-500 text-sm font-medium">
                  Disqualified
                </div>
              )}
              {item.status === "Qualified" && (
                <div className="flex gap-6 flex-wrap">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="text-base font-semibold text-black whitespace-nowrap">
                      <span className="text-sm">{item.estRewards.charAt(0)}</span>
                      {item.estRewards.slice(1)}
                    </div>
                    <div className="text-xs text-gray-500 whitespace-nowrap">
                      Est. rewards
                    </div>
                  </div>
                  {item.videoViews && (
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="text-base font-semibold text-black whitespace-nowrap">
                        {item.videoViews}
                      </div>
                      <div className="text-xs text-gray-500 whitespace-nowrap">
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
    </div>
  );
}
