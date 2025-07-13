export default function StudioTabs() {
  return (
    <div className="flex border-b">
      <button className="flex-1 font-semibold tracking-wide text-center p-2 border-b-2 border-primary text-sm text-primary">
        Tools
      </button>
      <button className="flex-1 font-semibold tracking-wide text-center p-2 border-b-2 border-transparent text-sm hover:text-primary text-muted-foreground">
        LIVE
      </button>
    </div>
  )
}
