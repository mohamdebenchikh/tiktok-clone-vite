import { useNavigate } from "react-router";

export default function MonthlyEarningsActions() {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <button
        onClick={() => navigate("/rewards-analytics")}
        className="w-full bg-[#FE2C55] text-white py-3 rounded-lg font-medium hover:bg-[#e91e4c] transition-colors"
      >
        View detailed analytics
      </button>
      <button
        onClick={() => navigate("/withdraw-money")}
        className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
      >
        Withdraw earnings
      </button>
    </div>
  );
}
