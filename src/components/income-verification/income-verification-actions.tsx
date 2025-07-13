import { RotateCcw } from "lucide-react";

interface IncomeVerificationActionsProps {
  canResend: boolean;
  resendTimer: number;
  verifying: boolean;
  isCodeComplete: boolean;
  onResend: () => void;
  onVerify: () => void;
}

export default function IncomeVerificationActions({
  canResend,
  resendTimer,
  verifying,
  isCodeComplete,
  onResend,
  onVerify
}: IncomeVerificationActionsProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            canResend
              ? "text-[#FE2C55] hover:bg-red-50"
              : "text-gray-400 cursor-not-allowed"
          }`}
          onClick={onResend}
          disabled={!canResend || verifying}
        >
          <span>Resend email</span>
          {!canResend && (
            <span className="text-sm">({resendTimer}s)</span>
          )}
          {canResend && <RotateCcw className="w-4 h-4" />}
        </button>
      </div>

      {verifying ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#FE2C55]"></div>
        </div>
      ) : (
        <button
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            isCodeComplete
              ? "bg-[#FE2C55] text-white hover:bg-[#e91e4c]"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          onClick={onVerify}
          disabled={!isCodeComplete}
        >
          Verify
        </button>
      )}

      {/* Can't Access Email */}
      <div className="text-center">
        <button className="text-[#FE2C55] font-medium hover:underline">
          Can't access email?
        </button>
      </div>
    </div>
  );
}
