import { ChevronDown } from "lucide-react"

export default function ProfileInfo() {
  return (
    <div className="relative mb-4">
      <div className="flex flex-col leading-4 text-center">
        <div className="flex items-center text-primary">
          <strong>Mohamde Ben Chikh</strong>
          <ChevronDown className="size-5" />
        </div>
        <span className="text-muted-foreground text-xs">@mohamd.ben.chikh</span>
      </div>
      <button className="absolute -right-14 top-0 bg-gray-200 hover:bg-gray-300 rounded-full py-1 px-3 text-xs border font-semibold">
        Edit
      </button>
    </div>
  )
}
