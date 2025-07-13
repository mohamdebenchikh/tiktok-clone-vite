import React from "react";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import {
  useBalance,
  useContentRewardsDiamonds,
  useContentRewardsAmount,
  useMonthlyEarnings,
  useIncomeStatus,
  useIncomeTitle,
} from "../store/hooks";
import YellowDollar from "../assets/images/icons/yellow_dollar.png";
import YellowDiamond from "../assets/images/icons/yellow_diamond.png";
import "../css/styles/balance-details.css";

const BalanceDetailsPage: React.FC = () => {
  const balance = useBalance();
  const contentRewardsDiamonds = useContentRewardsDiamonds();
  const contentRewardsAmount = useContentRewardsAmount();
  const monthlyEarnings = useMonthlyEarnings();
  const incomeStatus = useIncomeStatus();
  const incomeTitle = useIncomeTitle();
  const navigateWithLoading = useNavigateWithLoading();

  const handleBack = () => {
    navigateWithLoading("/", { message: "Loading..." });
  };

  const handleIncomeClick = () => {
    navigateWithLoading("/income-verification", {
      message: "Loading Income Verification...",
    });
  };

  const handleExplore = () => {
    navigateWithLoading("/monetization", {
      message: "Loading Monetization Center...",
    });
  };

  return (
    <div className="container balance-details-page">
      <div className="top-black-section">
        <div className="page-header">
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
          <h1 className="page-title">Balance</h1>
        </div>

        <div className="estimated-amount-section">
          <div className="estimated-label">
            Estimated amount <span className="info-icon">i</span>
          </div>
          <div className="estimated-value">
            <span className="currency">USD</span>
            <span className="amount">{balance.amount}</span>
          </div>
        </div>
      </div>

      <div className="balance-items-container">
        <div className="balance-item" onClick={() => {}}>
          <div className="item-left">
            <div className="item-title">Content rewards</div>
            <div className="item-subtitle">
              Accumulated Diamonds: <img src={YellowDiamond} alt="Diamond" className="diamond-icon" />{" "}
              {contentRewardsDiamonds}
            </div>
          </div>
          <div className="item-right">
            <div className="item-value">USD{contentRewardsAmount}</div>
            <span className="chevron-icon">›</span>
          </div>
        </div>

        <div className="balance-item" onClick={() => {}}>
          <div className="item-left">
            <div className="item-title">Monthly earnings</div>
          </div>
          <div className="item-right">
            <div className="item-value">USD{monthlyEarnings}</div>
            <span className="chevron-icon">›</span>
          </div>
        </div>

        <div className="balance-item" onClick={handleIncomeClick}>
          <div className="item-left">
            <div className="item-title">{incomeTitle}</div>
            <div className="income-badge">{incomeStatus}</div>
          </div>
          <div className="item-right">
            <div className="item-values">
              <div className="item-value">USD{balance.amount}</div>
              <div className="item-secondary-value">USD{balance.amount}</div>
            </div>
            <span className="chevron-icon">›</span>
          </div>
        </div>
      </div>

      <div className="earn-more-section">
        <div className="earn-more-content">
          <div className="earn-more-left">
            <h2 className="earn-more-title">Earn more rewards</h2>
            <p className="earn-more-text">
              Check out the Monetization Center for exciting opportunities and programs.
            </p>{" "}
            <button className="explore-button" onClick={handleExplore}>
              Explore <span className="chevron-icon">›</span>
            </button>
          </div>
          <div className="earn-more-image">
            <img src={YellowDollar} alt="Money" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceDetailsPage;
