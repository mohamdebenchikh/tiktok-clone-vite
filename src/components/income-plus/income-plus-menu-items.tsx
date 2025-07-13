import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

export default function IncomePlusMenuItems() {
  const navigate = useNavigate();

  const handleTransactions = () => {
    navigate("/transaction-history");
  };

  const menuItems = [
    {
      label: "Transactions",
      onClick: handleTransactions,
    },
    {
      label: "Help center",
      onClick: () => {},
    },
    {
      label: "Withdrawal method",
      onClick: () => {},
    },
    {
      label: "Tax information",
      onClick: () => {},
    },
  ];

  return (
    <div className="space-y-1">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-lg"
        >
          <span className="text-gray-900 font-medium">{item.label}</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      ))}
    </div>
  );
}
