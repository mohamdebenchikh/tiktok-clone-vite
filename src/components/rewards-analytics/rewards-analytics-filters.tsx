export default function RewardsAnalyticsFilters() {
  return (
    <div className="flex gap-3 py-4 px-5">
      <div className="filter-dropdown">
        <button className="flex items-center justify-between py-2 px-3 bg-gray-200 border-none rounded-lg text-sm font-semibold text-black cursor-pointer min-w-[120px] transition-colors duration-200 hover:bg-gray-300">
          <span>Programs</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="filter-dropdown">
        <button className="flex items-center justify-between py-2 px-3 bg-gray-200 border-none rounded-lg text-sm font-semibold text-black cursor-pointer min-w-[120px] transition-colors duration-200 hover:bg-gray-300">
          <span>Date range</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="filter-dropdown">
        <button className="flex items-center justify-between py-2 px-3 bg-gray-200 border-none rounded-lg text-sm font-semibold text-black cursor-pointer min-w-[120px] transition-colors duration-200 hover:bg-gray-300">
          <span>Date posted</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
