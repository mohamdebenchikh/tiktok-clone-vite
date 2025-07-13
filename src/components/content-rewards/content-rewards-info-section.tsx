import { Info } from "lucide-react";

export default function ContentRewardsInfoSection() {
  return (
    <div className="bg-blue-50 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
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
  );
}
