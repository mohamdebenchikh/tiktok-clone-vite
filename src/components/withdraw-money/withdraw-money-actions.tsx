import { useNavigate } from "react-router";

interface WithdrawMoneyActionsProps {
  withdrawAmount: string;
  isWithdrawDisabled: boolean;
}

export default function WithdrawMoneyActions({
  withdrawAmount,
  isWithdrawDisabled,
}: WithdrawMoneyActionsProps) {
  const navigate = useNavigate();

  const handleWithdrawNow = () => {
    if (withdrawAmount && parseFloat(withdrawAmount) > 0) {
      navigate(`/withdraw-result?amount=${encodeURIComponent(withdrawAmount)}`);
    }
  };

  return (
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
  );
}
