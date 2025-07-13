import { useNavigate } from "react-router";

export default function WithdrawResultActions() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/withdraw-money");
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <button
        className="w-full py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
}
