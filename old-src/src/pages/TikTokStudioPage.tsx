import React from "react";
import { useState } from "react";
import {
  useAnalytics,
  useLatestPost,
  useBalanceAmount,
  useEstimatedRewards,
  useTrendingPosts,
  useStudioNotification,
  useRewardAnalytics,
} from "../store/hooks";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import "../css/styles/tiktok-studio.css";

import SettingsIcon from "../assets/images/icons/settings.png";
import AccountCheckIcon from "../assets/images/icons/tiktok-studio/account_check.png";
import CreatorAcademyIcon from "../assets/images/icons/tiktok-studio/creator_academy.png";
import PromoteIcon from "../assets/images/icons/tiktok-studio/Promote.png";
import BenefitsIcon from "../assets/images/icons/tiktok-studio/benefits.png";
import ServicePlusIcon from "../assets/images/icons/tiktok-studio/Service+.png";
import CreatorsRewardIcon from "../assets/images/icons/tiktok-studio/Creator Reward Program.png";
import LiveRewardIcon from "../assets/images/icons/tiktok-studio/LIVE rewards.png";
import CreatorIcon from "../assets/images/icons/tiktok-studio/Creator Marketplace.png";
import FilterIcon from "../assets/images/icons/tiktok-studio/filter.png";

const TikTokStudioPage: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();
  const analytics = useAnalytics();
  const latestPost = useLatestPost();
  const balanceAmount = useBalanceAmount();
  const estimatedRewards = useEstimatedRewards();
  const trendingPosts = useTrendingPosts();
  const studioNotification = useStudioNotification();
  const rewardAnalytics = useRewardAnalytics();
  const [activeTab, setActiveTab] = useState("Monetization");
  const [trendingTab, setTrendingTab] = useState("Posts");
  const [mainTab, setMainTab] = useState("Tools");

  const handleBack = () => {
    navigateWithLoading("/profile", { message: "Loading Profile..." });
  };

  const handleRewardsAnalytics = () => {
    navigateWithLoading("/rewards-analytics", { message: "Loading Rewards Analytics..." });
  };

  // Function to render notification icon based on image or fallback
  const renderNotificationIcon = (iconImage: string | null) => {
    // If custom image is uploaded, use it
    if (iconImage) {
      return (
        <img
          src={iconImage}
          alt="Notification Icon"
          style={{
            width: "54px",
            height: "54px",
            objectFit: "cover",
          }}
        />
      );
    }

    // Fallback to default icon if no image is uploaded
    const iconProps = {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    return (
      <svg {...iconProps}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  };

  return (
    <div className="container tiktok-studio-page">
      {/* Header */}
      <div className="studio-header">
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
        <h1 className="studio-title">TikTok Studio</h1>
        <div className="header-actions">
          <button className="icon-btn">
            <img src={SettingsIcon} alt="Settings" width={"20px"} />
          </button>
        </div>
      </div>
      {/* Main Tab Switcher */}
      <div className="main-tab-switcher">
        <button
          className={`main-tab ${mainTab === "Tools" ? "active" : ""}`}
          onClick={() => setMainTab("Tools")}
        >
          Tools
        </button>
        <button
          className={`main-tab ${mainTab === "LIVE" ? "active" : ""}`}
          onClick={() => setMainTab("LIVE")}
        >
          LIVE
        </button>
      </div>
      {/* Analytics Section */}
      <div className="analytics-section">
        <div className="analytics-header">
          <h2>Analytics</h2>
          <button className="view-all-btn">
            View all
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="analytics-cards">
          <div className="analytics-card">
            <div className="card-label">Post views</div>
            <div className="card-value">{analytics.postViews.value}</div>
            <div className={`card-change ${analytics.postViews.trend}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="6"
                  fill={analytics.postViews.trend === "increase" ? "#1ea7fd" : "#afafaf"}
                />
                {analytics.postViews.trend === "increase" ? (
                  <>
                    <line
                      x1="12"
                      y1="17"
                      x2="12"
                      y2="7"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 10l4-3 4 3"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </>
                ) : (
                  <>
                    <line
                      x1="12"
                      y1="7"
                      x2="12"
                      y2="17"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 14l4 3 4-3"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </>
                )}
              </svg>
              <span>{Math.abs(parseFloat(analytics.postViews.change) || 0)}%</span>
              <span className="period">7d</span>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-label">Net followers</div>
            <div className="card-value">{analytics.netFollowers.value}</div>
            <div className={`card-change ${analytics.netFollowers.trend}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  fill={analytics.netFollowers.trend === "increase" ? "#1ea7fd" : "#afafaf"}
                />
                {analytics.netFollowers.trend === "increase" ? (
                  <>
                    <line
                      x1="12"
                      y1="17"
                      x2="12"
                      y2="7"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 10l4-3 4 3"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </>
                ) : (
                  <>
                    <line
                      x1="12"
                      y1="7"
                      x2="12"
                      y2="17"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 14l4 3 4-3"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </>
                )}
              </svg>
              <span>{Math.abs(analytics.netFollowers.change)}%</span>
              <span className="period">7d</span>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-label">Likes</div>
            <div className="card-value">{analytics.likes.value}</div>
            <div className={`card-change ${analytics.likes.trend}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  fill={analytics.likes.trend === "increase" ? "#1ea7fd" : "#afafaf"}
                />
                {analytics.likes.trend === "increase" ? (
                  <>
                    <line
                      x1="12"
                      y1="17"
                      x2="12"
                      y2="7"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 10l4-3 4 3"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </>
                ) : (
                  <>
                    <line
                      x1="12"
                      y1="7"
                      x2="12"
                      y2="17"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 14l4 3 4-3"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </>
                )}
              </svg>
              <span>{Math.abs(analytics.likes.change)}%</span>
              <span className="period">7d</span>
            </div>
          </div>
        </div>

        <div className="latest-post">
          <div className="latest-post-label">Your latest post</div>
          <div className="latest-post-stats">
            <div className="stat-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 5v14l11-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span>{latestPost.views}</span>
            </div>
            <div className="stat-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <span>{latestPost.likes}</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Notification Container */}
      <div className="notification-container">
        <div className="notification-card">
          <div className="notification-icon">{renderNotificationIcon(studioNotification.iconImage)}</div>
          <div className="notification-content">
            <div className="notification-header">
              <div className="notification-title">
                <h3>{studioNotification.title}</h3>
                <span className="notification-subtitle">{studioNotification.subtitle}</span>
              </div>
              <button className="close-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className="download-btn">{studioNotification.downloadText}</button>
          </div>
        </div>
      </div>
      {/* Tools & Features Section */}
      <div className="tools-section">
        <div className="tools-grid">
          <div className="tool-item">
            <div className="tool-icon">
              <img src={AccountCheckIcon} alt="Account check" width="24" height="24" />
            </div>
            <span className="tool-label">Account check</span>
          </div>

          <div className="tool-item">
            <div className="tool-icon">
              <img src={CreatorAcademyIcon} alt="Creator Academy" width="24" height="24" />
            </div>
            <span className="tool-label">Creator Academy</span>
          </div>

          <div className="tool-item">
            <div className="tool-icon">
              <img src={PromoteIcon} alt="Promote" width="28" height="28" />
            </div>
            <span className="tool-label">Promote</span>
          </div>

          <div className="tool-item">
            <div className="tool-icon">
              <img src={BenefitsIcon} alt="Benefits" width="24" height="24" />
            </div>
            <span className="tool-label">Benefits</span>
          </div>
        </div>
      </div>
      {/* Combined Section Container */}
      <div className="combined-sections-container">
        {/* ...existing code... */}
        <div className="monetization-section">
          <div className="monetization-tabs">
            <button
              className={`tab-btn ${activeTab === "Inspiration" ? "active" : ""}`}
              onClick={(e) => {
                setActiveTab("Inspiration");
                (e.target as HTMLElement).blur();
              }}
            >
              Inspiration
            </button>
            <button
              className={`tab-btn ${activeTab === "Monetization" ? "active" : ""}`}
              onClick={(e) => {
                setActiveTab("Monetization");
                (e.target as HTMLElement).blur();
              }}
            >
              Monetization
            </button>
          </div>

          {/* Always show Monetization content regardless of active tab */}
          <div className="monetization-stats">
            <div className="stat-card">
              <div className="stat-label">Balance</div>
              <div className="stat-label-icon">
                <div className="stat-value">
                  <span className="currency-symbol">$</span>
                  {balanceAmount}
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Estimated rewards</div>
              <div className="stat-label-icon">
                <div className="stat-value">
                  <span className="currency-symbol">$</span>
                  {estimatedRewards}
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="rewards-per-post-section" onClick={handleRewardsAnalytics}>
            <div className="rewards-per-post-label">Rewards per post</div>
            <div className="rewards-per-post-icons">
              {rewardAnalytics
                .slice()
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 3)
                .map((post, index) => (
                  <div key={post.id} className="reward-icon">
                    <img
                      src={post.thumbnail}
                      alt={`Post ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="monetization-programs">
            <div className="programs-header">
              <h3>Monetization Programs</h3>
              <button className="view-all-btn">
                View all
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="programs-grid">
              <div className="program-item">
                <div className="program-icon">
                  <img src={ServicePlusIcon} alt="Service+" width="24" height="24" />
                </div>
                <span className="program-label">Service+</span>
              </div>

              <div className="program-item">
                <div className="program-icon">
                  <img src={CreatorsRewardIcon} alt="Creators reward program" width="24" />
                </div>
                <span className="program-label">Creators Rewards Program</span>
              </div>

              <div className="program-item">
                <div className="program-icon">
                  <img src={LiveRewardIcon} alt="Live Reward" width="24" height="24" />
                </div>
                <span className="program-label">LIVE rewards</span>
              </div>

              <div className="program-item">
                <div className="program-icon">
                  <img src={CreatorIcon} alt="Creator" width="24" height="24" />
                </div>
                <span className="program-label">Creator Marketplace</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trending in Monetization Section */}
        <div className="trending-section">
          <div className="trending-header">
            <h2>Trending in Monetization</h2>
          </div>

          <div className="trending-tabs">
            <div>
              <button
                className={`trending-tab-btn ${trendingTab === "Posts" ? "active" : ""}`}
                onClick={(e) => {
                  setTrendingTab("Posts");
                  (e.target as HTMLElement).blur();
                }}
              >
                Posts
              </button>
              <button
                className={`trending-tab-btn ${trendingTab === "Creators" ? "active" : ""}`}
                onClick={(e) => {
                  setTrendingTab("Creators");
                  (e.target as HTMLElement).blur();
                }}
              >
                Creators
              </button>
              <button
                className={`trending-tab-btn ${trendingTab === "Articles" ? "active" : ""}`}
                onClick={(e) => {
                  setTrendingTab("Articles");
                  (e.target as HTMLElement).blur();
                }}
              >
                Articles
              </button>
            </div>
            <button className="filter-btn">
              <img src={FilterIcon} alt="" />
            </button>
          </div>

          <div className="trending-subtitle">Top performing branded content on TikTok</div>

          <div className="trending-posts-grid">
            {trendingPosts.map((post) => (
              <div key={post.id} className="trending-post-item">
                <div className="post-thumbnail">
                  <img src={post.thumbnail} alt={post.title} />
                  <div className="post-overlay">
                    <div className="post-title">{post.title}</div>
                    <div className="like-count">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      {/* End of combined-sections-container */}
    </div>
  );
};

export default TikTokStudioPage;
