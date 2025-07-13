import React from "react";
import LiveReward from "../assets/images/icons/live_reward.png";
import Compaigns from "../assets/images/icons/campaigns.png";

const MonetizationSection: React.FC = () => {
  return (
    <div className="monetization">
      <div className="monetization-header">
        <h2 className="monetization-title">Monetization</h2>
        <button className="view-more-btn">View more ›</button>
      </div>
      <div className="monetization-grid">
        <div className="monetization-item">
          <div className="monetization-icon">
            <img src={LiveReward} alt="" />
          </div>
          <span className="monetization-label">LIVE rewards</span>
        </div>
        <div className="monetization-item">
          <div className="monetization-icon">
            <img src={Compaigns} alt="" />
          </div>
          <span className="monetization-label">Campaigns</span>
        </div>
      </div>
    </div>
  );
};

export default MonetizationSection;
