import IncomePlusBalanceSection from "./income-plus-balance-section";
import IncomePlusMenuItems from "./income-plus-menu-items";
import IncomePlusFooter from "./income-plus-footer";

export default function IncomePlusContent() {
  return (
    <div className="flex flex-col w-full p-6">
      <IncomePlusBalanceSection />
      <IncomePlusMenuItems />
      <IncomePlusFooter />
      <div className="h-10"></div>
    </div>
  );
}
