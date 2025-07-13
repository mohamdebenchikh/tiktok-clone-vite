import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, ChevronLeft } from "lucide-react";

export default function BalanceHeader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <div className="h-14 flex items-center justify-between p-2">
      <Button
        onClick={handleBack}
        size={"icon"}
        variant={"ghost"}
        className="hover:bg-gray-200 rounded-full"
      >
        <ChevronLeft className="size-6" />
      </Button>

      <Button size={"sm"} variant={"ghost"} className="hover:bg-gray-200">
        <ArrowRightLeft className="size-4 mr-0.5" />
        <span>USD</span>
      </Button>
    </div>
  );
}
