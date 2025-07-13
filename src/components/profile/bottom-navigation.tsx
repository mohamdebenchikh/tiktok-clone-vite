import { useNavigate, useLocation } from "react-router";
import { HomeIcon, Users2Icon } from "lucide-react";
import { UserIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import TiktokCreateIcon from "@/assets/icons/tiktok-create.svg";
import { useNavigateWithLoading } from "@/hooks/use-navigate-with-loading";

export default function BottomNavigation() {
  const navigate = useNavigate();
  const navigateWithLoading = useNavigateWithLoading();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-14 border-t flex items-center justify-between px-4 w-full bg-primary-foreground sticky bottom-0 z-10">
      <button
        onClick={() => navigate("/")}
        className={`flex flex-col items-center transition-colors ${
          isActive("/")
            ? "text-primary"
            : "hover:text-primary text-muted-foreground"
        }`}
      >
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
      <button onClick={() => navigateWithLoading("/tiktok-studio", { message: "Loading TikTok Studio..." })}>
        <img src={TiktokCreateIcon} alt="TikTok Studio" />
      </button>
      <button className="flex flex-col relative hover:text-primary text-muted-foreground items-center">
        <ChatBubbleBottomCenterTextIcon className="size-4" />
        <span className="text-[10px]">Inbox</span>
        <div className="absolute -top-1 -right-1 w-fit px-0.5 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px]">
          99+
        </div>
      </button>
      <button
        onClick={() => navigate("/profile")}
        className={`flex flex-col items-center transition-colors ${
          isActive("/profile")
            ? "text-primary"
            : "hover:text-primary text-muted-foreground"
        }`}
      >
        <UserIcon className="size-4" />
        <span className="text-[10px]">Profile</span>
      </button>
    </div>
  );
}
