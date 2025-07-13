import { ChevronDown } from "lucide-react";

interface MonthlyEarningsMonthSelectorProps {
  selectedMonth: string;
}

export default function MonthlyEarningsMonthSelector({ selectedMonth }: MonthlyEarningsMonthSelectorProps) {
  return (
    <div className="relative">
      <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg">
        <span className="font-medium text-gray-900">{selectedMonth}</span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
}
