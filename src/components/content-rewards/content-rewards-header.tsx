import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function ContentRewardsHeader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/balance-details");
  };

  return (
    <div className="h-14 flex items-center justify-between p-2 relative">
      <Button
        onClick={handleBack}
        size={"icon"}
        variant={"ghost"}
        className="hover:bg-gray-200 rounded-full"
      >
        <ChevronLeft className="size-6" />
      </Button>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-lg font-semibold text-primary">
          Content rewards
        </h1>
      </div>

      <div className="w-10"></div>
    </div>
  );
}
