import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, InfoIcon } from "lucide-react";
import YellowDiamond from "@/assets/yellow_diamond.png";
import YellowDollar from "@/assets/yellow_dollar.png";
import { demoBalance } from "@/data/demo-data";
import BottomNavigation from "@/components/profile/bottom-navigation";

export default function BalanceDetailsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/balance");
  };

  const handleIncomeplus = () => {
    navigate("/income-verification");
  };

  const handleExploreMonetization = () => {
    navigate("/tiktok-studio");
  };

  const handleContentRewards = () => {
    navigate("/content-rewards");
  };

  const handleMonthlyEarnings = () => {
    navigate("/monthly-earnings");
  };

  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <div className="h-[50vh]  bg-black/95 relative">
        <div className="h-14 relative flex items-center justify-between p-2">
          <button
            onClick={handleBack}
            className="rounded-full text-white p-2 hover:bg-accent/10 cursor-pointer transition-colors"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-white text-lg font-semibold tracking-wide">
              Balance
            </h2>
          </div>
        </div>

        <div className="space-y-2 h-[140px] flex items-center justify-center flex-col w-full">
          <div className="text-gray-300 font-light flex items-center gap-2">
            <strong className="tracking-wide">Estimated amount </strong>
            <InfoIcon className="size-4" />
          </div>
          <div className="flex items-end text-white">
            <span className="font-semibold">USD</span>
            <span className="text-4xl font-bold">
              {demoBalance.withdrawable}
            </span>
          </div>
        </div>
      </div>

      <div className="p-2 relative -mt-32 space-y-3 z-10">
        <div className="bg-white shadow-sm rounded-lg flex flex-col p-1 space-y-1">
                              <button
            onClick={handleContentRewards}
            className="flex items-center hover:bg-accent rounded-lg justify-between py-4 px-2 w-full transition-colors"
          >
            <div className="leading-5">
              <h4 className="text-primary font-semibold">Content rewards</h4>
              <div className="flex text-sm items-center gap-2 text-muted-foreground">
                Accumulated Diamonds:{" "}
                <span className="flex items-center">
                  <img src={YellowDiamond} className="size-4" /> 0
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold">USD 0.00</span>
              <ChevronRight className="size-5" />
            </div>
          </div>
          <div className="flex items-center hover:bg-accent rounded-lg justify-between py-4 px-2">
            <div className="leading-5">
              <h4 className="text-primary font-semibold">Monthly earnings</h4>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold">USD 0.00</span>
              <ChevronRight className="size-5" />
            </div>
          </div>

          <button
            onClick={handleIncomeplus}
            className="flex items-center hover:bg-accent rounded-lg justify-between py-4 px-2 w-full transition-colors"
          >
            <div className="flex items-center gap-1">
              <h4 className="text-primary font-semibold">Income+</h4>
              <span className="rounded px-0.5 bg-red-500/10 text-red-500 text-xs">
                To be retired
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex flex-col">
                <span className="text-sm">USD {demoBalance.withdrawable}</span>
                <span className="text-xs text-muted-foreground">
                  USD {demoBalance.withdrawable}
                </span>
              </div>
              <ChevronRight className="size-5" />
            </div>
          </button>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <h4 className="font-semibold text-sm text-primary">
              Earn more rewards
            </h4>
            <p className="text-muted-foreground text-xs">
              Check out the Monetization Center for exciting opportunities and
              programs.
            </p>
            <button
              onClick={handleExploreMonetization}
              className="text-xs font-semibold text-pink-600 flex items-center gap-1 hover:text-pink-700 transition-colors"
            >
              Explore
              <ChevronRight className="size-4" />
            </button>
          </div>
          <img src={YellowDollar} className="h-20" />
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}