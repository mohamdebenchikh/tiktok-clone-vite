import { PlusIcon } from "lucide-react"
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function ProfileAvatar() {
  return (
    <div className="relative size-20 mb-4">
      <Avatar className="size-20 relative">
        <AvatarFallback className="text-3xl  bg-green-800 text-white ">M</AvatarFallback>
      </Avatar>
      <button className="absolute right-1 bottom-1 size-6 text-white rounded-full flex items-center justify-center bg-sky-400 border-3 cursor-pointer border-white">
        <PlusIcon className="size-4" />
      </button>
    </div>
  )
}
