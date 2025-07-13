import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, CopyIcon } from "lucide-react";


export default function TransactionDetailsPage() {
    return (
        <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
            <div className="relative flex items-center justify-between p-2">
                <Button variant={'ghost'} className="hover:bg-gray-200 rounded-full" size={'icon'}>
                    <ChevronLeft className="size-5" />
                </Button>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-primary text-lg font-semibold tracking-wide">Transaction Details</h2>
                </div>

            </div>

            <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full w-full">
                    <div className="flex flex-col w-full px-2 py-4 space-y-3">
                        <div className="bg-white  space-y-3 shadow rounded-lg p-4 text-center">
                            <p className="text-sm">Programme de Récompenses pour les créateurs</p>
                            <div className="flex items-end justify-center">
                                <span>USD</span>
                                <span className="text-4xl font-bold">2.99</span>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg divide-gray-200">
                            <div className="flex text-sm items-center justify-between p-4">
                                <span className="text-muted-foreground">Stauts</span>
                                <span className="flex items-center gap-1">
                                    <span className="size-2  mt-1 rounded-full bg-green-500"></span>
                                    Completed</span>
                            </div>

                            <div className="flex text-sm items-center justify-between p-4">
                                <span className="text-muted-foreground">Transaction type</span>
                                <span className="flex items-center gap-1">
                                    Rewards</span>
                            </div>

                            <div className="flex text-sm items-center justify-between p-4">
                                <span className="text-muted-foreground">Action type</span>
                                <span className="flex items-center gap-1">
                                    Income+</span>
                            </div>

                            <div className="flex text-sm items-center justify-between p-4">
                                <span className="text-muted-foreground">Created at</span>
                                <span className="flex items-center gap-1">
                                    06/30/2024 1:31:08 AM</span>
                            </div>

                            <div className="flex text-sm items-center justify-between p-4">
                                <span className="text-muted-foreground">Transaction ID
                                </span>
                                <span className="flex items-center gap-1">
                                    <small className="text-xs max-w-[120px] overflow-hidden text-ellipsis">b2c_trans_300073860871970347976360</small>
                                    <button  className="text-muted-foreground p-2 rounded-full hover:text-primary hover:bg-accent"><CopyIcon className="size-4" /></button>
                                </span>
                            </div>
                        </div>

                        <button className="w-full flex items-center rounded-lg p-2 justify-center text-muted-foreground hover:bg-gray-200">
                            <span>Need help?</span>
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}