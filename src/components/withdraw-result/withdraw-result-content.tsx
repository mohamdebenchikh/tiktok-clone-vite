import { useSearchParams } from "react-router";
import WithdrawResultSuccessSection from "./withdraw-result-success-section";
import WithdrawResultDetailsSection from "./withdraw-result-details-section";
import WithdrawResultActions from "./withdraw-result-actions";

export default function WithdrawResultContent() {
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

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-full">
      <WithdrawResultSuccessSection />
      <WithdrawResultDetailsSection 
        withdrawAmount={withdrawAmount}
        orderId={orderId}
      />
      <WithdrawResultActions />
      <div className="h-10"></div>
    </div>
  );
}
