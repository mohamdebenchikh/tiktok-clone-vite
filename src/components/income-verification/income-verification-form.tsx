import { demoUser } from "@/data/demo-data";

interface IncomeVerificationFormProps {
  code: string[];
  onCodeChange: (index: number, value: string) => void;
  onKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
}

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

export default function IncomeVerificationForm({ code, onCodeChange, onKeyDown }: IncomeVerificationFormProps) {
  return (
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
            onChange={(e) => onCodeChange(index, e.target.value)}
            onKeyDown={(e) => onKeyDown(index, e)}
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
    </div>
  );
}
