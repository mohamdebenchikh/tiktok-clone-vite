import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/styles/withdraw-result.css";

const WithdrawResultPage: React.FC = () => {
  const navigate = useNavigate();

  // Generate random order ID (26 numbers + 1 letter)
  const generateOrderId = () => {
    const numbers = Array.from({ length: 26 }, () => Math.floor(Math.random() * 10)).join("");
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
    return `${numbers}-${letter}`;
  };

  // Get withdrawal amount from URL parameters (preserves Redux store)
  const urlParams = new URLSearchParams(window.location.search);
  const withdrawAmount = urlParams.get("amount") || "25.00";
  const orderId = generateOrderId();
  const maskedEmail = "a****i@outlook.fr";

  const handleBack = () => {
    // Use React Router navigation to preserve Redux store
    navigate("/withdraw-money");
  };

  return (
    <div className="container withdraw-result-page">
      {/* Success Icon */}
      <div className="success-section">
        <div className="success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="#22C55E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="success-title">Withdrawal in progress</h1>
        <p className="success-subtitle">Funds should arrive in 1 business day</p>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <div className="detail-item">
          <h3 className="detail-label">Withdrawal amount</h3>
          <p className="detail-value">${withdrawAmount}</p>
        </div>

        <div className="detail-item">
          <h3 className="detail-label">Transfer to</h3>
          <p className="detail-value">PayPal</p>
          <p className="detail-email">({maskedEmail})</p>
        </div>

        <div className="detail-item">
          <h3 className="detail-label">Order ID</h3>
          <p className="detail-value order-id">{orderId}</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="button-section">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default WithdrawResultPage;
