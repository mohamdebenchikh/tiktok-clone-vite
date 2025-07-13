import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { demoUser } from "@/data/demo-data";

export default function IncomeVerificationPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(58);
  const [canResend, setCanResend] = useState(false);
  const [verifying, setVerifying] = useState(false);

  // Function to mask email address
  const maskEmail = (email: string) => {
    if (!email) return "***@***.***";

    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return "***@***.***";

    const maskedLocal =
      localPart.length > 2
        ? `${localPart[0]}***${localPart[localPart.length - 1]}`
        : `${localPart[0]}***`;

    return `${maskedLocal}@${domain}`;
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleBack = () => {
    navigate("/balance-details");
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (value && !/^[0-9]$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      setResendTimer(58);
      setCanResend(false);
    }
  };

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      navigate("/income-plus");
    }, 3000);
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">
          Verify your Income+ acco...
        </h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Enter 6-digit code
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Your code was sent to{" "}
            <span className="text-gray-900 font-medium">
              {maskEmail(demoUser.email)}
            </span>
          </p>

          {/* Code Input */}
          <div className="flex justify-center gap-3 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-12 text-center text-xl font-semibold border-2 rounded-lg focus:outline-none transition-colors ${
                  digit
                    ? "border-[#FE2C55] bg-red-50"
                    : "border-gray-200 focus:border-[#FE2C55]"
                }`}
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]"
              />
            ))}
          </div>

          {/* Resend Section */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  canResend
                    ? "text-[#FE2C55] hover:bg-red-50"
                    : "text-gray-400 cursor-not-allowed"
                }`}
                onClick={handleResend}
                disabled={!canResend || verifying}
              >
                <span>Resend email</span>
                {!canResend && (
                  <span className="text-sm">({resendTimer}s)</span>
                )}
                {canResend && <ArrowPathIcon className="w-4 h-4" />}
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
                onClick={handleVerify}
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
        </div>
      </div>
    </div>
  );
}
