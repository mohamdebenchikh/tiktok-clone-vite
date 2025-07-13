import { useState } from "react";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import { useRewardAnalytics } from "../store/hooks";
import "../css/styles/rewards-analytics.css";
import Header1Icon from "../assets/images/icons/tiktok-studio/header1.png";
import Header2Icon from "../assets/images/icons/tiktok-studio/header2.png";

// Utility function to detect if text contains RTL characters (Arabic, Hebrew, etc.)
const isRTLText = (text: string) => {
  const rtlRegex = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return rtlRegex.test(text);
};

const RewardsAnalyticsPage = () => {
  const navigate = useNavigateWithLoading();
  const rewardsData = useRewardAnalytics();
  const [activeTab, setActiveTab] = useState("per-post");

  const handleBack = () => {
    navigate("/tiktok-studio");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="rewards-analytics-page">
      {/* Header */}
      <div className="rewards-analytics-header">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="page-title">Rewards analytics</h1>
        <div className="header-actions">
          <button className="action-button">
            <img src={Header2Icon} alt="" />
          </button>
          <button className="action-button">
            <img src={Header1Icon} alt="" />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => handleTabChange("overview")}
        >
          Overview
        </button>
        <button
          className={`tab-button ${activeTab === "per-post" ? "active" : ""}`}
          onClick={() => handleTabChange("per-post")}
        >
          Per post
        </button>
      </div>

      {/* Filter Controls */}
      <div className="filter-controls">
        <div className="filter-dropdown">
          <button className="dropdown-button">
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
          <button className="dropdown-button">
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
          <button className="dropdown-button">
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

      {/* Info Notice */}
      <div className="info-notice">
        <div className="info-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="info-text">
          Rewards analytics per post are only available for some monetization programs at this time.
        </span>
      </div>

      {/* Content */}
      <div className="rewards-content">
        {activeTab === "per-post" && (
          <div className="rewards-list">
            {rewardsData.map((item) => (
              <div key={item.id} className="reward-item">
                <div className="reward-thumbnail">
                  <img src={item.thumbnail} alt="Video thumbnail" />
                </div>
                <div className="reward-details">
                  <div className="reward-title" data-direction={isRTLText(item.title) ? "rtl" : "ltr"}>
                    {item.title}
                  </div>
                  <div className="reward-meta">
                    <span className="reward-date">{item.date}</span>
                    <span className="reward-program">{item.program}</span>
                  </div>
                  {item.status === "Disqualified" && (
                    <div className="reward-status disqualified">Disqualified</div>
                  )}
                  {item.status === "Qualified" && (
                    <div className="reward-earnings">
                      <div className="earnings-item">
                        <div className="earnings-value">
                          <span className="currency-symbol">$</span>
                          {item.estRewards.replace("$", "")}
                        </div>
                        <div className="earnings-label">Est. rewards</div>
                      </div>
                      {item.videoViews && (
                        <div className="earnings-item">
                          <div className="earnings-value">{item.videoViews}</div>
                          <div className="earnings-label">Video views</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "overview" && (
          <div className="overview-content">
            <div className="overview-placeholder">
              <p>Overview analytics will be displayed here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardsAnalyticsPage;
