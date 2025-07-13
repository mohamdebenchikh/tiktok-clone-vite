import { useNavigate } from "react-router-dom";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ChevronRight,
  HeartIcon,
  PlayIcon,
} from "lucide-react";

export default function AnalyticsSection() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/rewards-analytics");
  };

  return (
    <div className="bg-white shadow rounded-lg p-3 space-y-3.5">
      <div className="flex items-center justify-between">
        <h4 className="font-bold">Analytics</h4>
        <button
          onClick={handleViewAll}
          className="text-xs font-semibold text-muted-foreground flex items-center hover:text-gray-600 transition-colors"
        >
          View all
          <ChevronRight className="size-4 ml-0.5" />
        </button>
      </div>
      <div className="flex items-center border-b pb-3 divide-x divide-gray-200 justify-between">
        <div className="space-y-1 flex-1 px-4 flex flex-col justify-center items-cenetr">
          <h5 className="text-xs font-semibold">Post views</h5>
          <div className="text-lg font-bold">7</div>
          <div className="text-xs gap-2 flex items-center text-muted-foreground">
            <ArrowUpCircle className="size-4" />
            78% - 7d
          </div>
        </div>

        <div className="space-y-1 flex-1 px-4 flex flex-col justify-center items-cenetr">
          <h5 className="text-xs font-semibold">Net followers</h5>
          <div className="text-lg font-bold">23</div>
          <div className="text-xs gap-2 flex items-center text-muted-foreground">
            <ArrowUpCircle className="size-4 text-sky-500" />
            45% - 4d
          </div>
        </div>

        <div className="space-y-1 flex-1 px-4 flex flex-col justify-center items-cenetr">
          <h5 className="text-xs font-semibold">Likes</h5>
          <div className="text-lg font-bold">67</div>
          <div className="text-xs gap-2 flex items-center text-muted-foreground">
            <ArrowDownCircle className="size-4" />
            100% - 7d
          </div>
        </div>
      </div>

      <div className="flex items-center  cursor-pointer justify-between">
        <span className="text-sm text-primary font-semibold">
          Your latest post
        </span>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <PlayIcon className="size-4" /> 0
          </span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <HeartIcon className="size-4" /> 0
          </span>
          <ChevronRight className="size-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
