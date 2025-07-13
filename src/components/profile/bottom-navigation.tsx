import { HomeIcon, Users2Icon } from "lucide-react"
import { UserIcon } from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import TiktokCreateIcon from '@/assets/icons/tiktok-create.svg';

export default function BottomNavigation() {
  return (
    <div className="h-14 border-t flex items-center justify-between px-4 w-full bg-primary-foreground sticky bottom-0 z-10">
      <button className="flex flex-col  hover:text-primary text-muted-foreground items-center">
        <HomeIcon className="size-4" />
        <span className="text-[10px]">Home</span>
      </button>
      <button className="flex flex-col relative hover:text-primary text-muted-foreground items-center">
        <Users2Icon className="size-4" />
        <span className="text-[10px]">Friends</span>
        <div className="absolute -top-1 -right-1 w-fit px-0.5 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px]">
          10
        </div>
      </button>
      <button>
        <img src={TiktokCreateIcon} alt="" />
      </button>
      <button className="flex flex-col relative hover:text-primary text-muted-foreground items-center">
        <ChatBubbleBottomCenterTextIcon />
        <span className="text-[10px]">Inbox</span>
        <div className="absolute -top-1 -right-1 w-fit px-0.5 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px]">
          99+
        </div>
      </button>
      <button className="flex flex-col text-primary items-center">
        <UserIcon className="size-4" />
        <span className="text-[10px]">Profile</span>
      </button>
    </div>
  )
}
