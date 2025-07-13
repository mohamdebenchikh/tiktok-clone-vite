interface WithdrawResultDetailsSectionProps {
  withdrawAmount: string;
  orderId: string;
}

export default function WithdrawResultDetailsSection({
  withdrawAmount,
  orderId,
}: WithdrawResultDetailsSectionProps) {
  const maskedEmail = "a****i@outlook.fr";

  return (
    <div className="w-full max-w-sm space-y-6 mb-8 mx-auto">
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
  );
}
