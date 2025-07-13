import { demoBalance } from "@/data/demo-data";

interface WithdrawMoneyAmountSectionProps {
  withdrawAmount: string;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWithdrawAll: () => void;
}

export default function WithdrawMoneyAmountSection({
  withdrawAmount,
  onAmountChange,
  onWithdrawAll,
}: WithdrawMoneyAmountSectionProps) {
  return (
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
          onChange={onAmountChange}
          placeholder="0.00"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">
          Available balance: ${demoBalance.withdrawable}
        </span>
        <button
          onClick={onWithdrawAll}
          className="text-[#FE2C55] font-medium hover:underline"
        >
          Withdraw all
        </button>
      </div>
    </div>
  );
}
