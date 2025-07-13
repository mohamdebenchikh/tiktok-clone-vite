import { ScrollArea } from '@/components/ui/scroll-area';
import Header from "@/components/profile/header";
import BottomNavigation from "@/components/profile/bottom-navigation";
import ProfileHeaderSection from "@/components/profile/profile-header-section";
import ProfileContentSection from "@/components/profile/profile-content-section";

export default function Profile() {
    return (
        <div className="h-full bg-primary-foreground sm:rounded-lg sm:shadow relative overflow-hidden flex flex-col">
            <Header />
            <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full w-full">
                    <div className="flex flex-col w-full">
                        <ProfileHeaderSection />
                        <ProfileContentSection />
                    </div>
                </ScrollArea>
            </div>
            <BottomNavigation />
        </div>
    )
}
