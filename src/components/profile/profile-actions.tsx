import { useNavigate } from "react-router-dom";
import { UserCog2Icon, Wallet2Icon } from "lucide-react";

export default function ProfileActions() {
  const navigate = useNavigate();

  const handleTikTokStudio = () => {
    navigate("/tiktok-studio");
  };

  const handleBalance = () => {
    navigate("/balance");
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleTikTokStudio}
        className="flex items-center rounded hover:bg-accent px-2 py-1 transition-colors"
      >
        <UserCog2Icon className="size-4 text-pink-600 mr-1" />
        <span className="font-semibold text-sm text-primary">
          TikTok studio
        </span>
      </button>
      <span className="text-muted-foreground font-extralight">|</span>
      <button
        onClick={handleBalance}
        className="flex items-center rounded hover:bg-accent px-2 py-1 transition-colors"
      >
        <Wallet2Icon className="size-4 text-pink-600 mr-1" />
        <span className="font-semibold text-sm text-primary">Balance</span>
      </button>
    </div>
  );
}
