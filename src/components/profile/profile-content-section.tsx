import { useState } from "react";
import ProfileTabs, { type TabType } from "./profile-tabs";
import VideoGrid from "./video-grid";

export default function ProfileContentSection() {
  const [activeTab, setActiveTab] = useState<TabType>('posts');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    console.log('Active tab changed to:', tab);
  };

  return (
    <div className="flex flex-col w-full">
      <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <VideoGrid />
    </div>
  )
}
