import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import { useBalance, useProfileEmail, useWithdrawInfoLines, usePrimaryBadge } from "../store/hooks";
import { startNavigation, finishNavigation } from "../store/slices/appSlice";
import paypalIcon from "../assets/images/icons/paypal.png";
import "../css/styles/withdraw-money.css";

const WithdrawMoneyPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateWithLoading = useNavigateWithLoading();
  const balance = useBalance();
  const profileEmail = useProfileEmail();
  const withdrawInfoLines = useWithdrawInfoLines();
  const primaryBadge = usePrimaryBadge();
  const [withdrawAmount, setWithdrawAmount] = useState("");

  // Mask email for PayPal display
  const maskEmail = (email: string) => {
    if (!email) return "m****e@gmail.com";

    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return "m****e@gmail.com";

    const maskedLocal =
      localPart.length > 2
        ? `${localPart[0]}${"*".repeat(4)}${localPart[localPart.length - 1]}`
        : `${localPart[0]}****`;

    return `${maskedLocal}@${domain}`;
  };

  const handleBack = () => {
    navigateWithLoading("/income-plus", { message: "Loading Income+..." });
  };

  const handleAddAccount = () => {
    // Handle add account logic
    console.log("Add account clicked");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setWithdrawAmount(value);
    }
  };

  const handleWithdrawAll = () => {
    setWithdrawAmount(balance.amount);
  };

  const handleWithdrawNow = (e: React.FormEvent) => {
    // Prevent default behavior and stop propagation for mobile webview compatibility
    e.preventDefault();
    e.stopPropagation();

    if (withdrawAmount && parseFloat(withdrawAmount) > 0) {
      // Start loading with custom message
      dispatch(startNavigation({ message: "Processing withdrawal..." }));

      // Navigate with a short delay to show loading
      setTimeout(() => {
        navigate(`/withdraw-result?amount=${encodeURIComponent(withdrawAmount)}`);

        // Finish loading after navigation
        setTimeout(() => {
          dispatch(finishNavigation());
        }, 200);
      }, 400);
    }
  };

  const isWithdrawDisabled = !withdrawAmount || parseFloat(withdrawAmount) <= 0;

  return (
    <div className="container withdraw-money-page">
      {/* Header */}
      <div className="withdraw-header">
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
        <h1 className="withdraw-title">Withdraw money</h1>
      </div>

      {/* Content */}
      <div className="withdraw-content">
        {/* Withdrawal Account Section */}
        <div className="withdrawal-account-section">
          <div className="section-header">
            <h2 className="section-title">Withdrawal account</h2>
            <button className="wm-add-button" onClick={handleAddAccount}>
              +Add
            </button>
          </div>

          <div className="account-card">
            <div className="account-info">
              <div className="paypal-icon">
                <img src={paypalIcon} alt="PayPal" className="paypal-logo" />
              </div>
              <div className="account-details">
                <div className="account-name">
                  PayPal <span className="email-part">({maskEmail(profileEmail)})</span>
                </div>
                <div className="account-info-text">
                  {withdrawInfoLines.map((infoLine, index) => (
                    <div key={index} className="info-line">
                      {infoLine}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="account-meta">
              <span
                className="primary-badge"
                style={{
                  backgroundColor: primaryBadge.backgroundColor,
                  color: primaryBadge.textColor,
                }}
              >
                {primaryBadge.text}
              </span>
              <span className="currency">USD...</span>
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
        </div>

        {/* Amount Section */}
        <div className="amount-section">
          <h2 className="section-title">Amount</h2>

          <div className="amount-input-container">
            <span className="currency-symbol">$</span>
            <input
              type="text"
              className="amount-input"
              value={withdrawAmount}
              onChange={handleAmountChange}
              placeholder="0.00"
            />
          </div>

          <div className="balance-info">
            <span className="balance-text">Available balance: ${balance.amount}</span>
            <button className="withdraw-all-button" onClick={handleWithdrawAll}>
              Withdraw all
            </button>
          </div>
        </div>

        {/* Withdraw Button */}
        <button
          className={`withdraw-now-button ${isWithdrawDisabled ? "disabled" : ""}`}
          onClick={handleWithdrawNow}
          onTouchEnd={handleWithdrawNow}
          disabled={isWithdrawDisabled}
          type="button"
          style={{
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
          }}
        >
          Withdraw now
        </button>

        {/* Footer */}
        <div className="withdraw-footer">
          <button className="legal-button">Legal</button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMoneyPage;
