import { Play } from "lucide-react"
import DefaultThumbnail from "../../icons/default-thumbnail";

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 p-1 pb-4">
      {Array.from({ length: 24 }, (_, index) => (
        <div key={index} className="aspect-[3/4] bg-gray-100 relative rounded-lg overflow-hidden">
          <DefaultThumbnail className="w-full h-full" />
          <div className="absolute bottom-2 left-2">
            <div className="flex items-center text-white">
              <Play className="mr-1 size-4" />
              <span className="text-xs font-semibold">234K</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
