import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronLeft, SettingsIcon } from "lucide-react";

export default function StudioHeader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <div className="relative flex items-center justify-between p-2">
      <Button
        onClick={handleBack}
        variant={"ghost"}
        className="hover:bg-gray-200 rounded-full"
        size={"icon"}
      >
        <ChevronLeft className="size-5" />
      </Button>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-primary text-lg font-semibold tracking-wide">
          TikTok Studio{" "}
        </h2>
      </div>

      <Button
        variant={"ghost"}
        className="hover:bg-gray-200 rounded-full"
        size={"icon"}
      >
        <SettingsIcon className="size-5" />
      </Button>
    </div>
  );
}
