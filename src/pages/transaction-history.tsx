import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronLeft, FilterIcon } from "lucide-react";

type FilterType = "All" | "Rewards" | "Revenue" | "Purchase" | "Refund";

export default function TransactionHistory() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const handleBack = () => {
    navigate("/balance");
  };

  const handleTransactionClick = (transactionId: number) => {
    navigate("/transaction-details");
  };

  // All transactions data
  const allTransactions = [
    {
      id: 1,
      title: "Programme de Récompenses pour les créateurs",
      date: "06/30",
      type: "Rewards",
      amount: "USD 2.99",
      month: "Jun 2025",
    },
    {
      id: 2,
      title: "Live Stream Revenue",
      date: "06/28",
      type: "Revenue",
      amount: "USD 15.50",
      month: "Jun 2025",
    },
    {
      id: 3,
      title: "Coin Purchase",
      date: "06/25",
      type: "Purchase",
      amount: "USD -10.00",
      month: "Jun 2025",
    },
    {
      id: 4,
      title: "Video Engagement Bonus",
      date: "05/30",
      type: "Rewards",
      amount: "USD 5.00",
      month: "May 2025",
    },
    {
      id: 5,
      title: "Gift Revenue",
      date: "05/28",
      type: "Revenue",
      amount: "USD 25.75",
      month: "May 2025",
    },
    {
      id: 6,
      title: "Coin Package Refund",
      date: "05/25",
      type: "Refund",
      amount: "USD 8.99",
      month: "May 2025",
    },
    {
      id: 7,
      title: "Creator Fund Payout",
      date: "04/30",
      type: "Revenue",
      amount: "USD 150.00",
      month: "Apr 2025",
    },
    {
      id: 8,
      title: "Premium Subscription Purchase",
      date: "04/15",
      type: "Purchase",
      amount: "USD -19.99",
      month: "Apr 2025",
    },
    {
      id: 9,
      title: "Live Stream Super Chat",
      date: "04/10",
      type: "Revenue",
      amount: "USD 45.00",
      month: "Apr 2025",
    },
    {
      id: 10,
      title: "Effect Pack Purchase",
      date: "04/05",
      type: "Purchase",
      amount: "USD -5.99",
      month: "Apr 2025",
    },
    {
      id: 11,
      title: "Weekly Challenge Reward",
      date: "04/01",
      type: "Rewards",
      amount: "USD 20.00",
      month: "Apr 2025",
    },
  ];

  // Filter transactions
  const filteredTransactions =
    activeFilter === "All"
      ? allTransactions
      : allTransactions.filter(
          (transaction) => transaction.type === activeFilter,
        );

  // Group by month
  const groupedTransactions = filteredTransactions.reduce(
    (groups, transaction) => {
      const month = transaction.month;
      if (!groups[month]) {
        groups[month] = [];
      }
      groups[month].push(transaction);
      return groups;
    },
    {} as Record<string, typeof allTransactions>,
  );

  return (
    <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
      <div className="relative flex items-center justify-between p-2">
        <Button
          onClick={handleBack}
          variant={"ghost"}
          className="hover:bg-gray-200 rounded-full"
          size={"icon"}
        >
          <ChevronLeft className="size-5" />
        </Button>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-primary text-lg font-semibold tracking-wide">
            Transaction History
          </h2>
        </div>

        <Button
          variant={"ghost"}
          className="hover:bg-gray-200 rounded-full"
          size={"icon"}
        >
          <FilterIcon className="size-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="flex flex-col w-full p-2 space-y-3">
            <div className="flex items-center gap-1">
              <Button
                size={"sm"}
                variant={activeFilter === "All" ? "default" : "secondary"}
                onClick={() => setActiveFilter("All")}
              >
                All
              </Button>
              <Button
                size={"sm"}
                variant={activeFilter === "Rewards" ? "default" : "secondary"}
                onClick={() => setActiveFilter("Rewards")}
              >
                Rewards
              </Button>
              <Button
                size={"sm"}
                variant={activeFilter === "Revenue" ? "default" : "secondary"}
                onClick={() => setActiveFilter("Revenue")}
              >
                Revenue
              </Button>
              <Button
                size={"sm"}
                variant={activeFilter === "Purchase" ? "default" : "secondary"}
                onClick={() => setActiveFilter("Purchase")}
              >
                Purchase
              </Button>
              <Button
                size={"sm"}
                variant={activeFilter === "Refund" ? "default" : "secondary"}
                onClick={() => setActiveFilter("Refund")}
              >
                Refund
              </Button>
            </div>

            <div className="space-y-2">
              {Object.entries(groupedTransactions).map(
                ([month, transactions]) => (
                  <div key={month} className="bg-white shadow rounded-lg">
                    <div className="py-2 px-3 border-b">
                      <button className="flex text-sm font-light text-muted-foreground items-end gap-1">
                        {month}
                        <ChevronDown className="size-4" />
                      </button>
                    </div>
                    {transactions.map((transaction, index) => (
                      <div
                        key={transaction.id}
                        className={`py-2 px-3 flex items-center justify-between ${index > 0 ? "border-t" : ""}`}
                      >
                        <div className="leading-5">
                          <p className="text-sm">{transaction.title}</p>
                          <span className="text-xs text-muted-foreground">
                            {transaction.date} | {transaction.type}
                          </span>
                        </div>
                        <span className="font-bold text-sm text-nowrap">
                          {transaction.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
