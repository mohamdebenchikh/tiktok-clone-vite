import React from "react";
import Transactions from "../assets/images/icons/transactions.png";
import GreyShield from "../assets/images/icons/grey_shield.png";
import Faq from "../assets/images/icons/faq.png";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";

const ServicesSection: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();

  const handleTransactionClick = (): void => {
    navigateWithLoading("/transaction-history", { message: "Loading Transaction History..." });
  };

  return (
    <div className="section">
      <h2 className="section-title">Services</h2>
      <div className="services-list">
        <div className="service-item" onClick={handleTransactionClick} style={{ cursor: "pointer" }}>
          <div className="service-icon">
            <img src={Transactions} alt="" style={{ width: "16px" }} />
          </div>
          <span className="service-label">Transactions</span>
          <span className="service-arrow">›</span>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <img src={GreyShield} alt="" />
          </div>
          <span className="service-label">Identity verification</span>
          <span className="service-status">Verified</span>
          <span className="service-arrow">›</span>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <img src={Faq} alt="" />
          </div>
          <span className="service-label">Help & feedback</span>
          <span className="service-arrow">›</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
