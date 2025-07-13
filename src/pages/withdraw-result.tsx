import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function WithdrawResultPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Generate random order ID (26 numbers + 1 letter)
  const generateOrderId = () => {
    const numbers = Array.from({ length: 26 }, () =>
      Math.floor(Math.random() * 10),
    ).join("");
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
    return `${numbers}-${letter}`;
  };

  const withdrawAmount = searchParams.get("amount") || "25.00";
  const orderId = generateOrderId();
  const maskedEmail = "a****i@outlook.fr";

  const handleBack = () => {
    navigate("/withdraw-money");
  };

  return (
    <div className="h-full bg-white flex flex-col items-center justify-center p-6">
      {/* Success Icon */}
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <CheckIcon className="w-12 h-12 text-green-600" />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Withdrawal in progress
        </h1>
        <p className="text-gray-500">Funds should arrive in 1 business day</p>
      </div>

      {/* Details Section */}
      <div className="w-full max-w-sm space-y-6 mb-8">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Withdrawal amount
          </h3>
          <p className="text-xl font-semibold text-gray-900">
            ${withdrawAmount}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Transfer to
          </h3>
          <p className="text-lg font-medium text-gray-900">PayPal</p>
          <p className="text-sm text-gray-500">({maskedEmail})</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">Order ID</h3>
          <p className="text-sm font-mono text-gray-900 break-all">{orderId}</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-sm">
        <button
          className="w-full py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}
