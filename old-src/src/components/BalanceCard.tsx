import React from "react";
import Coin from "../assets/images/icons/coin.png";
import { useBalance, useCoins } from "../store/hooks";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";

const BalanceCard: React.FC = () => {
  const balance = useBalance();
  const coins = useCoins();
  const navigateWithLoading = useNavigateWithLoading();

  const handleEstimatedBalanceClick = (): void => {
    navigateWithLoading("/balance-details", {
      message: "Loading Balance Details...",
    });
  };

  return (
    <div className="balance-card">
      <div className="estimated-balance" onClick={handleEstimatedBalanceClick}>
        <div>
          <span className="balance-label">Estimated balance</span>
          <div className="balance-amount">
            <span className="currency-prefix">{balance.currency}</span>
            <span className="amount">{balance.amount}</span>
          </div>
        </div>
        <button
          className="view-button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handleEstimatedBalanceClick();
          }}
        >
          View ›
        </button>
      </div>

      <div className="coins-section">
        <div className="coins-info">
          <span className="coins-label">Coins</span>
          <div className="coins-amount">
            <span className="coin-icon">
              <img src={Coin} alt="" />
            </span>
            <span className="coins-number">{coins}</span>
          </div>
        </div>
        <button className="get-coins-btn">Get Coins ›</button>
      </div>
    </div>
  );
};

export default BalanceCard;
