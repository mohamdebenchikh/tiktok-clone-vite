import BalanceTitle from "./balance-title";
import LiveRewardsNotification from "./live-rewards-notification";
import BalanceCard from "./balance-card";
import FirstRechargePackage from "./first-recharge-package";
import MonetizationSection from "./monetization-section";
import ServicesSection from "./services-section";

export default function BalanceContent() {
  return (
    <div className="flex flex-col w-full space-y-4 p-4">
      <BalanceTitle />
      <LiveRewardsNotification />
      <BalanceCard />
      <FirstRechargePackage />
      <MonetizationSection />
      <ServicesSection />
      <div className="h-10"></div>
    </div>
  )
}
