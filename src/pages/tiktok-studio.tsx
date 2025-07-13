import { ScrollArea } from "@/components/ui/scroll-area";
import StudioHeader from "@/components/tiktok-studio/studio-header";
import StudioContent from "@/components/tiktok-studio/studio-content";

export default function TiktokStudioPage() {
    return (
        <div className="h-full bg-gray-100 sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
            <StudioHeader />
            <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full w-full">
                    <StudioContent />
                </ScrollArea>
            </div>
        </div>
    )
}