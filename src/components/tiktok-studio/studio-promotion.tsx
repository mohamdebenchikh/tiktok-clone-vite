import { XIcon } from "lucide-react";
import TikTokStudioIcon from '@/assets/tiktok-studio.png';

export default function StudioPromotion() {
  return (
    <div className="bg-white shadow rounded-lg p-3">
      <div className="flex gap-4">
        <div className="size-20 shadow rounded-xl overflow-hidden">
          <img src={TikTokStudioIcon} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-primary font-semibold">Get TikTok Studio</h4>
            <button className="text-muted-foreground">
              <XIcon className="size-3" />
            </button>
          </div>
          <p className="text-muted-foreground text-xs">Scheduled posts are finally here. Only on TikTok Studio</p>
          <button className="text-sm font-bold text-pink-500">Download</button>
        </div>
      </div>
    </div>
  )
}
