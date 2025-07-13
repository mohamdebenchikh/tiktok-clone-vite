import { Check } from "lucide-react";

export default function WithdrawResultSuccessSection() {
  return (
    <div className="text-center mb-8">
      {/* Success Icon */}
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-12 h-12 text-green-600" />
        </div>
      </div>

      {/* Success Message */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Withdrawal in progress
      </h1>
      <p className="text-gray-500">Funds should arrive in 1 business day</p>
    </div>
  );
}
