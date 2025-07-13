import React from "react";
import Gift from "../assets/images/icons/gift.png";

const RechargePackage: React.FC = () => {
  return (
    <div className="recharge-package">
      <div className="package-content">
        <div className="package-info">
          <h3 className="package-title">First recharge package</h3>
          <p className="package-subtitle">Get Gifts and bonus Coins</p>
          <button className="get-button">Get →</button>
        </div>
        <div className="package-icon">
          <img src={Gift} alt="Gift" />
        </div>
      </div>
    </div>
  );
};

export default RechargePackage;
