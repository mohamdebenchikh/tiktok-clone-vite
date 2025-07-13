import { useNavigate } from "react-router";
import { demoBalance } from "@/data/demo-data";

export default function IncomePlusBalanceSection() {
  const navigate = useNavigate();

  const handleWithdraw = () => {
    navigate("/withdraw-money");
  };

  return (
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
  );
}
