import { useState } from "react"
import { LockIcon, Repeat2Icon, BookmarkIcon, Heart } from "lucide-react"
import { BarsIcon } from "../../icons";

export type TabType = 'posts' | 'private' | 'reposts' | 'bookmarks' | 'likes';

interface ProfileTabsProps {
  activeTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

export default function ProfileTabs({ activeTab: controlledActiveTab, onTabChange }: ProfileTabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<TabType>('posts');

  // Use controlled tab if provided, otherwise use internal state
  const activeTab = controlledActiveTab ?? internalActiveTab;

  const handleTabClick = (tab: TabType) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tab);
    }
    onTabChange?.(tab);
  };

  const tabs = [
    { id: 'posts' as TabType, icon: BarsIcon, size: "size-4" },
    { id: 'private' as TabType, icon: LockIcon, size: "size-5" },
    { id: 'reposts' as TabType, icon: Repeat2Icon, size: "size-5" },
    { id: 'bookmarks' as TabType, icon: BookmarkIcon, size: "size-5" },
    { id: 'likes' as TabType, icon: Heart, size: "size-5" },
  ];

  return (
    <div className="flex w-full border-b items-center justify-between px-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`py-2 px-4 flex items-center justify-center flex-1 transition-colors ${
              isActive
                ? 'border-b-2 text-primary border-primary'
                : 'text-muted-foreground border-b-2 border-transparent hover:text-primary'
            }`}
          >
            <Icon className={tab.size} />
          </button>
        );
      })}
    </div>
  )
}
