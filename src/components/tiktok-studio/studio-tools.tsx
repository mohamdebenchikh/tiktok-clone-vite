import { BookIcon, ShieldPlus, UserSearchIcon } from "lucide-react";
import { FireIcon } from "@heroicons/react/24/solid";

export default function StudioTools() {
  return (
    <div className="bg-white shadow rounded-lg p-3 flex gap-2 items-center justify-between">
      <button className="flex flex-col p-2 space-y-1 rounded-lg hover:bg-gray-200 items-center justify-center">
        <UserSearchIcon className="size-7" />
        <span className="text-[10px]">Account check</span>
      </button>
      <button className="flex flex-col p-2 space-y-1 rounded-lg hover:bg-gray-200 items-center justify-center">
        <BookIcon className="size-7" />
        <span className="text-[10px]">Creator Academy</span>
      </button>
      <button className="flex flex-col p-2 space-y-1 rounded-lg hover:bg-gray-200 items-center justify-center">
        <FireIcon className="size-7" />
        <span className="text-[10px]">Promote</span>
      </button>
      <button className="flex flex-col p-2 space-y-1 rounded-lg hover:bg-gray-200 items-center justify-center">
        <ShieldPlus className="size-7" />
        <span className="text-[10px]">Benefits</span>
      </button>
    </div>
  )
}
