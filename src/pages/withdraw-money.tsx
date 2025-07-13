import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  demoBalance,
  demoUser,
  demoWithdrawInfo,
  demoPrimaryBadge,
} from "@/data/demo-data";

export default function WithdrawMoneyPage() {
  const navigate = useNavigate();
  const [withdrawAmount, setWithdrawAmount] = useState("");

  // Mask email for PayPal display
  const maskEmail = (email: string) => {
    if (!email) return "m****e@gmail.com";

    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return "m****e@gmail.com";

    const maskedLocal =
      localPart.length > 2
        ? `${localPart[0]}${"*".repeat(4)}${localPart[localPart.length - 1]}`
        : `${localPart[0]}****`;

    return `${maskedLocal}@${domain}`;
  };

  const handleBack = () => {
    navigate("/income-plus");
  };

  const handleAddAccount = () => {
    console.log("Add account clicked");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setWithdrawAmount(value);
    }
  };

  const handleWithdrawAll = () => {
    setWithdrawAmount(demoBalance.withdrawable.replace(/,/g, ""));
  };

  const handleWithdrawNow = () => {
    if (withdrawAmount && parseFloat(withdrawAmount) > 0) {
      navigate(`/withdraw-result?amount=${encodeURIComponent(withdrawAmount)}`);
    }
  };

  const isWithdrawDisabled = !withdrawAmount || parseFloat(withdrawAmount) <= 0;

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Withdraw money</h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Withdrawal Account Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Withdrawal account
            </h2>
            <button
              onClick={handleAddAccount}
              className="text-[#FE2C55] font-medium hover:underline"
            >
              +Add
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  PayPal{" "}
                  <span className="text-gray-500 font-normal">
                    ({maskEmail(demoUser.email)})
                  </span>
                </div>
                <div className="text-sm text-gray-500 space-y-1">
                  {demoWithdrawInfo.map((infoLine, index) => (
                    <div key={index}>{infoLine}</div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="px-2 py-1 text-xs font-medium rounded"
                  style={{
                    backgroundColor: demoPrimaryBadge.backgroundColor,
                    color: demoPrimaryBadge.textColor,
                  }}
                >
                  {demoPrimaryBadge.text}
                </span>
                <span className="text-gray-500 text-sm">USD</span>
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Amount Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Amount</h2>

          <div className="relative mb-4">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-medium text-gray-900">
              $
            </span>
            <input
              type="text"
              className="w-full pl-8 pr-4 py-4 text-2xl font-medium border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FE2C55] transition-colors"
              value={withdrawAmount}
              onChange={handleAmountChange}
              placeholder="0.00"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              Available balance: ${demoBalance.withdrawable}
            </span>
            <button
              onClick={handleWithdrawAll}
              className="text-[#FE2C55] font-medium hover:underline"
            >
              Withdraw all
            </button>
          </div>
        </div>

        {/* Withdraw Button */}
        <div className="flex-1 flex flex-col justify-end">
          <button
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
              isWithdrawDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#FE2C55] text-white hover:bg-[#e91e4c]"
            }`}
            onClick={handleWithdrawNow}
            disabled={isWithdrawDisabled}
          >
            Withdraw now
          </button>

          {/* Footer */}
          <div className="text-center mt-4">
            <button className="text-[#FE2C55] font-medium hover:underline">
              Legal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
