import { ScrollArea } from "@/components/ui/scroll-area";
import BalanceHeader from "@/components/balance/balance-header";
import BalanceContent from "@/components/balance/balance-content";

export default function BalancePage() {
    return (
        <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
            <BalanceHeader />
            <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full w-full">
                    <BalanceContent />
                </ScrollArea>
            </div>
        </div>
    )
}