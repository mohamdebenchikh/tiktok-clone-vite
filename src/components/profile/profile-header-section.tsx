import ProfileAvatar from "./profile-avatar";
import ProfileInfo from "./profile-info";
import ProfileStats from "./profile-stats";
import ProfileBio from "./profile-bio";
import ProfileActions from "./profile-actions";

export default function ProfileHeaderSection() {
  return (
    <div className="w-full flex items-center justify-center flex-col py-6">
      <ProfileAvatar />
      <ProfileInfo />
      <ProfileStats />
      <ProfileBio />
      <ProfileActions />
    </div>
  )
}
