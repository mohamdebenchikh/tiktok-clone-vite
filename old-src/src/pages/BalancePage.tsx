import React from "react";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import RechargePackage from "../components/RechargePackage";
import MonetizationSection from "../components/MonetizationSection";
import ServicesSection from "../components/ServicesSection";

const BalancePage: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />

        <BalanceCard />
        <RechargePackage />
        <MonetizationSection />
        <ServicesSection />
      </div>
    </>
  );
};

export default BalancePage;
