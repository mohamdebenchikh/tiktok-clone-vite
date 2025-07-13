import { useState } from "react";
import { demoBalance } from "@/data/demo-data";
import WithdrawMoneyAccountSection from "./withdraw-money-account-section";
import WithdrawMoneyAmountSection from "./withdraw-money-amount-section";
import WithdrawMoneyActions from "./withdraw-money-actions";

export default function WithdrawMoneyContent() {
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setWithdrawAmount(value);
    }
  };

  const handleWithdrawAll = () => {
    setWithdrawAmount(demoBalance.withdrawable.replace(/,/g, ""));
  };

  const isWithdrawDisabled = !withdrawAmount || parseFloat(withdrawAmount) <= 0;

  return (
    <div className="flex flex-col w-full h-full p-4 space-y-6">
      <WithdrawMoneyAccountSection />
      <WithdrawMoneyAmountSection
        withdrawAmount={withdrawAmount}
        onAmountChange={handleAmountChange}
        onWithdrawAll={handleWithdrawAll}
      />
      <WithdrawMoneyActions
        withdrawAmount={withdrawAmount}
        isWithdrawDisabled={isWithdrawDisabled}
      />
    </div>
  );
}
