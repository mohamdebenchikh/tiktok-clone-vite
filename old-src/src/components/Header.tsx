import React from "react";
import GreenShield from "../assets/images/icons/green_shield.png";
import Arrows from "../assets/images/icons/arrows.jpeg";
import { useUserName, useBalanceCurrency } from "../store/hooks";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";

const Header: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();
  const userName = useUserName();
  const currency = useBalanceCurrency();

  const handleBackClick = (): void => {
    navigateWithLoading("/profile", { message: "Loading Profile..." });
  };

  return (
    <div className="header">
      <div className="header-nav">
        <button className="back-button" onClick={handleBackClick}>
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
        <div className="currency">
          <span className="currency-icon">
            <img src={Arrows} alt="Arrows" />
          </span>
          <span>{currency}</span>
        </div>
      </div>
      <div className="header-title">
        <div className="title-content">
          <span>{userName}'s balance</span>
          <img src={GreenShield} alt="Green Shield" />
        </div>
      </div>
    </div>
  );
};

export default Header;
