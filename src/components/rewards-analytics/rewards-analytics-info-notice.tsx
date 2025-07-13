export default function RewardsAnalyticsInfoNotice() {
  return (
    <div className="flex items-start gap-1.5 px-5 py-2.5 pb-4">
      <div className="info-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-500">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-xs text-gray-500">
        Rewards analytics per post are only available for some monetization programs at this time.
      </span>
    </div>
  );
}
