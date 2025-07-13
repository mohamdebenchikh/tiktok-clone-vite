import React from "react";
import { useState, useEffect } from "react";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import { useProfileEmail } from "../store/hooks";
import "../css/styles/income-verification.css";

const IncomeVerificationPage: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();
  const profileEmail = useProfileEmail();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(58);
  const [canResend, setCanResend] = useState(false);
  const [verifying, setVerifying] = useState(false);

  // Function to mask email address
  const maskEmail = (email: string) => {
    if (!email) return "***@***.***";

    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return "***@***.***";

    // Show first character and last character of local part, mask the middle
    const maskedLocal =
      localPart.length > 2 ? `${localPart[0]}***${localPart[localPart.length - 1]}` : `${localPart[0]}***`;

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
    navigateWithLoading("/balance-details", { message: "Loading Balance Details..." });
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple characters
    if (value && !/^[0-9]$/.test(value)) return; // Only allow single digit 0-9

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to focus previous input
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      setResendTimer(58);
      setCanResend(false);
      // Here you would typically make an API call to resend the code
    }
  };

  // Handle code verification
  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      // Navigate to Income+ page after successful verification
      navigateWithLoading("/income-plus", { message: "Loading Income+..." });
    }, 3000);
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <div className="container income-verification-page">
      {/* Header */}
      <div className="verification-header">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="verification-title">Verify your Income+ acco...</h1>
      </div>

      {/* Content */}
      <div className="verification-content">
        <div className="verification-form">
          <h2 className="form-title">Enter 6-digit code</h2>
          <p className="form-subtitle">
            Your code was sent to <span className="email-mask">{maskEmail(profileEmail)}</span>
          </p>

          {/* Code Input */}
          <div className="code-input-container">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`code-input${digit ? " filled" : ""}`}
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]"
              />
            ))}
          </div>

          {/* Resend Section */}
          <div className="resend-section">
            <button
              className={`resend-button ${canResend ? "active" : ""}`}
              onClick={handleResend}
              disabled={!canResend || verifying}
            >
              <span className="resend-text">Resend email</span>
              {!canResend && <span className="resend-timer">{resendTimer}s</span>}
              {canResend && (
                <svg className="refresh-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M1 4v6h6M23 20v-6h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            {verifying ? (
              <div className="verify-loading">
                <span className="loading-spinner" />
              </div>
            ) : (
              <button
                className="resend-button verify-button"
                onClick={handleVerify}
                disabled={!isCodeComplete}
              >
                <span className="resend-text">Verify</span>
              </button>
            )}
          </div>

          {/* Can't Access Email */}
          <div className="email-access-section">
            <button className="email-access-button">Can't access email?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeVerificationPage;
