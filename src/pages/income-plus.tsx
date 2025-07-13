import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { demoBalance } from "@/data/demo-data";

export default function IncomePlusPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/income-verification");
  };

  const handleWithdraw = () => {
    navigate("/withdraw-money");
  };

  const handleTransactions = () => {
    navigate("/transaction-history");
  };

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
        <h1 className="text-lg font-semibold text-gray-900">Income+</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Balance Section */}
      <div className="flex-1 p-6">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-gray-900 mb-2">
            ${demoBalance.withdrawable}
          </div>
          <div className="text-gray-500 text-sm mb-6">Withdrawable balance</div>

          <button
            onClick={handleWithdraw}
            className="bg-[#FE2C55] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e91e4c] transition-colors"
          >
            Withdraw
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          <button
            onClick={handleTransactions}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-lg"
          >
            <span className="text-gray-900 font-medium">Transactions</span>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-lg">
            <span className="text-gray-900 font-medium">Help center</span>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-lg">
            <span className="text-gray-900 font-medium">Withdrawal method</span>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-lg">
            <span className="text-gray-900 font-medium">Tax information</span>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-gray-500">
          View our{" "}
          <button className="text-[#FE2C55] font-medium">
            Terms of Service
          </button>{" "}
          and{" "}
          <button className="text-[#FE2C55] font-medium">Privacy Policy</button>
        </div>
      </div>
    </div>
  );
}
