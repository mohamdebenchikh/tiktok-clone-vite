import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import IncomeVerificationForm from "./income-verification-form";
import IncomeVerificationActions from "./income-verification-actions";

export default function IncomeVerificationContent() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(58);
  const [canResend, setCanResend] = useState(false);
  const [verifying, setVerifying] = useState(false);

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
    <div className="flex flex-col w-full p-6">
      <IncomeVerificationForm 
        code={code}
        onCodeChange={handleCodeChange}
        onKeyDown={handleKeyDown}
      />
      <IncomeVerificationActions
        canResend={canResend}
        resendTimer={resendTimer}
        verifying={verifying}
        isCodeComplete={isCodeComplete}
        onResend={handleResend}
        onVerify={handleVerify}
      />
      <div className="h-10"></div>
    </div>
  );
}
