import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronRight, FilterIcon } from "lucide-react";
import {
  ChatBubbleLeftRightIcon,
  GiftIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { DefaultThumbnail } from "@/icons";
import TrendingPosts from "./trending-posts";
import { demoBalance } from "@/data/demo-data";

export default function MonetizationSection() {
  const navigate = useNavigate();

  const handleBalanceClick = () => {
    navigate("/balance");
  };

  const handleRewardsClick = () => {
    navigate("/rewards-analytics");
  };

  const handleRewardsPerPostClick = () => {
    navigate("/rewards-analytics");
  };

  return (
    <div className="bg-white shadow rounded-lg p-3 space-y-3">
      <div className="flex items-center p-1 bg-gray-200 rounded-lg">
        <button className="flex-1 text-sm font-semibold p-2 bg-white rounded-lg">
          Insparation
        </button>
        <button className="flex-1 text-sm font-semibold p-2">
          Monetization
        </button>
      </div>

      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <div className="flex border-b border-gray-300 divide-x divide-gray-300 items-center">
          <div
            onClick={handleBalanceClick}
            className="flex-1 cursor-pointer px-3 py-2 space-y-1 hover:bg-gray-300 transition-colors"
          >
            <strong className="text-sm font-bold text-primary">Balance</strong>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">${demoBalance.withdrawable}</h3>
              <ChevronRight className="text-muted-foreground size-4" />
            </div>
          </div>
          <div
            onClick={handleRewardsClick}
            className="flex-1 cursor-pointer px-3 py-2 space-y-1 hover:bg-gray-300 transition-colors"
          >
            <strong className="text-sm font-bold text-primary">
              Estimated rewards
            </strong>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">${demoBalance.thisMonth}</h3>
              <ChevronRight className="text-muted-foreground size-4" />
            </div>
          </div>
        </div>
        <div
          onClick={handleRewardsPerPostClick}
          className="px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-300 transition-colors"
        >
          <strong className="text-sm font-semibold">Rewards per post</strong>
          <div className="flex items-center gap-1">
            <DefaultThumbnail className="size-8" />
            <DefaultThumbnail className="size-8" />
            <DefaultThumbnail className="size-8" />
            <ChevronRight className="size-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <strong className="font-bold text-primary">
          Monetization Programs
        </strong>
        <button className="text-sm text-muted-foreground flex items-center gap-1">
          View all
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="flex items-baseline justify-between">
        <button className="px-4 w-20 flex flex-col items-center justify-center space-y-1 py-2 group rounded-lg hover:bg-gray-200 cursor-pointer">
          <span className="p-2 rounded-lg w-fit bg-gray-200 flex items-center justify-center">
            <ChatBubbleLeftRightIcon className="size-6" />
          </span>
          <span className="text-[10px] group-hover:text-primary font-semibold text-primary/80">
            Services+
          </span>
        </button>

        <button className="px-4 w-20 flex flex-col items-center justify-center space-y-1 py-2 group rounded-lg hover:bg-gray-200 cursor-pointer">
          <span className="p-2 rounded-lg w-fit bg-gray-200 flex items-center justify-center">
            <PlusCircleIcon className="size-6" />
          </span>
          <span className="text-[10px] group-hover:text-primary font-semibold text-primary/80">
            Creators rewards
          </span>
        </button>
        <button className="px-4 w-20 flex flex-col items-center justify-center space-y-1 py-2 group rounded-lg hover:bg-gray-200 cursor-pointer">
          <span className="p-2 rounded-lg w-fit bg-gray-200 flex items-center justify-center">
            <GiftIcon className="size-6" />
          </span>
          <span className="text-[10px] group-hover:text-primary font-semibold text-primary/80">
            LIVE Rewards
          </span>
        </button>
        <button className="px-4 w-20 flex flex-col items-center justify-center space-y-1 py-2 group rounded-lg hover:bg-gray-200 cursor-pointer">
          <span className="p-2 rounded-lg w-fit bg-gray-200 flex items-center justify-center">
            <ShoppingBagIcon className="size-6" />
          </span>
          <span className="text-[10px] group-hover:text-primary font-semibold text-primary/80">
            Creator Marketplace
          </span>
        </button>
      </div>
      <div className="border border-gray-200"></div>
      <div>
        <strong className="text-primary font-semibold">
          Trending in Monetization
        </strong>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Button size={"sm"} className="rounded-full">
            Posts
          </Button>
          <Button
            size={"sm"}
            className="rounded-full bg-gray-200 hover:bg-gray-300"
            variant={"secondary"}
          >
            Creators
          </Button>
          <Button
            size={"sm"}
            className="rounded-full bg-gray-200 hover:bg-gray-300"
            variant={"secondary"}
          >
            Articles
          </Button>
        </div>
        <Button className="rounded-full" variant={"ghost"} size={"sm"}>
          <FilterIcon className="size-4" />
        </Button>
      </div>

      <TrendingPosts />
    </div>
  );
}
