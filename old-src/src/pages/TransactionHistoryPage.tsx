import React from "react";
import { useState } from "react";
import { useTransactions } from "../store/hooks";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import "../css/styles/transaction-history.css";
import FilterIcon from "../assets/images/icons/tiktok-studio/filter.png";

interface Transaction {
  id: string;
  title: string;
  amount: string;
  status: string;
  transactionType: string;
  activityType: string;
  created: string;
  transactionId: string;
  date: string;
  category: string;
  month: string;
}

const TransactionHistoryPage: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();
  const [activeTab, setActiveTab] = useState("All");

  // Get transactions from Redux store
  const transactions = useTransactions();

  const handleBack = () => {
    navigateWithLoading("/tiktok-studio", { message: "Loading TikTok Studio..." });
  };

  const handleTransactionClick = (transactionId: string) => {
    navigateWithLoading(`/transaction-details/${transactionId}`, {
      message: "Loading Transaction Details...",
    });
  };

  const tabs = ["All", "Rewards", "Revenue", "Purchase", "Refund"];

  // Filter transactions based on active tab
  const filteredTransactions =
    activeTab === "All" ? transactions : transactions.filter((t) => t.category === activeTab);

  const filteredGroupedTransactions = filteredTransactions.reduce((acc: Record<string, Transaction[]>, transaction) => {
    if (!acc[transaction.month]) {
      acc[transaction.month] = [];
    }
    acc[transaction.month].push(transaction);
    return acc;
  }, {});

  return (
    <div className="container transaction-history-page">
      {/* Header */}
      <div className="transaction-header">
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
        <h1 className="transaction-title">Transaction history</h1>
        <div className="header-actions">
          <button className="filter-btn">
            <img src={FilterIcon} alt="Filter" width="20px" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="transaction-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div className="transaction-list">
        {Object.entries(filteredGroupedTransactions).map(([month, monthTransactions]: [string, Transaction[]]) => (
          <div key={month} className="month-group">
            <div className="month-header">
              <span className="month-title">{month}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="transactions">
              {monthTransactions.map((transaction: Transaction) => (
                <div
                  key={transaction.id}
                  className="transaction-item"
                  onClick={() => handleTransactionClick(transaction.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="transaction-content">
                    <div className="transaction-main">
                      <h3 className="transaction-title-text">{transaction.title}</h3>
                      <div className="transaction-meta">
                        <span className="transaction-date">{transaction.date}</span>
                        <span className="transaction-divider">|</span>
                        <span className="transaction-category">{transaction.category}</span>
                      </div>
                    </div>
                    <div className="transaction-amount">USD{transaction.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
