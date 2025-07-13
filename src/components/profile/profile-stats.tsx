export default function ProfileStats() {
  return (
    <div className="flex gap-12 mb-4">
      <div className="flex flex-col items-center justify-center leading-5 space-y-0">
        <strong className="text-primary font-bold">156</strong>
        <small className="text-muted-foreground text-xs">Following</small>
      </div>
      <div className="flex flex-col items-center justify-center leading-5 space-y-0">
        <strong className="text-primary font-bold">69.7K</strong>
        <small className="text-muted-foreground text-xs">Followers</small>
      </div>
      <div className="flex flex-col items-center justify-center leading-5 space-y-0">
        <strong className="text-primary font-bold">6.8M</strong>
        <small className="text-muted-foreground text-xs">Likes</small>
      </div>
    </div>
  )
}
