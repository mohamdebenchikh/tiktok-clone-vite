import React from "react";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import { useBalance, useIncomeTitle } from "../store/hooks";
import "../css/styles/income-plus.css";

const IncomePlusPage: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();
  const balance = useBalance();
  const incomeTitle = useIncomeTitle();

  const handleBack = () => {
    navigateWithLoading("/income-verification", { message: "Loading Income Verification..." });
  };

  const handleWithdraw = (e: React.FormEvent) => {
    // Remove focus from button immediately after click
    (e.target as HTMLElement).blur();
    // Navigate to withdraw money page
    navigateWithLoading("/withdraw-money", { message: "Loading Withdraw Money..." });
  };

  const handleTransactions = () => {
    navigateWithLoading("/transaction-history", { message: "Loading Transactions..." });
  };

  return (
    <div className="container income-plus-page">
      {/* Header */}
      <div className="income-header">
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
        <h1 className="income-title">{incomeTitle}</h1>
      </div>

      {/* Balance Section */}
      <div className="balance-section">
        <div className="balance-amount">${balance.amount}</div>
        <div className="balance-label">Withdrawable balance</div>

        <button className="withdraw-button" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>

      {/* Menu Items */}
      <div className="menu-section">
        <div className="menu-item" onClick={handleTransactions}>
          <span className="menu-text">Transactions</span>
          <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="menu-item">
          <span className="menu-text">Help center</span>
          <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="menu-item">
          <div className="menu-text-with-icon">
            <span className="menu-text">Withdrawal method</span>
          </div>
          <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="menu-item">
          <span className="menu-text">Tax information</span>
          <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
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

      {/* Footer Links */}
      <div className="footer-section">
        <div className="footer-text">
          View our <button className="footer-link">Terms of Service</button> and{" "}
          <button className="footer-link">Privacy Policy</button>
        </div>
      </div>
    </div>
  );
};

export default IncomePlusPage;
