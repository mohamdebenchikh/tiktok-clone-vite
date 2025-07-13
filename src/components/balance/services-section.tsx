import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import TransactionsIcon from "@/assets/transactions.png";
import ShieldUserIcon from "@/assets/shield-user-icon.png";
import FAQIcon from "@/assets/faq.png";

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleTransactions = () => {
    navigate("/transaction-history");
  };

  const handleIdentityVerification = () => {
    navigate("/income-verification");
  };

  return (
    <div className="space-y-2">
      <div>
        <strong className="text-primary font-bold">Services</strong>
      </div>

      <div className="bg-white p-1 space-y-1 shadow rounded-lg">
        <button
          onClick={handleTransactions}
          className="flex items-center hover:bg-accent justify-between w-full p-4 transition-colors"
        >
          <div className="flex items-center gap-2">
            <img src={TransactionsIcon} className="size-4" alt="" />
            <span className="text-primary/80 text-sm font-semibold">
              Transactions
            </span>
          </div>
          <ChevronRight className="size-5 text-muted-foreground" />
        </button>

        <button
          onClick={handleIdentityVerification}
          className="flex items-center hover:bg-accent justify-between w-full p-4 transition-colors"
        >
          <div className="flex items-center gap-2">
            <img src={ShieldUserIcon} className="size-4" alt="" />
            <span className="text-primary/80 text-sm font-semibold">
              Identity verification
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs rounded-full bg-green-500/20 text-green-600 px-3 py-1">
              Verified
            </span>
            <ChevronRight className="size-5 text-muted-foreground" />
          </div>
        </button>

        <button className="flex items-center hover:bg-accent justify-between w-full p-4 transition-colors">
          <div className="flex items-center gap-2">
            <img src={FAQIcon} className="size-4" alt="" />
            <span className="text-primary/80 text-sm font-semibold">
              Help & feedback
            </span>
          </div>
          <ChevronRight className="size-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
