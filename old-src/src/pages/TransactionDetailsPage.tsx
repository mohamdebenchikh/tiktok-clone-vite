import React from "react";
import { useParams } from "react-router-dom";
import { useTransactions } from "../store/hooks";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import "../css/styles/transaction-details.css";

const TransactionDetailsPage: React.FC = () => {
  const { transactionId } = useParams();
  const navigateWithLoading = useNavigateWithLoading();
  const transactions = useTransactions();

  const handleBack = () => {
    navigateWithLoading("/transaction-history", { message: "Loading Transaction History..." });
  };

  // Find the specific transaction from Redux store
  const transactionDetails = transactions.find((t) => t.id === transactionId) || {
    id: transactionId || "1",
    title: "Transaction not found",
    amount: "0.00",
    status: "Unknown",
    transactionType: "Unknown",
    activityType: "Unknown",
    created: "N/A",
    transactionId: "N/A",
  };

  const handleCopyTransactionId = () => {
    navigator.clipboard.writeText(transactionDetails.transactionId);
    // You could add a toast notification here
  };

  const handleNeedHelp = () => {
    // Navigate to help/support page
    console.log("Need help clicked");
  };

  return (
    <div className="container transaction-details-page">
      {/* Header */}
      <div className="transaction-details-header">
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
        <h1 className="details-title">Transaction details</h1>
        <div className="header-spacer"></div>
      </div>

      {/* Transaction Info Card */}
      <div className="transaction-info-card">
        <h2 className="transaction-name">{transactionDetails.title}</h2>
        <div className="transaction-amount-large">
          <span className="currency">USD</span>
          <span className="amount">{transactionDetails.amount}</span>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="transaction-details-list">
        <div className="detail-item">
          <span className="detail-label">Status</span>
          <div className="detail-value status-completed">
            <div className="status-indicator"></div>
            <span>Completed</span>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-label">Transaction type</span>
          <span className="detail-value">{transactionDetails.transactionType}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Activity type</span>
          <span className="detail-value">{transactionDetails.activityType}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Created</span>
          <span className="detail-value">{transactionDetails.created}</span>
        </div>

        <div className="detail-item transaction-id-item">
          <span className="detail-label">Transaction ID</span>
          <div className="transaction-id-wrapper">
            <span className="detail-value transaction-id-text">{transactionDetails.transactionId}</span>
            <button className="copy-button" onClick={handleCopyTransactionId}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect
                  x="9"
                  y="9"
                  width="13"
                  height="13"
                  rx="2"
                  ry="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Need Help */}
      <div className="need-help-section">
        <button className="need-help-button" onClick={handleNeedHelp}>
          <span>Need help?</span>
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
    </div>
  );
};

export default TransactionDetailsPage;
