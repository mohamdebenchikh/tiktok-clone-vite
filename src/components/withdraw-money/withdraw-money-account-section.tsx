import { ChevronRight } from "lucide-react";
import {
  demoUser,
  demoWithdrawInfo,
  demoPrimaryBadge,
} from "@/data/demo-data";

export default function WithdrawMoneyAccountSection() {
  // Mask email for PayPal display
  const maskEmail = (email: string) => {
    if (!email) return "m****e@gmail.com";

    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return "m****e@gmail.com";

    const maskedLocal =
      localPart.length > 2
        ? `${localPart[0]}${"*".repeat(4)}${localPart[localPart.length - 1]}`
        : `${localPart[0]}****`;

    return `${maskedLocal}@${domain}`;
  };

  const handleAddAccount = () => {
    console.log("Add account clicked");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Withdrawal account
        </h2>
        <button
          onClick={handleAddAccount}
          className="text-[#FE2C55] font-medium hover:underline"
        >
          +Add
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900">
              PayPal{" "}
              <span className="text-gray-500 font-normal">
                ({maskEmail(demoUser.email)})
              </span>
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              {demoWithdrawInfo.map((infoLine, index) => (
                <div key={index}>{infoLine}</div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="px-2 py-1 text-xs font-medium rounded"
              style={{
                backgroundColor: demoPrimaryBadge.backgroundColor,
                color: demoPrimaryBadge.textColor,
              }}
            >
              {demoPrimaryBadge.text}
            </span>
            <span className="text-gray-500 text-sm">USD</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
